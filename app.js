// Quiz Data - 75 Nature & Animals Questions
const quizData = [
  {
    question: "What color is a polar bear's skin?",
    options: ["White", "Pink", "Black", "Brown"],
    correct: 2
  },
  {
    question: "How many legs does a spider have?",
    options: ["6", "8", "10", "12"],
    correct: 1
  },
  {
    question: "What do pandas mainly eat?",
    options: ["Fish", "Meat", "Bamboo", "Fruits"],
    correct: 2
  },
  {
    question: "Which animal is known as the 'King of the Jungle'?",
    options: ["Tiger", "Lion", "Elephant", "Bear"],
    correct: 1
  },
  {
    question: "What do bees make?",
    options: ["Milk", "Honey", "Butter", "Cheese"],
    correct: 1
  },
  {
    question: "How many hearts does an octopus have?",
    options: ["1", "2", "3", "4"],
    correct: 2
  },
  {
    question: "What is the fastest land animal?",
    options: ["Lion", "Horse", "Cheetah", "Rabbit"],
    correct: 2
  },
  {
    question: "Which bird can't fly?",
    options: ["Eagle", "Penguin", "Parrot", "Robin"],
    correct: 1
  },
  {
    question: "What do caterpillars turn into?",
    options: ["Bees", "Butterflies", "Birds", "Beetles"],
    correct: 1
  },
  {
    question: "Where do fish breathe from?",
    options: ["Nose", "Mouth", "Gills", "Skin"],
    correct: 2
  },
  {
    question: "What season do bears hibernate?",
    options: ["Spring", "Summer", "Fall", "Winter"],
    correct: 3
  },
  {
    question: "Which animal has a trunk?",
    options: ["Rhino", "Elephant", "Hippo", "Giraffe"],
    correct: 1
  },
  {
    question: "What sound do owls make?",
    options: ["Chirp", "Roar", "Hoot", "Bark"],
    correct: 2
  },
  {
    question: "How many wings does a butterfly have?",
    options: ["2", "4", "6", "8"],
    correct: 1
  },
  {
    question: "What color are flamingos when they are born?",
    options: ["Pink", "Red", "Gray", "White"],
    correct: 2
  },
  {
    question: "Which tree stays green all year?",
    options: ["Oak", "Maple", "Pine", "Apple"],
    correct: 2
  },
  {
    question: "What do rabbits love to eat?",
    options: ["Meat", "Carrots", "Fish", "Nuts"],
    correct: 1
  },
  {
    question: "How many humps does a camel have?",
    options: ["1 or 2", "3", "4", "5"],
    correct: 0
  },
  {
    question: "What is the biggest animal on Earth?",
    options: ["Elephant", "Giraffe", "Blue Whale", "Dinosaur"],
    correct: 2
  },
  {
    question: "Where do penguins live?",
    options: ["Hot places", "Cold places", "Forests", "Deserts"],
    correct: 1
  },
  {
    question: "What do plants need to grow?",
    options: ["Only water", "Sunlight and water", "Only soil", "Only air"],
    correct: 1
  },
  {
    question: "Which animal changes color?",
    options: ["Dog", "Cat", "Chameleon", "Horse"],
    correct: 2
  },
  {
    question: "What do squirrels collect for winter?",
    options: ["Flowers", "Leaves", "Nuts", "Rocks"],
    correct: 2
  },
  {
    question: "How do snakes move?",
    options: ["Flying", "Slithering", "Hopping", "Running"],
    correct: 1
  },
  {
    question: "What is a baby frog called?",
    options: ["Cub", "Pup", "Tadpole", "Chick"],
    correct: 2
  },
  {
    question: "Which animal has black and white stripes?",
    options: ["Horse", "Zebra", "Cow", "Pig"],
    correct: 1
  },
  {
    question: "What do flowers need to make seeds?",
    options: ["Rain", "Snow", "Pollen", "Wind only"],
    correct: 2
  },
  {
    question: "Where do birds build their homes?",
    options: ["Underground", "In nests", "In caves", "In water"],
    correct: 1
  },
  {
    question: "What do wolves travel in?",
    options: ["Alone", "Pairs", "Packs", "Herds"],
    correct: 2
  },
  {
    question: "Which season do flowers bloom the most?",
    options: ["Winter", "Spring", "Summer", "Fall"],
    correct: 1
  },
  {
    question: "What helps birds fly?",
    options: ["Feathers", "Fur", "Scales", "Shells"],
    correct: 0
  },
  {
    question: "Where do fish live?",
    options: ["Trees", "Water", "Sky", "Ground"],
    correct: 1
  },
  {
    question: "What do baby birds eat?",
    options: ["Candy", "Worms", "Ice cream", "Cookies"],
    correct: 1
  },
  {
    question: "Which animal has a pouch?",
    options: ["Dog", "Cat", "Kangaroo", "Bird"],
    correct: 2
  },
  {
    question: "What makes plants green?",
    options: ["Water", "Soil", "Chlorophyll", "Air"],
    correct: 2
  },
  {
    question: "How do bees help flowers?",
    options: ["Eating them", "Pollinating them", "Sleeping on them", "Hiding in them"],
    correct: 1
  },
  {
    question: "What do deer eat?",
    options: ["Meat", "Plants", "Fish", "Bugs only"],
    correct: 1
  },
  {
    question: "Which animal sleeps hanging upside down?",
    options: ["Monkey", "Bat", "Bird", "Squirrel"],
    correct: 1
  },
  {
    question: "What protects a turtle?",
    options: ["Fur", "Feathers", "Shell", "Scales only"],
    correct: 2
  },
  {
    question: "Where do ants live?",
    options: ["In colonies", "Alone", "In water", "In trees only"],
    correct: 0
  },
  {
    question: "What do ladybugs eat?",
    options: ["Leaves", "Aphids", "Flowers", "Dirt"],
    correct: 1
  },
  {
    question: "How do dolphins breathe?",
    options: ["Through gills", "Through lungs", "Through skin", "Through fins"],
    correct: 1
  },
  {
    question: "What is a group of lions called?",
    options: ["Pack", "Herd", "Pride", "Flock"],
    correct: 2
  },
  {
    question: "Which animal is known for being very slow?",
    options: ["Cheetah", "Rabbit", "Sloth", "Horse"],
    correct: 2
  },
  {
    question: "What do earthworms do for soil?",
    options: ["Make it hard", "Make it healthy", "Make it dry", "Make it cold"],
    correct: 1
  },
  {
    question: "Where do desert animals get water?",
    options: ["From rivers only", "From their food", "From rain only", "From snow"],
    correct: 1
  },
  {
    question: "What helps a cactus store water?",
    options: ["Leaves", "Thick stem", "Roots only", "Flowers"],
    correct: 1
  },
  {
    question: "Which animal migrates the farthest?",
    options: ["Dog", "Cat", "Arctic Tern", "Cow"],
    correct: 2
  },
  {
    question: "What do mosquitoes eat?",
    options: ["Plants only", "Blood", "Water only", "Dirt"],
    correct: 1
  },
  {
    question: "How do fish stay warm in cold water?",
    options: ["Wearing coats", "Special blood", "Hiding", "Swimming fast only"],
    correct: 1
  },
  {
    question: "What is coral made of?",
    options: ["Rocks", "Plants", "Tiny animals", "Sand"],
    correct: 2
  },
  {
    question: "Which bird is a symbol of peace?",
    options: ["Eagle", "Dove", "Crow", "Hawk"],
    correct: 1
  },
  {
    question: "What do baby mammals drink?",
    options: ["Water", "Juice", "Milk", "Soda"],
    correct: 2
  },
  {
    question: "How do cats see in the dark?",
    options: ["Special eyes", "Using smell", "Using sound", "They can't"],
    correct: 0
  },
  {
    question: "What season do many animals have babies?",
    options: ["Winter", "Spring", "Summer", "Fall"],
    correct: 1
  },
  {
    question: "Which animal can regrow its tail?",
    options: ["Dog", "Cat", "Lizard", "Bird"],
    correct: 2
  },
  {
    question: "What do seeds need to start growing?",
    options: ["Warmth and water", "Cold only", "Darkness only", "Nothing"],
    correct: 0
  },
  {
    question: "How do whales talk to each other?",
    options: ["They don't", "With songs", "With colors", "With smells"],
    correct: 1
  },
  {
    question: "What makes a skunk smell bad?",
    options: ["Dirty fur", "Special spray", "Bad breath", "Muddy paws"],
    correct: 1
  },
  {
    question: "Where do polar bears live?",
    options: ["Hot places", "Arctic", "Forests", "Mountains only"],
    correct: 1
  },
  {
    question: "What do woodpeckers use their beaks for?",
    options: ["Swimming", "Finding insects", "Flying", "Sleeping"],
    correct: 1
  },
  {
    question: "How do giraffe babies reach the ground when born?",
    options: ["They fall", "Parents catch them", "They climb down", "They fly"],
    correct: 0
  },
  {
    question: "What covers a bird's body?",
    options: ["Fur", "Scales", "Feathers", "Skin only"],
    correct: 2
  },
  {
    question: "Which animal is known for its memory?",
    options: ["Mouse", "Elephant", "Fish", "Ant"],
    correct: 1
  },
  {
    question: "What do fireflies use their light for?",
    options: ["To see", "To communicate", "To scare enemies", "To stay warm"],
    correct: 1
  },
  {
    question: "How many eyes does a spider usually have?",
    options: ["2", "4", "8", "10"],
    correct: 2
  },
  {
    question: "What happens to leaves in fall?",
    options: ["They grow bigger", "They change color", "They turn into flowers", "Nothing"],
    correct: 1
  },
  {
    question: "Which animal breathes through its skin?",
    options: ["Dog", "Frog", "Bird", "Fish"],
    correct: 1
  },
  {
    question: "What do raccoons use their paws for?",
    options: ["Flying", "Swimming only", "Washing food", "Digging only"],
    correct: 2
  },
  {
    question: "How do snakes smell?",
    options: ["With nose only", "With tongue", "With eyes", "They can't smell"],
    correct: 1
  },
  {
    question: "What is the main food of a koala?",
    options: ["Bamboo", "Eucalyptus leaves", "Fish", "Berries"],
    correct: 1
  },
  {
    question: "How do penguins keep their eggs warm?",
    options: ["In nests", "On their feet", "In caves", "Underground"],
    correct: 1
  },
  {
    question: "What do hummingbirds eat?",
    options: ["Seeds only", "Nectar", "Meat", "Leaves only"],
    correct: 1
  },
  {
    question: "Which animal has the longest neck?",
    options: ["Horse", "Giraffe", "Elephant", "Camel"],
    correct: 1
  },
  {
    question: "What do beavers build?",
    options: ["Nests", "Dams", "Holes", "Caves"],
    correct: 1
  },
  {
    question: "How do plants make their own food?",
    options: ["They eat soil", "Photosynthesis", "They drink water only", "They eat bugs"],
    correct: 1
  }
];

