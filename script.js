$("button").on("click", function (e) {
    var timeLeft = 75;
    var elem = document.getElementById("countdown");
    var timerId = setInterval(countdown, 1000);

    function countdown() {
        if (timeLeft == -1) {
            clearTimeout(timerId);
            doSomething();
        } else {
            elem.innerHTML = "Time: " + timeLeft;
            timeLeft--;
        }
    }
});

var questions = [
    new Question("The answer to this question is A.", ["A", "B", "C", "D"], "A"),
    new Question("The answer to this question is B.", ["A", "B", "C", "D"], "B"),
    new Question("The answer to this question is C.", ["A", "B", "C", "D"], "C"),
    new Question("The answer to this question is D.", ["A", "B", "C", "D"], "D"),
    new Question("The answer to this question is A.", ["A", "B", "C", "D"], "A"),
];

localStorage.getItem