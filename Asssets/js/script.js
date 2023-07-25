
var start = document.getElementById("start");
var question = document.getElementById("question");
var rightWrong = document.getElementById("rightWrong");
var verification = document.getElementById("verification");
var finalScore = document.getElementById("finalScore");
var scoreBoard = document.getElementById("scoreBoard");
var prompts = document.getElementById("prompts");
var choices = document.querySelector("#choices");
var scoreDisplay = document.getElementById("scoreDisplay");
var questionStatus = document.getElementById("questionStatus");
var save = document.getElementById("save");

var currentQuestionIndex = 0;  // --> we create and set an ITERATOR
var score = 0;
 
var questions = [
  {
    prompt: "1.Which of the following keywords is used to define a variable in Javascript?",
    answers: ["var","let","Both A and B","None of the above"],
    correctAnswer: "2",
  },  
  {
    prompt: "2.Which of the following methods is used to access HTML elements using Javascript?",
    answers: ["getElementbyId()","getElementByClassName()","Both A and B","None of the above"],
    correctAnswer: "2",
  },
  {
    prompt: "3.Which of the following methods can be used to display data in some form using Javascript?",
    answers: ["document.write()","console.log()","window.alert()","All of the above"],
    correctAnswer: "3",
  },
  {
    prompt: "4.Which function is used to serialize an object into a JSON string in Javascript?",
    answers: ["stringify","parse()","convert()","None of the above"],
    correctAnswer: "0",
  },
  {
    prompt: "5.How do we write a comment in javascript?",
    answers: ["<!-","//","#","$$"],
    correctAnswer: "1",
  },
  {
    prompt: "6.Which of the following is not a Javascript framework?",
    answers: ["Node","Vue","React","Cassandra"],
    correctAnswer: "3",
  },
  {
    prompt: "7.Which of the following is not a Javascript framework?",
    answers: ["Node","Vue","React","Cassandra"],
    correctAnswer: "3",
  },
  {
    prompt: "8.Which of the following is not a Javascript framework?",
    answers: ["Node","Vue","React","Cassandra"],
    correctAnswer: "3",
  },
  {
    prompt: "9.Which of the following is not a Javascript framework?",
    answers: ["Node","Vue","React","Cassandra"],
    correctAnswer: "3",
  },
  {
    prompt: "10.Which of the following is not a Javascript framework?",
    answers: ["Node","Vue","React","Cassandra"],
    correctAnswer: "3",
  }
]

