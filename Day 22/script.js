// For canvas
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// For tool elements
const decEl = document.getElementById("dec")
const incEl = document.getElementById("inc")
const colorEl = document.getElementById("color")
const clearEl = document.getElementById("clear")
const widthEl = document.getElementById("width")


// For other variables
let isPushed = false
let width = Number(widthEl.innerText)
let color = colorEl.value
let x
let y

// base functions for drawing
function drawCircle(x, y, width, color) {
    ctx.beginPath();
    ctx.arc(x, y, width, 0, 2 * Math.PI)
    ctx.fillStyle = color
    ctx.fill()
};
function drawLine(x, y, x2, y2, width, color) {
    ctx.beginPath()      //We have to write this line so that the drawLine can work correctly when we move the mouse while getting the left mouse pressing
    ctx.moveTo(x, y)
    ctx.lineTo(x2, y2)
    ctx.lineWidth = 2*width
    ctx.strokeStyle = color
    ctx.stroke()
}

// canvas element listens for the specific events like click the mouse, let the clicking go, and dragging the mouse
canvas.addEventListener("mousedown", (e) => {
    x = e.offsetX
    y = e.offsetY
    drawCircle(x, y, width, color)
    isPushed = true
})
document.addEventListener("mouseup", (e) => {
    isPushed = false
})

canvas.addEventListener("mousemove", (e) => {
    if (isPushed) {
        const x2 = e.offsetX
        const y2 = e.offsetY
        drawCircle(x2, y2, width, color)
        drawLine(x, y, x2, y2, width, color)
        x = x2
        y = y2
    }
})


// For tools bar
decEl.addEventListener("click", () => {  // decrease button
    width -= 5
    if (width < 5) {
        width = 5
    }
    widthEl.innerText = width
})

incEl.addEventListener("click", () => { // increase button
    width += 5
    if (width > 50) {
        width = 50
    }
    widthEl.innerText = width
})

colorEl.addEventListener("change", (e) => { // color Element
    color = e.target.value
})

clearEl.addEventListener("click", () => {  // clear button
    ctx.clearRect(0, 0, canvas.width, canvas.height)
})
