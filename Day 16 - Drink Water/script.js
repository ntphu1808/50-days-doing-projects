const remainEl = document.querySelector(".liters-remained")
const waterEl = document.querySelector(".water")
const cups = document.querySelectorAll(".small-cup")
const labelEl = document.querySelector(".label")

cups.forEach((cup, index) => {
    cup.addEventListener("click", () => {
        fillSmallCup(index)
        updateBigCup()
    })
})

function fillSmallCup(index) {
    if (cups[index].classList.contains("filled") && !cups[index+1].classList.contains("filled")) {
        index--
    }
    cups.forEach((cup, index2) => {
        if (index2 <= index) {
            cup.classList.add("filled")
        } else {
            cup.classList.remove("filled")
        }
    })
}
function updateBigCup() {
    const filledCups = document.querySelectorAll(".small-cup.filled").length

    labelEl.style.height = `${100-12.5*filledCups}%`
    remainEl.innerText = `${2-(0.25*filledCups)}L`
    waterEl.innerText = waterEl.style.height= `${12.5*filledCups}%`

    
}