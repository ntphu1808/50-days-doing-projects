const filled = document.querySelector(".filled")
const boxes = document.querySelectorAll(".box")

filled.addEventListener("dragstart", dragStart)
filled.addEventListener("dragend", dragEnd)
for(const box of boxes) {
    box.addEventListener("dragover", dragOver)
    box.addEventListener("dragleave", dragLeave)
    box.addEventListener("drop", drop)
}
function dragStart(e) {
    setTimeout(() => this.style.visibility = "hidden", 10)
}
function dragEnd() {
    this.style.visibility = "visible"
}
function dragOver(e) {
    e.preventDefault()
    this.classList.add("drag-over")
}
function dragLeave() {
    this.classList.remove("drag-over")
}
function drop() {
    this.classList.remove("drag-over")
    this.appendChild(filled)
}