// Game State
let currentQuestion = 0;
let score = 0;
let correctAnswers = 0;
let incorrectAnswers = 0;
let selectedAnswer = null;
let gameStarted = false;

// DOM Elements
const welcomeScreen = document.getElementById('welcomeScreen');
const quizScreen = document.getElementById('quizScreen');
const resultsScreen = document.getElementById('resultsScreen');
const startQuizBtn = document.getElementById('startQuiz');
const questionText = document.getElementById('questionText');
const answersContainer = document.getElementById('answersContainer');
const nextBtn = document.getElementById('nextBtn');
const questionNumber = document.getElementById('questionNumber');
const currentScore = document.getElementById('currentScore');
const accuracy = document.getElementById('accuracy');
const progressFill = document.getElementById('progressFill');
const themeToggle = document.getElementById('themeToggle');
const restartBtn = document.getElementById('restartBtn');
const playAgainBtn = document.getElementById('playAgainBtn');
const finalScore = document.getElementById('finalScore');
const correctAnswersSpan = document.getElementById('correctAnswers');
const incorrectAnswersSpan = document.getElementById('incorrectAnswers');
const finalAccuracy = document.getElementById('finalAccuracy');
const resultMessage = document.getElementById('resultMessage');

// Event Listeners
startQuizBtn.addEventListener('click', startQuiz);
nextBtn.addEventListener('click', nextQuestion);
themeToggle.addEventListener('click', toggleTheme);
restartBtn.addEventListener('click', restartGame);
playAgainBtn.addEventListener('click', restartGame);

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  // Set initial theme
  const savedTheme = localStorage.getItem('theme') || 'light';
  document.body.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);
  
  // Add bounce animation delays to welcome icons
  const icons = document.querySelectorAll('.welcome-icons span');
  icons.forEach((icon, index) => {
    icon.style.setProperty('--i', index);
  });
});

