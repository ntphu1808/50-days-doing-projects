const images = document.querySelectorAll(".images")

images.forEach(image => {
    image.addEventListener("click", function () {
        removeActiveClasses ()
        image.classList.add("active")}
    )
})

function removeActiveClasses () {
    images.forEach(image => {
        image.classList.remove("active")
    })
}