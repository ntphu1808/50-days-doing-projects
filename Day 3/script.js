const header=document.getElementsByTagName("header")[0]
const main=document.getElementsByTagName("main")[0]
const list=document.querySelectorAll(".navIcon")
const x=document.querySelector(".icon.show")
const tripple=document.querySelector(".icon.close")

x.addEventListener("click", () => {
    header.setAttribute('id', 'show')
    main.classList.add("show-nav")
    list.forEach(li => {
        li.classList.add("open")
    });
})
tripple.addEventListener("click", () => {
    header.removeAttribute('id')
    main.classList.remove("show-nav")
    list.forEach(li => {
        li.classList.remove("open")
    });
})