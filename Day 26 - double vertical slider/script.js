const leftSideEl = document.querySelector(".left-side")
const rightSideEl = document.querySelector(".right-side")
const upButton = document.querySelector(".arrow-up")
const downButton = document.querySelector(".arrow-down")

const slidesLength = document.querySelectorAll(".bg-color").length
const slideHeight = leftSideEl.clientHeight / slidesLength

let currentSlide = 3

rightSideEl.style.transform = `translateY(-${currentSlide*slideHeight}px)`

upButton.addEventListener("click", () => updateSlide("up"))
downButton.addEventListener("click", () => updateSlide("down"))
function updateSlide(direction) {
    if (direction === "up") {
        currentSlide++
        if (currentSlide >= slidesLength) {
            currentSlide = 0
        }
        leftSideEl.style.transform = `translateY(${(currentSlide - slidesLength + 1)*slideHeight}px)`
        rightSideEl.style.transform = `translateY(-${currentSlide*slideHeight}px)`
    }
    if (direction === "down") {
        currentSlide--
        if (currentSlide < 0) {
            currentSlide = slidesLength -1
        }
        leftSideEl.style.transform = `translateY(${(currentSlide-slidesLength+1)*slideHeight}px)`
        rightSideEl.style.transform = `translateY(-${currentSlide*slideHeight}px)`
    }
}