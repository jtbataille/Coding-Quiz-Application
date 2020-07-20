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
    
]