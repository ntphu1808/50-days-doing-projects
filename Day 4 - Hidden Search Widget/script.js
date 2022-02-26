const btn = document.querySelector(".btn")
const container=document.querySelector(".container")
const textBox=document.querySelector(".textBox")

btn.addEventListener("click", () => {
    container.classList.toggle("active")
    if (container.classList.contains("active")) {
        textBox.focus()
    } else {
        textBox.blur()   /*remove focus on text box after hiding the text box */
    }
    
})