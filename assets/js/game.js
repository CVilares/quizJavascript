// Import the quotes array from the './quotes.js
import { quotes } from './quotes.js'; 

//array of questions for the quiz
let questions = [
  {
    title: 'Who is the president of Sporting Clube de Portugal?',
    alternative: ['Frederico Varandas', 'Bruno de Carvalho', 'Pedro Proença', 'Jorge Jesus'],//array of possible answers
    correct: 0 //index of the correct answer
  },
  {
    title: 'How many times has Sporting Clube de Portugal won the UEFA Champions League?',
    alternative: ['1', '2', '3', 'Never won'],
    correct: 3
  },
  {
    title: 'Which stadium is used by Sporting Clube de Portugal?',
    alternative: ['Estádio da Luz', 'Estádio José Alvalade', 'Estádio do Dragão', 'Estádio Municipal de Braga'],
    correct: 1
  },
  {
    title: 'What year was Sporting Clube de Portugal founded?',
    alternative: ['1906', '1910', '1922', '1945'],
    correct: 0
  },
  {
    title: 'Who is the all-time leading goal scorer for Sporting Clube de Portugal?',
    alternative: ['Cristiano Ronaldo', 'Fernando Peyroteo', 'Luís Figo', 'Ricardo Quaresma'],
    correct: 1
  },
  {
    title: 'Which team is considered the main rival of Sporting Clube de Portugal?',
    alternative: ['SL Benfica', 'FC Porto', 'SC Braga', 'Vitória de Guimarães'],
    correct: 0
  }
];
// this are the variables starting in 0 because user has not answered any question

 let totalScore = 0;
 let wrongAnswers = 0;
 let currentPos = 0;

// Start the Quiz
startQuiz();

// Function to Start the Quiz 
function startQuiz() {
  displayQuestion(questions[currentPos]);// this line display a question from the array question in position of the currentPos
  setupAnswerListeners();
  displayRandomQuote();// this will display a random quote like a fun fact, it will be fixed later
}

// Function to Display a Question
function displayQuestion(question) {
// in this function we grab the element with id title and give it to the var titleDiv 
  let titleDiv = document.getElementById('title');
//in this line we give the titleDiv var a name from the array questions and title, this is the question
  titleDiv.textContent = question.title;
//this line we select all elements with classes alternativein a var called alternatives 4 in this case
  let alternatives = document.querySelectorAll('.alternative');
  //since we have 4 elements inside a var we use the index
  // to assign each answer a position 0 till 3 in loop and we call a function
  //with an element (answer) and his position
  alternatives.forEach(function (element, index) {
    // the first element gets a text content of the array question and alternative plus his position
    element.textContent = question.alternative[index];
  });
} //this will execute 4 times and will the 1s html element will grab the first element of the array and then the 2 and 3

// Function to Set Up Answer Listeners that defines what happens when we have a click
function setupAnswerListeners() {
//this line we select all elements with classes alternative in a var called alternatives
  let alternatives = document.querySelectorAll('.alternative');
//loop that go trough all elements in alternatives 
  alternatives.forEach(function (element, index) {
    //this event allows the user to click in alternatine, an answer
    //and the function check answer will receive the position of the given answer and dtermine if its correct
    element.addEventListener('click', function () {
      checkAnswer(index);
    });
  });

   }
  function checkAnswer(userAnswer) {
    //means that we are accessing the first element of the questions array, cause currentPos is 0
    let currentQuestion = questions[currentPos];
    //this condition checks if the correct alternative is the same choosen by the user, if yes the answer is correct
    if (currentQuestion.correct === userAnswer) {
      //this display the message in the console
      console.log('Correct answer');
      //this adds 1 to the var total score ++=+1
      totalScore++;
      //if the alternative is wrong this block will be executed
    } else {
      //this display the message in the console
      console.log('Wrong answer');
      //this adds 1 to the var wrong answer ++=+1
      wrongAnswers++;
      //this condition checks if user gives 3 wrong answers, if yes the bellow function will be called
      if (wrongAnswers === 3) {
        //this function will be called in the event of 3 wrong answers user will be redirect the user to the "end.html" page
        showDisappointment();
        return; // Stop further execution to prevent the next question from being displayed after showing the disappointment page
      }
    }
    updateScore();
    nextQuestion();
    displayQuestion(questions[currentPos]);
    displayRandomQuote();
    checkTotalScore();
  }
  
  
  // Function to Move to the Next Question
  function nextQuestion() {
    currentPos++;
    if (currentPos === questions.length) {
      currentPos = 0;
    }
  }
  
  // Function to Check if the Total Score Reaches 5
  function checkTotalScore() {
    if (totalScore === 5) {
      showCongratulations();
    }
  }
  
  // Function to Update the Score Display 
  function updateScore() {
    let scoreDiv = document.getElementById('score');
    scoreDiv.textContent = 'Your score is: ' + totalScore;
  }
 // Function to Display a Random Quote
  function displayRandomQuote() {
    let randomSelection = Math.floor(Math.random() * quotes.length);
    document.getElementById('quote').textContent = quotes[randomSelection].quote;
    document.getElementById('author').textContent = quotes[randomSelection].character;
  }  
  
  // Function to Show Congratulations Page
  function showCongratulations() {
    // Redirect to the congratulations page
    window.location.href = 'congratulations.html';
  }

  // Function to Show Disappointment Page
  function showDisappointment() {
    // Redirect to the disappointment page
    window.location.href = 'end.html';
  }
  
    
  

