// Import the quotes array from the './quotes.js
import { quotes } from './quotes.js'; 

//array of questions for the quiz
let questions = [
  {
    title: 'Who is the president of Sporting Clube de Portugal?',
    answer: ['Frederico Varandas', 'Bruno de Carvalho', 'Pedro Proença', 'Jorge Jesus'],//array of possible answers
    correct: 0 //index of the correct answer
  },
  {
    title: 'How many times has Sporting Clube de Portugal won the UEFA Champions League?',
    answer: ['1', '2', '3', 'Never won'],
    correct: 3
  },
  {
    title: 'Which stadium is used by Sporting Clube de Portugal?',
    answer: ['Estádio da Luz', 'Estádio José Alvalade', 'Estádio do Dragão', 'Estádio Municipal de Braga'],
    correct: 1
  },
  {
    title: 'What year was Sporting Clube de Portugal founded?',
    answer: ['1906', '1910', '1922', '1945'],
    correct: 0
  },
  {
    title: 'Who is the all-time leading goal scorer for Sporting Clube de Portugal?',
    answer: ['Cristiano Ronaldo', 'Fernando Peyroteo', 'Luís Figo', 'Ricardo Quaresma'],
    correct: 1
  },
  {
    title: 'Which team is considered the main rival of Sporting Clube de Portugal?',
    answer: ['SL Benfica', 'FC Porto', 'SC Braga', 'Vitória de Guimarães'],
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
//this line we select all elements with classes answer, 4 in this case
  let alternatives = document.querySelectorAll('.answer');
  //since we have 4 elements inside a var we use the index
  // to assign each answer a position 0 till 3 in loop and we call a function
  //with an element (answer) and his position
  alternatives.forEach(function (element, index) {
    //that gets a text content. the first element gets a text content of the array and answer
    element.textContent = question.answer[index];
  });
}


