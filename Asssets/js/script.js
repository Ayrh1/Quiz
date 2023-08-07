
var start = document.getElementById("start");
var question = document.getElementById("question");
var getName = document.getElementById("getName"); //change started here
var scoreBoard = document.getElementById("scoreBoard");
var prompts = document.getElementById("prompts");
var choices = document.querySelector("#choices");
var questionStatus = document.getElementById("questionStatus");
var save = document.getElementById("save");
var scoreDisplay = document.getElementById("scoreDisplay");
var scorePost = document.getElementById("scorePost");
var clear = document.getElementById("clear");
var timer = document.getElementById("timer");

var currentQuestionIndex = 0;  // --> we create and set an ITERATOR
var score = 0;
var userCount = 0;
var secondsLeft = 60; //timer

var questions = [
  {
    prompt: "1.Which of the following keywords is used to define a variable in Javascript?",
    answers: ["1) var","2) let","3) Both A and B","4) None of the above"],
    correctAnswer: "2",
  }, 
  {
    prompt: "2.Which of the following methods is used to access HTML elements using Javascript?",
    answers: ["1) getElementbyId()","2) getElementByClassName()","3) Both A and B","4) None of the above"],
    correctAnswer: "2",
  },
  {
    prompt: "3.Which of the following methods can be used to display data in some form using Javascript?",
    answers: ["1) document.write()","2) console.log()","3) window.alert()","4) All of the above"],
    correctAnswer: "3",
  },
  {
    prompt: "4.Which function is used to serialize an object into a JSON string in Javascript?",
    answers: ["1) stringify","2) parse()","3) convert()","4) None of the above"],
    correctAnswer: "0",
  },
  {
    prompt: "5.How do we write a comment in javascript?",
    answers: ["1)    <!--","2)    //","3)    #","4)    $$"],
    correctAnswer: "1",
  },
  {
    prompt: "6.What would be the output of the following code? \n   \n console.log(typeof null);",
    answers: ["1) undefined","2) null","3) object","4) number"],
    correctAnswer: "2",
  },
  {
    prompt: "7.Which of the following Javascript data types is not primitive?",
    answers: ["1) string","2) number","3) boolean","4) object"],
    correctAnswer: "3",
  },
  {
    prompt: "8.What is the correct sytanx to write an array in Javasscript?",
    answers: ["1) var = \"red\",\"blue\",\"green\"","2) Var colors =(1:\"red\",2:\"blue\",3:\"green\");","3) var colors = 1 = (\"red\"), 2 = (\"blue\"), 3 = (\"green\");","4) var colors = [\"red\", \"blue\", \"green\"];"],
    correctAnswer: "3",
  },
  {
    prompt: "9.In JavaScript, 'NaN' is equal to 'NaN'. (True/False)",
    answers: ["1) True","2) False",],
    correctAnswer: "1",
  },
  {
    prompt: "10.JavaScript is a case-sensitive language. (True/False)",
    answers: ["1) True","2) False",],
    correctAnswer: "0",
  }
]



start.addEventListener("click", function(event) {
  
  var element = event.target;
  score = 0;

  if (element.matches("button") === true) { 
    start.classList.add('hide');
    start.classList.remove('visible');
    question.classList.add('visible');
    question.classList.remove('hide');
    initQuestions();
    setTime();

    choices.addEventListener("click", function(event) {
      //event.stopPropagation();
      var element = event.target;
      var index = element.getAttribute("data-choice");
      
      checkAnswer(index); 
     
    });
  }
});


function initQuestions(){

  questionStatus.classList.add('hide');
  questionStatus.classList.remove('visible');

  var currentQuestion = questions[currentQuestionIndex];
  var trueAnswer =  currentQuestion.correctAnswer; 
  choices.innerHTML ='';
  console.log(currentQuestionIndex);

  prompts.textContent = currentQuestion.prompt;  
  for(let i = 0; i < currentQuestion.answers.length; i++){
    var li = document.createElement("li");
    var button = document.createElement("button");
    button.setAttribute("data-choice", i);
    button.textContent = currentQuestion.answers[i];
    
    li.appendChild(button);
    choices.appendChild(li);
  }
  
}  

