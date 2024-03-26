const timerMilliseconds = document.querySelector(".timer__milliseconds")
const timerSeconds = document.querySelector(".timer__seconds")
const timerMinutes = document.querySelector(".timer__minutes")

let cancelId;
let startTime;
let savedTime = 0;

function startTimer() {
    startTime = Date.now()
    cancelId = requestAnimationFrame(updateTimer)
}

function stopTimer() {
    savedTime = savedTime + Date.now() - startTime
    console.log(savedTime)
    cancelAnimationFrame(cancelId)
}

function resetTimer() {
    startTime = Date.now()
    savedTime = 0
    
    timerMinutes.innerHTML = "00"
    timerSeconds.innerHTML = "00"
    timerMilliseconds.innerHTML = "000"
}

function updateTimer() {
    let millisecondsElapsed = savedTime + Date.now() - startTime
    let secondsElapsed = millisecondsElapsed / 1000
    let minutesElapsed = secondsElapsed / 60

    let minutesText = Math.floor(minutesElapsed)
    let secondsText = Math.floor(secondsElapsed % 60)
    let millisecondsText = millisecondsElapsed % 1000

    if (minutesText.toString().length === 1) {
        minutesText = '0' + minutesText
    }

    if (secondsText.toString().length === 1) {
        secondsText = '0' + secondsText
    }

    if (millisecondsText.toString().length === 1) {
        millisecondsText = millisecondsText.toString().padStart(3, "0")
    }

    timerMinutes.innerHTML = minutesText
    timerSeconds.innerHTML = secondsText
    timerMilliseconds.innerHTML = millisecondsText

    cancelId = requestAnimationFrame(updateTimer)
}