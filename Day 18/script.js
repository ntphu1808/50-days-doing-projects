const leftButton = document.querySelector(".left-arrow")
const rightButton = document.querySelector(".right-arrow")
const container = document.querySelector(".container")
const slider = document.querySelectorAll(".slider")

let currentSlide = 0
activeSlide()

leftButton.addEventListener("click", () => {
    slider[currentSlide].classList.remove("active")
    currentSlide--
    activeSlide()
})
rightButton.addEventListener("click", () => {
    slider[currentSlide].classList.remove("active")
    currentSlide++
    activeSlide()
})

function activeSlide() {
    if (currentSlide >= slider.length) {
        currentSlide = 0
    } else if (currentSlide < 0) {
        currentSlide = slider.length-1
    }
    slider[currentSlide].classList.add("active")
    container.style.backgroundImage = slider[currentSlide].style.backgroundImage   //set background-img for container
}