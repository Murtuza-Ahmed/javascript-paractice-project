let timeDisplay = document.querySelector(".timerDisplay");
let start = document.getElementById("startButton");
let stopButton = document.getElementById("stopButton");
let reset = document.getElementById("resetButton");

let milliSecond = 0;
let second = 0;
let minute = 0;

let timerID;

start.addEventListener("click", () => {
    if (timerID !== null) {
        clearInterval(timerID);
    }
    timerID = setInterval(startTimer, 10);
})

stopButton.addEventListener("click", () => {
    clearInterval(timerID);
})

reset.addEventListener("click", () => {
    clearInterval(timerID);
    timeDisplay.innerHTML = `00 : 00 : 00`;
})

const startTimer = () => {
    milliSecond++;
    if (milliSecond === 100) {
        milliSecond = 0;
        second++;
        if (second === 60) {
            second = 0;
            minute++;
        }
    }
    let milliSecondResult = milliSecond < 10 ? `0 ${milliSecond}` : milliSecond;
    let secondResult = second < 10 ? `0 ${second}` : second;
    let minuteResult = minute < 10 ? `0 ${minute}` : minute;

    timeDisplay.innerHTML = `${minuteResult} : ${secondResult} : ${milliSecondResult}`;
}