start.addEventListener("click", function(event) {
  var element = event.target;
  if (element.matches("button") === true) { 
    start.classList.add('hide');
    start.classList.remove('visible');
    question.classList.add('visible');
    question.classList.remove('hide');
    initQuestions()
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
 
  choices.addEventListener("click", function(event) {

    var element = event.target;
    var index = element.getAttribute("data-choice");
    
    checkAnswer(index,trueAnswer); 
   
  });
  currentQuestionIndex++;

}  

function checkAnswer(index,trueAnswer) {
  
  if(index === trueAnswer){
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
  }
  setTimeout(function () {
   
    if (currentQuestionIndex < questions.length) {

      initQuestions();

    } else {
     
      question.classList.add('hide');
      question.classList.remove('visible');
      finalScore.classList.add('visible');
      finalScore.classList.remove('hide');
      finalScores(score);

    }
    
    right.classList.add('hide');

  }, 600);
}

function finalScores(score){
// display score on div 
 var quizScore = score; 
  scoreDisplay.textContent = "Final Score: " + quizScore;

}

save.addEventListener("click", function(event) {
  event.preventDefault();
  var name = document.querySelector("#name").value;
  /*
  if (name === "") {
    prompt("error", "Name cannot be blank");
  
  } else {
    displayMessage("success", "Registered successfully");

    localStorage.setItem("Name", name);
    localStorage.setItem("Score", quizScore);
   
  }
  */
});



//notes

/*
question.addEventListener("click", function(event) {
  var element = event.target;
  if (element.matches("button") === true) {
     
    question.classList.add('hide');
    question.classList.remove('visible');
    finalScore.classList.add('visible');
    finalScore.classList.remove('hide');
    
  }
  
});

question.addEventListener("click", function(event) {
  var element = event.target;
  prompt(element);
}


finalScore.addEventListener("click", function(event) {
  var element = event.target;
  if (element.matches("button") === true) {
    
    finalScore.classList.add('hide');
    finalScore.classList.remove('visible');
    scoreBoard.classList.add('visible');
    scoreBoard.classList.remove('hide');
    
  }

});

*/

/*

HTML buttons

<li><button id = "a">Answer A</button></li>
<li><button id = "b">Answer B</button></li>
<li><button id = "c">Answer C</button></li>
<li><button id = "d">Answer D</button></li>

var AnswerA = document.getElementById("a");
var AnswerB = document.getElementById("b");
var AnswerC = document.getElementById("c");
var AnswerD = document.getElementById("d");
var score = 0; 

AnswerA.textContent = questions[1].answers.a; 
AnswerB.textContent = questions[1].answers.b; 
AnswerC.textContent = questions[1].answers.c; 
AnswerD.textContent = questions[1].answers.d; 

*/

/*
document.getElementById("question").classList.add('visible');

document.getElementById("question").classList.remove('hide');

question.classList.add('visible');

question.classList.remove('hide');
reminder: search classList**
*/

/*

console.log(question); 


 if (choice.matches("button") === true) {
      console.log(choice);
    
  }
*/  

/*

console.log(questions[0].prompt); // prints the prompt of the first question
console.log(questions[1].answers.b); // prints the 'b' answer of the second question
console.log(questions[2].correctAnswer); // prints the correct answer of the third question

  */



/*
var questions = [
  {
    prompt: "Which of the following keywords is used to define a variable in Javascript?",
    answers: {
      a: "var",
      b: "let",
      c: "Both A and B",
      d: "None of the above",
    },
    correctAnswer: "c",
  },  
  {
    prompt: "Which of the following methods is used to access HTML elements using Javascript?",
    answers: {
      a: "getElementbyId()",
      b: "getElementByClassName()",
      c: "Both A and B",
      d: "None of the above",
    },
    correctAnswer: "c",
  },
  {
    prompt: "Which of the following methods can be used to display data in some form using Javascript?",
    answers: {
      a: "document.write()",
      b: "console.log()",
      c: "window.alert()",
      d: "All of the above",
    },
    correctAnswer: "d",
  },
  {
    prompt: "Which function is used to serialize an object into a JSON string in Javascript?",
    answers: {
      a: "stringify",
      b: "parse()",
      c: "convert()",
      d: "None of the above",
    },
    correctAnswer: "a",
  },
  {
    prompt: "How do we write a comment in javascript?",
    answers: {
      a: "<!-",
      b: "//",
      c: "#",
      d: "$$",
    },
    correctAnswer: "b",
  },
  {
    prompt: "Which of the following is not a Javascript framework?",
    answers: {
      a: "Node",
      b: "Vue",
      c: "React",
      d: "Cassandra",
    },
    correctAnswer: "d",
  },
]
*/

/* tutor

function initQuestions(){
  // let's run some validation (global loop conditional statement)
  if(currentQuestionIndex >= questions.length - 1) {
    // run some exit code --> we show the form for initials/user input
  }

  // update the curretQuestion
  var currentQuestion = questions[currentQuestionIndex]; // here we are taking a look at EACH OBJECT in our ARRAY

  prompts.textContent = currentQuestion.prompt;  // currentQuestion = questions[currentQuestionIndex]
  for(let i = 0; i < currentQuestion.answers.length; i++){
    var li = document.createElement("li");
    var button = document.createElement("button");
    button.setAttribute("data-choice", i);
    button.textContent = currentQuestion.answers[i];
    
    li.appendChild(button);
    choices.appendChild(li);
  }
 

} 




  console.log(currentQuestion);
  currentQuestionIndex = currentQuestionIndex + 1;   // 
  console.log(currentQuestion);
  if(currentQuestionIndex >= questions.length - 1) {
    // exit logic code ...
  } else {
    // we continue with our code ....
  }

  //        iterator |   conditional statement  |  iterator update setatement
  for(let iterator = 0; iterator < questions.length; iterator++) {
    // code that runs in the loop
    console.log(questions[iterator])
  }





  // let's run some validation (global loop conditional statement)
  if(currentQuestionIndex >= questions.length - 1) {
    start.classList.add('hide');
    start.classList.remove('visible');
    question.classList.add('visible');
    question.classList.remove('hide');
  }


 choices.innerHTML ='';


  // let's run some validation (global loop conditional statement)
 if(currentQuestionIndex >= questions.length - 1) {
  question.classList.add('hide');
  question.classList.remove('visible');

  finalScore.classList.add('visible');
  finalScore.classList.remove('hide');
}

*/