// Theme Functions
function toggleTheme() {
  const currentTheme = document.body.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  
  document.body.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  updateThemeIcon(newTheme);
}

function updateThemeIcon(theme) {
  const icon = themeToggle.querySelector('i');
  icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
}

// Game Functions
function startQuiz() {
  gameStarted = true;
  currentQuestion = 0;
  score = 0;
  correctAnswers = 0;
  incorrectAnswers = 0;
  
  showScreen('quiz');
  loadQuestion();
  updateProgress();
}

function showScreen(screen) {
  welcomeScreen.classList.add('hidden');
  quizScreen.classList.add('hidden');
  resultsScreen.classList.add('hidden');
  
  switch(screen) {
    case 'welcome':
      welcomeScreen.classList.remove('hidden');
      break;
    case 'quiz':
      quizScreen.classList.remove('hidden');
      break;
    case 'results':
      resultsScreen.classList.remove('hidden');
      break;
  }
}

function loadQuestion() {
  if (currentQuestion >= quizData.length) {
    showResults();
    return;
  }
  
  const question = quizData[currentQuestion];
  questionText.textContent = question.question;
  questionNumber.textContent = currentQuestion + 1;
  
  // Clear previous answers
  answersContainer.innerHTML = '';
  selectedAnswer = null;
  nextBtn.classList.add('hidden');
  
  // Create answer buttons
  question.options.forEach((option, index) => {
    const button = document.createElement('button');
    button.className = 'answer-btn';
    button.innerHTML = `<span>${String.fromCharCode(65 + index)}.</span> ${option}`;
    button.addEventListener('click', () => selectAnswer(index, button));
    answersContainer.appendChild(button);
  });
  
  // Add fade-in animation
  answersContainer.classList.add('fade-in');
  setTimeout(() => answersContainer.classList.remove('fade-in'), 500);
}

