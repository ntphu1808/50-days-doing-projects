const modeEl = document.querySelector(".mode")
const htmlEl = document.querySelector("html")

modeEl.addEventListener("click", () => {
    htmlEl.classList.toggle("dark")
    if (htmlEl.classList.contains("dark")) {
        modeEl.innerText = "Light mode"
    } else {
        modeEl.innerText = "Dark mode"
    }
})

//===========================================================================
const hourNeedle = document.querySelector(".needle-hour")
const minuteNeedle = document.querySelector(".needle-minute")
const secondNeedle = document.querySelector(".needle-second")
const hourEl = document.querySelector(".hours")
const minuteEl = document.querySelector(".minutes")
const stateEl = document.querySelector(".state")
const dayOfWeek_El = document.querySelector(".day-of-week")
const monthEl = document.querySelector(".month")
const dayOfMonth_El = document.querySelector(".day-of-month")
const dayList = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
const monthList = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

let second = 0
let minute = 0
let hour = 0

updatedateTime()
const interval = setInterval(updatedateTime, 999)


function updatedateTime() {
    const dateTime = new Date()
    secondNeedle.style.transform = `rotate(${getDegFromSecond(dateTime.getSeconds())}deg)`
    minuteNeedle.style.transform = `rotate(${getDegFromMinute(dateTime.getMinutes())}deg)`
    hourNeedle.style.transform = `rotate(${getDegFromHour(dateTime.getHours())}deg)`
    hourEl.innerText = dateTime.getHours()
    minuteEl.innerText = `${dateTime.getMinutes() < 10 ? "0" + dateTime.getMinutes() : dateTime.getMinutes()}`
    stateEl.innerText = `${dateTime.getHours() < 12 ? "AM" : "PM"}`
    dayOfWeek_El.innerText = dayList[dateTime.getDay()]
    dayOfMonth_El.innerText = dateTime.getDate()
    monthEl.innerText = monthList[dateTime.getMonth()].substring(0, 3)
}

function getDegFromHour(value) {
    if (value%12 === 0 && minute%60 === 0 && second%60 === 0) {  // we use flag to check when the hour is 0 then the hour won't be added 12 every one second
        hour+=12
    }
    return (hour+value%12)*360/12
}

function getDegFromMinute(value) {
    if (value === 0 && second%60 === 0) { // when the minute is 0 then every second passess then the minute will be added 60, we use flag here to prevent that.
        minute+=60
    }
    return (minute+value)*360/60
}

function getDegFromSecond(value) {
    if (value === 0) {
        second+=60
    }
    return (second+value)*360/60
}