hi ... I am planning to develop an app to be used in my school for the ptm .... it is like when parents enter the campus for the ptm on 11 Oct ... they will be asked to open up a link through a QR Code ... where they will have to open the app and fill in the first few letters of the student's name ... based on suggestions from the app ... the parent should select his/her ward's name ... which will then autopopulate the class and section as well as the admission number ... once the parent clicks on submit ... he/she should be shown a time slot for him/her to meet the class teachers of his/her ward.

Here is how I plan to use google spreadsheet
1. I have a spreadsheet named "PTMDataSheet"
2. Sheet 1 here is named "Student Data" with the following header in columns - Student Name	Class & Section	Admission Number
2. Sheet 2 is named "Time Slot Booking" with the following header in colums - Time Slot (24h)	Time Slot Display	Status	Booked by (Student Name)	Class & Section

The timeslot should be as per the prior plan ... also let us say, if a parent fill the form at 11:59 .... let it be 12:15 slot because 12 slot would be too close for the parent to walk down to the respective classroom ..... if there are others already in the 12 and 12:10 slot, then whatever comes next should be the one to be shown

Once the background work is done, I want a dashboard for teachers which should list down parents who have filled this app form ... the dashboard should contain a drop down for teachers to select class&section ... once that is done, the dashboard should show time slots alloted for all parents who are in the school campus on that day, with the following colour coding (background text colour for student name) - green for current ... yellow for immediate next .... also once a timeslot is over there should be short bell or beep sound

Very important, I am planning to do this entire app in github .... along with google spreadsheet ....

***************************
https://docs.google.com/spreadsheets/d/1SEQlTQ0ZAyssuQNDag792xVHl7LWs5-xuK2V53i2ANI/edit?usp=sharing

https://script.google.com/macros/s/AKfycbzfjvvnAM3wPr3T7UDnH9Z5AFxs4gZc2EVPpVE_NS_zu6WBEoz5qYobb5_6ThuXVmDS/exec

https://script.google.com/macros/s/AKfycbyWdxbyHImSkYAu1FuuXWbgrejOtSAEiZeAQC0JxrDpX5AWobwy30SeM7dfraHHR2TC/exec
****************************