function selectAnswer(answerIndex, buttonElement) {
  if (selectedAnswer !== null) return; // Prevent multiple selections
  
  selectedAnswer = answerIndex;
  const question = quizData[currentQuestion];
  const isCorrect = answerIndex === question.correct;
  
  // Disable all buttons
  const allButtons = document.querySelectorAll('.answer-btn');
  allButtons.forEach(btn => {
    btn.disabled = true;
    btn.style.cursor = 'not-allowed';
  });
  
  // Show correct/incorrect styling
  allButtons[question.correct].classList.add('correct');
  if (!isCorrect) {
    buttonElement.classList.add('incorrect');
  }
  
  // Update score
  if (isCorrect) {
    score += 10;
    correctAnswers++;
    // Show celebration effect
    showCelebration();
  } else {
    incorrectAnswers++;
  }
  
  updateScoreDisplay();
  
  // Show next button after a delay
  setTimeout(() => {
    nextBtn.classList.remove('hidden');
  }, 1000);
}

function showCelebration() {
  // Create celebration particles
  const celebration = document.createElement('div');
  celebration.style.cssText = `
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 2rem;
    z-index: 1000;
    pointer-events: none;
    animation: celebrate 1s ease-out;
  `;
  celebration.textContent = '🎉';
  document.body.appendChild(celebration);
  
  setTimeout(() => {
    document.body.removeChild(celebration);
  }, 1000);
  
  // Add CSS animation
  if (!document.getElementById('celebrateStyle')) {
    const style = document.createElement('style');
    style.id = 'celebrateStyle';
    style.textContent = `
      @keyframes celebrate {
        0% { opacity: 0; transform: translate(-50%, -50%) scale(0.5); }
        50% { opacity: 1; transform: translate(-50%, -50%) scale(1.2); }
        100% { opacity: 0; transform: translate(-50%, -50%) scale(1); }
      }
    `;
    document.head.appendChild(style);
  }
}

