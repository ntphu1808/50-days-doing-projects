const bg=document.querySelector(".bg")
const text=document.querySelector(".text")

let loader=0

const timer=setInterval(blurring, 30)

function blurring() {
    loader++
    if (loader>99) {
        clearInterval(timer)
    }
    text.innerHTML=`${loader}%`
    text.style.opacity=`${scale(loader, 0, 100, 1, 0)}`
    bg.style.filter=`blur(${scale(loader, 0, 100, 50, 0)}px)`
}

function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}