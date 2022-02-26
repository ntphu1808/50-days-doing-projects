const prev = document.querySelector(".Prev")
const next = document.querySelector(".Next")
const step = document.querySelectorAll(".steps")
const bar = document.querySelector(".progressBar")
let current = 0
next.addEventListener("click", () => {
    current+=1
    if (current >= 3) {
        current=3
        next.setAttribute("disabled", true)
    }
    value=((current/3)*100)+"%"
    if (!step[current].classList.contains("active")) {
        step[current].classList.add("active")
        bar.style.width=value
    }
    if (current > 0 && prev.hasAttribute("disabled")) {
        prev.removeAttribute("disabled")
    }
})
prev.addEventListener("click", () => { 
    if (next.hasAttribute("disabled")) {
        next.removeAttribute("disabled")
    }
    value=((current/3)*100 -33)+"%"
    if (step[current].classList.contains("active")) {
        step[current].classList.remove("active")
        bar.style.width=value
    }
    if (current > 0 && prev.hasAttribute("disabled")) {
        prev.removeAttribute("disabled")
    }
    current-=1
    if (current < 1) {
        prev.setAttribute("disabled", true)
    }
})