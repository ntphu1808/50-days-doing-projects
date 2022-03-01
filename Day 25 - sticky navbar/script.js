const stickyBar = document.querySelector(".sticky-navbar")

window.addEventListener("scroll", changeNavbarStyle)

function changeNavbarStyle() {
    if (window.scrollY > stickyBar.clientHeight * 3) {
        stickyBar.classList.add("active")
    } else {
        stickyBar.classList.remove("active")
    }
}