const secondHandle = document.querySelector(".handle__second")
const minuteHandle = document.querySelector(".handle__minute")
const hourHandle = document.querySelector(".handle__hour")

setInterval(() => {
    setHandles()
}, 1000)

function setHandles() {
d = new Date()

const seconds = d.getSeconds()
const minutes = d.getMinutes()
const hours = d.getHours()

const extraMinutesAngle = seconds * 0.1
const minutesAngle = minutes * 6 + extraMinutesAngle

const extraHourAngle = minutes * 0.5
const hoursHandle = hours * 30 + extraHourAngle

secondHandle.style.transform = `rotate(${seconds * 6}deg)`
minuteHandle.style.transform = `translateX(-50%) rotate(${minutesAngle}deg)`
hourHandle.style.transform = `translateX(-50%) rotate(${hoursHandle}deg)`
}