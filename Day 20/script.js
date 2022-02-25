const btnEl = document.querySelector(".btn-ripple")
const xOfBtn = btnEl.offsetLeft
const yOfBtn = btnEl.offsetTop

btnEl.addEventListener("click", function (e) {
    const x = e.clientX
    const y = e.clientY
    const xInnerBtn = x - xOfBtn
    const yInnerBtn = y - yOfBtn

    const ripple = document.createElement("span")
    ripple.classList.add("ripple")
    ripple.style.top=yInnerBtn + "px"
    ripple.style.left = xInnerBtn + "px"

    this.appendChild(ripple)
    setTimeout(() => ripple.remove(), 500)
})