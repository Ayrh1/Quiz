/*
1. First div appears on the browser
2. click start btn
    -div disapears
    -dive with questions apear 

*/

var start = document.getElementById("start");
var question = document.getElementById("question");
var finalScore = document.getElementById("finalScore");
var scoreBoard = document.getElementById("scoreBoard");
var prompts = document.getElementById("prompts");
var choices = document.querySelector("#choices");




var questions = [
  {
    prompt: "Which of the following keywords is used to define a variable in Javascript?",
    answers: ["var","let","Both A and B","None of the above"],
    correctAnswer: "c",
  },  
  {
    prompt: "Which of the following methods is used to access HTML elements using Javascript?",
    answers: ["getElementbyId()","getElementByClassName()","Both A and B","None of the above"],
    correctAnswer: "c",
  },
  {
    prompt: "Which of the following methods can be used to display data in some form using Javascript?",
    answers: ["document.write()","console.log()","window.alert()","All of the above"],
    correctAnswer: "d",
  },
  {
    prompt: "Which function is used to serialize an object into a JSON string in Javascript?",
    answers: ["stringify","parse()","convert()","None of the above"],
    correctAnswer: "a",
  },
  {
    prompt: "How do we write a comment in javascript?",
    answers: ["<!-","//","#","$$"],
    correctAnswer: "b",
  },
  {
    prompt: "Which of the following is not a Javascript framework?",
    answers: ["Node","Vue","React","Cassandra"],
    correctAnswer: "d",
  },
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

  for(i = 0; i < questions.length; i++){
    prompts.textContent = questions[i].prompt; 
    
    var li = document.createElement("li");
    var button = document.createElement("button");
    button.textContent = questions[i].answers[i];
    
    li.appendChild(button);
    choices.appendChild(li);
    
  }
 
} 




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