function checkAnswer(index) {
  var currentQuestion = questions[currentQuestionIndex];
  var trueAnswer =  currentQuestion.correctAnswer; 
  
 if(index == trueAnswer){
    var right = document.createElement("p");
    questionStatus.innerHTML = '';
    questionStatus.appendChild(right);
    right.setAttribute('id','rightWrong');
    right.textContent = "Right!";
    questionStatus.classList.add('visible');
    questionStatus.classList.remove('hide');
    score++;
    
  }else if(index !== trueAnswer){
    var right = document.createElement("p");
    questionStatus.innerHTML = '';
    questionStatus.appendChild(right);
    right.setAttribute('id','rightWrong');
    right.textContent = "Wrong!";
    questionStatus.classList.add('visible');
    questionStatus.classList.remove('hide');
    secondsLeft = secondsLeft - 15;
    
  }

  

  
  var timeout = setTimeout(function () {

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {

      initQuestions();

    } else {
     
      question.classList.add('hide');
      question.classList.remove('visible');
      getName.classList.add('visible');
      getName.classList.remove('hide');
      scoreDisplay.textContent = "Final Score: " + score;
     
    }
    
    right.classList.add('hide');
    clearInterval(timeout);

  }, 400); // change back



}

function getNames(){
// display score on div 

  var userName = document.getElementById("name").value;
  var quizScore = score; 


  var userScore = {
    
    user: ["User: " + userName],
    finalScore: ["Score: " + quizScore],

  }

  localStorage.setItem("userScore", JSON.stringify(userScore));
  
  userCount++;

  board();
}

var storedScores = JSON.parse(localStorage.getItem('storedScores')) || [];

function board(){

  question.classList.add('hide');
  question.classList.remove('visible');
  start.classList.add('hide');
  start.classList.remove('visible');
  getName.classList.add('hide');
  getName.classList.remove('visible');
  scoreBoard.classList.add('visible');
  scoreBoard.classList.remove('hide');
  
 
  // Retrieve previously stored scores from local storage
 
  var currentUserScore = JSON.parse(localStorage.getItem("userScore"));

  console.log(currentUserScore);

  // Check if there is a user score before adding it to the stored scores
  if (currentUserScore) {
    storedScores.push(currentUserScore);

    // Save the updated 'storedScores' array to local storage as a JSON string
    window.localStorage.setItem('storedScores', JSON.stringify(storedScores));
  }

  console.log(storedScores);
  console.log(currentUserScore);

  
  sortScores();

}

function sortScores(){

 // either get scores from localstorage or set to empty array
 var storedScores = JSON.parse(window.localStorage.getItem('storedScores')) || [];

 // sort highscores by score property in descending order
 storedScores.sort(function (a, b) {
  // Extract scores as numbers
  var scoreA = Number(a.finalScore[0].replace('Score: ', ''));
  var scoreB = Number(b.finalScore[0].replace('Score: ', ''));
  
  // Compare scores
  return scoreB - scoreA;
});

scorePost.innerHTML = "";

 for (var i = 0; i < storedScores.length; i += 1) {
   // create li tag for each high score

   var user = storedScores[i].user[0]; // Get the user's name
   var finalScore = storedScores[i].finalScore[0]; // Get the final score

    var display = document.createElement("li");
    display.classList.add("item");
    display.textContent = user + ' ' + finalScore;
    display.setAttribute("style", " color:yellow; background: black; width: 400px; padding: 5px; font-weight: bold; margin-left: 35px; margin-top:4px; border: white solid dashed;");
    scorePost.appendChild(display);
    
  }
 
}

// restarts application
function begin(){
 
  location.reload();

}

function clearLocalStorage(){
  localStorage.removeItem('storedScores');
  localStorage.removeItem('userScore');
  
}

clear.addEventListener("click", function(event) {
  var clear = event.target;
  if (clear.matches("button") === true) {
  
    clearLocalStorage();
    
    board();
  }
 
});



function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;

    // Update the timer display
    timer.textContent = "time: " + secondsLeft;

    if (secondsLeft <= 0) {
    
      clearInterval(timerInterval);

    
      secondsLeft = 0;
      timer.textContent = "time: " + secondsLeft;

      question.classList.add('hide');
      question.classList.remove('visible');
      getName.classList.add('visible');
      getName.classList.remove('hide');
      scoreDisplay.textContent = "Final Score: " + score;
    }
  }, 1000);
}

function quizEnd(){

}