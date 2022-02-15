const cupText = document.querySelector(".cup-text")
const bigCup = document.querySelector(".big-cup")
const quantity = document.querySelector(".quantity")
const smallCup = document.querySelectorAll(".small-cup")
const liter = document.querySelector(".liter-remained")

smallCup.forEach((cup, index) => {
    cup.addEventListener("click", () => {
        fillSmallCup(index)
        updateBigCup()
    })
})

function fillSmallCup(index) {
    if (smallCup[index].classList.contains("filled") && !smallCup[index].nextElementSibling.classList.contains("filled")) {
        index--
    }
    smallCup.forEach((cup, index2) => {
        if (index2 <= index) {
            cup.classList.add("filled")
        } else {
            cup.classList.remove("filled")
        }
    })
}
function updateBigCup () {
    const fullCups=document.querySelectorAll(".small-cup.filled").length
    quantity.style.height=quantity.innerText=`${fullCups*12.5}%`
    cupText.style.height=`${100-fullCups*12.5}%`
    liter.innerText=`${2-fullCups*0.25}L`
}