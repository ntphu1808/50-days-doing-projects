const text=document.getElementById("textarea");
const tagsEl=document.querySelector(".tags");

text.focus();

function createTag (input) {  
    const tags=input.split(",").filter(tag => tag.trim() != "").map(tag => tag.trim());
    tagsEl.innerHTML="";

    tags.forEach(tag => {
        const span=document.createElement("span");
        span.classList.add("tag");
        span.innerText=tag;
        tagsEl.appendChild(span);
    });
};


text.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
        text.value="";
        const tagEl = document.querySelectorAll(".tag");
        tagEl.forEach(tag => tag.classList.remove("active"));
        
        const interval=setInterval(() => {
            const tag=pickTag();
            hightLigthToggle(tag);
        }, 100);

        setTimeout(() => {
            clearInterval(interval);
            setTimeout(() => {
                const tag=pickTag();
                tag.classList.add("active");
            }, 100);
        }, 3000);
    } else {
        createTag(text.value);
    };
});



function pickTag() {
    const random_index=Math.floor(Math.random()*tagsEl.children.length);
    return tagsEl.children[random_index];
};

function hightLigthToggle (tag) {  
    tag.classList.add("active");
    setTimeout(() => {
        tag.classList.remove("active");
    }, 100);
};