function nextQuestion() {
  currentQuestion++;
  updateProgress();
  loadQuestion();
}

function updateProgress() {
  const progressPercent = ((currentQuestion) / quizData.length) * 100;
  progressFill.style.width = `${progressPercent}%`;
}

function updateScoreDisplay() {
  currentScore.textContent = score;
  const accuracyPercent = currentQuestion === 0 ? 0 : Math.round((correctAnswers / (correctAnswers + incorrectAnswers)) * 100);
  accuracy.textContent = `${accuracyPercent}%`;
}

function showResults() {
  showScreen('results');
  
  // Update final stats
  finalScore.textContent = score;
  correctAnswersSpan.textContent = correctAnswers;
  incorrectAnswersSpan.textContent = incorrectAnswers;
  
  const finalAccuracyPercent = Math.round((correctAnswers / quizData.length) * 100);
  finalAccuracy.textContent = `${finalAccuracyPercent}%`;
  
  // Show personalized message
  showResultMessage(finalAccuracyPercent);
  
  // Add celebration confetti effect
  createConfetti();
}

function showResultMessage(accuracyPercent) {
  let message = '';
  let className = '';
  
  if (accuracyPercent >= 90) {
    message = '🌟 Outstanding! You\'re a nature expert! 🌟';
    className = 'excellent';
  } else if (accuracyPercent >= 70) {
    message = '🎯 Great job! You know a lot about nature! 🎯';
    className = 'good';
  } else if (accuracyPercent >= 50) {
    message = '🌱 Good effort! Keep learning about nature! 🌱';
    className = 'good';
  } else {
    message = '🌿 Keep exploring! Nature has so much to teach us! 🌿';
    className = 'needs-improvement';
  }
  
  resultMessage.textContent = message;
  resultMessage.className = `result-message ${className}`;
}

function createConfetti() {
  const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#f9ca24', '#f0932b', '#eb4d4b', '#6c5ce7'];
  
  for (let i = 0; i < 50; i++) {
    const confetti = document.createElement('div');
    confetti.style.cssText = `
      position: fixed;
      width: 10px;
      height: 10px;
      background: ${colors[Math.floor(Math.random() * colors.length)]};
      left: ${Math.random() * 100}vw;
      top: -10px;
      border-radius: 50%;
      pointer-events: none;
      z-index: 1000;
      animation: confettiFall ${2 + Math.random() * 3}s linear forwards;
    `;
    document.body.appendChild(confetti);
    
    setTimeout(() => {
      if (document.body.contains(confetti)) {
        document.body.removeChild(confetti);
      }
    }, 5000);
  }
  
  // Add confetti animation
  if (!document.getElementById('confettiStyle')) {
    const style = document.createElement('style');
    style.id = 'confettiStyle';
    style.textContent = `
      @keyframes confettiFall {
        to {
          transform: translateY(100vh) rotate(360deg);
          opacity: 0;
        }
      }
    `;
    document.head.appendChild(style);
  }
}

function restartGame() {
  currentQuestion = 0;
  score = 0;
  correctAnswers = 0;
  incorrectAnswers = 0;
  selectedAnswer = null;
  gameStarted = false;
  
  // Reset progress bar
  progressFill.style.width = '0%';
  
  // Reset score display
  currentScore.textContent = '0';
  accuracy.textContent = '0%';
  questionNumber.textContent = '1';
  
  showScreen('welcome');
}