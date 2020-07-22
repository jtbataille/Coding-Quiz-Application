// Variables
var highScore = document.getElementsByClassName("first");
var timer = document.getElementById("countdown");
var startButton = document.getElementById("startButton");

// Variables for questionPage
var questionItself = document.getElementById("theQuestionItself");
var firstChoice = document.getElementById("btn0");
var secondChoice = document.getElementById("btn1");
var thirdChoice = document.getElementById("btn2");
var fourthChoice = document.getElementById("btn3");

// Variables for each page of the document
var explanationPage = document.getElementsByClassName("explanationPage");
var questionPage = document.getElementsByClassName("questionPage");
var highScorePage = document.getElementsByClassName("highScorePage");

startButton.onclick = function (e) {
    var timeLeft = 75;
    var elem = document.getElementById("countdown");
    var timerId = setInterval(countdown, 1000);

    function countdown() {
        if (timeLeft == -1) {
            clearTimeout(timerId);
        } else {
            elem.innerHTML = "Time: " + timeLeft;
            timeLeft--;
        }
    }
};

// Quiz question array to go into the questionPage
var questions = [
    {
        question: "The answer to this question is A.",
        choices: ["A", "B", "C", "D"],
        answer: 0
    },
    {
        question: "The answer to this question is B.",
        choices: ["A", "B", "C", "D"],
        answer: 1
    },
    {
        question: "The answer to this question is C.",
        choices: ["A", "B", "C", "D"],
        answer: 2
    },
    {
        question: "The answer to this question is D.",
        choices: ["A", "B", "C", "D"],
        answer: 3
    },
    {
        question: "The answer to this question is A.",
        choices: ["A", "B", "C", "D"],
        answer: 0
    }
];

document.addEventListener("DOMContentLoaded", function openingPage() {
    $(".explanationPage").show();
    $(".questionPage").hide();
    $(".highScorePage").hide();
});

localStorage.getItem