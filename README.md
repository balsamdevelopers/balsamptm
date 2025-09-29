hi ... I am planning to develop an app to be used in my school for the ptm .... it is like when parents enter the campus for the ptm on 11 Oct ... they will be asked to open up a link through a QR Code ... where they will have to open the app and fill in the first few letters of the student's name ... based on suggestions from the app ... the parent should select his/her ward's name ... which will then autopopulate the class and section as well as the admission number ... once the parent clicks on submit ... he/she should be shown a time slot for him/her to meet the class teachers of his/her ward.

in the backend I need a google spreasheet sheet1 with student name, class&section, & a`dmission number of all students

also in the backend, sheet2 of the spreadsheet will list of timeslots of 5 minutes starting from 9:30 a.m. to 12:30 p.m. and 1:30 p.m. to 2:30 p.m.

The timeslot should be as per the prior plan ... also let us say, if a parent fill the form at 11:59 .... let it be 12:15 slot because 12 slot would be too close for the parent to walk down to the respective classroom ..... if there are others already in the 12 and 12:10 slot, then whatever comes next should be the one to be shown 

Once the background work is done, I want a dashboard for teachers which should list down parents who have filled this app form ... the dashboard should contain a drop down for teachers to select class&section ... once that is done, the dashboard should show time slots alloted for all parents who are in the school campus on that day, with the following colour coding (background text colour for student name) - green for current ... yellow for immediate next .... also once a timeslot is over there should be short bell or beep sound 

Very important, I am planning to do this entire app in github .... along with google spreadsheet .... 

***************************
https://docs.google.com/spreadsheets/d/1SEQlTQ0ZAyssuQNDag792xVHl7LWs5-xuK2V53i2ANI/edit?usp=sharing
****************************
/**
 * PTM Scheduling App - Google Apps Script Backend
 * * This script serves as a Web App API to handle student lookup,
 * time slot booking, and dashboard data retrieval from the Google Sheet.
 */

// SPREADSHEET CONFIGURATION: Updated with your specified sheet names.
const SPREADSHEET_ID = '1SEQlTQ0ZAyssuQNDag792xVHl7LWs5-xuK2V53i2ANI';
const STUDENT_SHEET_NAME = 'Student Data'; // Sheet 1: "Student Data"
const SLOTS_SHEET_NAME = 'Time Slot Booking'; // Sheet 2: "Time Slot Booking"
const TIME_SLOT_BUFFER_MINUTES = 15; // Parents must be booked a slot at least 15 minutes from now.

/**
 * Main entry point for GET requests from the web application.
 * Handles search, booking, and dashboard actions based on URL parameters.
 * @param {Object} e - Event object containing request parameters.
 * @returns {GoogleAppsScript.Content.TextOutput} - JSON response.
 */
function doGet(e) {
  const action = e.parameter.action;

  if (action === 'search') {
    return handleSearch(e);
  } else if (action === 'book') {
    return handleBooking(e);
  } else if (action === 'dashboard') {
    return handleDashboard(e);
  } else {
    return createJsonResponse({ success: false, message: 'Invalid action specified.' }, 400);
  }
}

/**
 * Creates a standard JSON response object for the Web App.
 * @param {Object} data - The data payload to return.
 * @param {number} status - HTTP status code (default 200).
 * @returns {GoogleAppsScript.Content.TextOutput}
 */
function createJsonResponse(data, status = 200) {
  const output = ContentService.createTextOutput();
  output.setMimeType(ContentService.MimeType.JSON);
  output.setContent(JSON.stringify(data));
  if (status !== 200) {
    // Note: GAS doesn't allow setting HTTP status directly, but we can log the intended status.
    Logger.log('Responding with intended status: ' + status);
  }
  return output;
}

/**
 * Helper function to get the sheet by name.
 * @param {string} sheetName - The name of the sheet.
 * @returns {GoogleAppsScript.Spreadsheet.Sheet}
 */
function getSheet(sheetName) {
  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  return ss.getSheetByName(sheetName);
}

// --- API Handler: Search for Students ---
function handleSearch(e) {
  const query = e.parameter.query ? e.parameter.query.toLowerCase() : '';
  const sheet = getSheet(STUDENT_SHEET_NAME);

  if (!sheet) {
    return createJsonResponse({ success: false, message: 'Student Data sheet not found.' }, 500);
  }

  const range = sheet.getDataRange();
  const values = range.getValues();
  // Check if there are values beyond the header
  if (values.length <= 1) {
    return createJsonResponse({ success: true, students: [] });
  }
  
  const studentData = values.slice(1);
  const results = [];

  // Sheet 1 column indices: Student Name (0), Class & Section (1), Admission Number (2)
  const NAME_COL = 0;
  const CLASS_COL = 1;
  const ADM_COL = 2;

  if (query.length < 2) {
    return createJsonResponse({ success: true, students: [] });
  }

  for (let i = 0; i < studentData.length; i++) {
    const row = studentData[i];
    const studentName = row[NAME_COL] ? String(row[NAME_COL]).toLowerCase() : '';

    if (studentName.startsWith(query)) {
      results.push({
        name: row[NAME_COL],
        classSection: row[CLASS_COL],
        admissionNo: row[ADM_COL]
      });
    }
    // Limit results for performance
    if (results.length >= 20) break;
  }

  return createJsonResponse({ success: true, students: results });
}

// --- API Handler: Book a Time Slot ---
function handleBooking(e) {
  const studentName = e.parameter.name;
  const classSection = e.parameter.class;
  const admNo = e.parameter.adm;
  
  if (!studentName || !classSection) {
    return createJsonResponse({ success: false, message: 'Missing student details for booking.' }, 400);
  }

  const sheet = getSheet(SLOTS_SHEET_NAME);
  if (!sheet) {
    return createJsonResponse({ success: false, message: 'Time Slot Booking sheet not found.' }, 500);
  }

  const values = sheet.getDataRange().getValues();
  // Sheet 2 column indices: Time Slot (24h) (0), Time Slot (Display) (1), Status (2), Booked By (3), Class & Section (4)
  const TIME24_COL = 0;
  const TIME_DISPLAY_COL = 1;
  const STATUS_COL = 2;
  const BOOKED_BY_COL = 3;
  const CLASS_SECTION_COL = 4;
  
  const now = new Date();
  const targetTime = new Date(now.getTime() + TIME_SLOT_BUFFER_MINUTES * 60000); // Current time + 15 min buffer

  let bookedSlot = null;
  let bookedRowIndex = -1;

  // Start from row 1 (index 1) to skip headers
  for (let i = 1; i < values.length; i++) {
    const row = values[i];
    const slotTime24h = row[TIME24_COL]; 
    const status = row[STATUS_COL];

    if (status && String(status).toLowerCase() === 'available') {
      
      // Convert the 24h slot time string to a Date object for comparison
      const [hours, minutes] = String(slotTime24h).split(':').map(Number);
      const slotDate = new Date();
      slotDate.setHours(hours, minutes, 0, 0);

      if (slotDate.getTime() > targetTime.getTime()) {
        
        // FOUND THE SLOT: Book it!
        bookedSlot = row[TIME_DISPLAY_COL];
        bookedRowIndex = i + 1; // +1 because array index is 0-based, sheet row is 1-based

        // Update the sheet row (column index + 1)
        sheet.getRange(bookedRowIndex, STATUS_COL + 1).setValue('Booked');
        sheet.getRange(bookedRowIndex, BOOKED_BY_COL + 1).setValue(studentName);
        sheet.getRange(bookedRowIndex, CLASS_SECTION_COL + 1).setValue(classSection);
        
        Logger.log(`Booked slot ${bookedSlot} for ${studentName} (${classSection}).`);

        return createJsonResponse({ 
            success: true, 
            bookedSlot: bookedSlot,
            studentName: studentName
        });
      }
    }
  }

  // If the loop finishes without finding an available slot
  return createJsonResponse({ 
      success: false, 
      message: 'Sorry, all available PTM slots have been booked or the next slot is too close to the current time.' 
  }, 404);
}

// --- API Handler: Teacher Dashboard Data ---
function handleDashboard(e) {
  const selectedClass = e.parameter.class;
  
  if (!selectedClass) {
    return createJsonResponse({ success: false, message: 'Class parameter is required for the dashboard.' }, 400);
  }

  const sheet = getSheet(SLOTS_SHEET_NAME);
  if (!sheet) {
    return createJsonResponse({ success: false, message: 'Time Slot Booking sheet not found.' }, 500);
  }

  const values = sheet.getDataRange().getValues();
  // Sheet 2 column indices: Time Slot (24h) (0), Time Slot (Display) (1), Status (2), Booked By (3), Class & Section (4)
  const TIME24_COL = 0;
  const TIME_DISPLAY_COL = 1;
  const STATUS_COL = 2;
  const BOOKED_BY_COL = 3;
  const CLASS_SECTION_COL = 4;
  
  const dashboardData = [];

  // Start from row 1 (index 1) to skip headers
  for (let i = 1; i < values.length; i++) {
    const row = values[i];
    const rowClass = row[CLASS_SECTION_COL];
    
    // Only return data relevant to the selected class OR slots that are still Available
    if (String(rowClass) === String(selectedClass) || String(row[STATUS_COL]).toLowerCase() === 'available') {
      dashboardData.push({
        timeSlot: row[TIME_DISPLAY_COL],
        timeSlot24: row[TIME24_COL],
        studentName: row[BOOKED_BY_COL] || 'N/A',
        classSection: rowClass || 'N/A',
        status: row[STATUS_COL] || 'Available'
      });
    }
  }

  return createJsonResponse({ success: true, slots: dashboardData });
}

