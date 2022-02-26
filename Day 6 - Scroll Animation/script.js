const boxes = document.querySelectorAll(".box")
window.addEventListener("scroll", checkBoxes)

checkBoxes()

function checkBoxes() {
    const triggerPoint=window.innerHeight*4/5
    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top
        if (boxTop < triggerPoint) {
            box.classList.add("show")
        } else {
            box.classList.remove("show")
        }
    });
};