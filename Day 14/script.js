const toggleBtn=document.querySelector(".nav-toggle")
const nav=document.querySelector(".nav")

toggleBtn.addEventListener("click", () => {
    nav.classList.toggle("collapse")
})