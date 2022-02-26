const text=document.getElementById("textarea");
const tagsEl=document.querySelector(".tags");

text.focus(); //focus on the textarea right after accessing the website

function createTag (input) {        //create little small tags below the textarea element whenever the user types something on the box
    const tags=input.split(",").filter(tag => tag.trim() != "").map(tag => tag.trim());
    tagsEl.innerHTML="";

    tags.forEach(tag => {
        const span=document.createElement("span");
        span.classList.add("tag");
        span.innerText=tag;
        tagsEl.appendChild(span);
    });
};


text.addEventListener("keyup", (event) => {    //if the user types on the box words, then it's going to call the createTag function, if the user hits enter, then it's
    if (event.key === "Enter") {                // going to clear all the words inside the textarea box, then it's choosing random tag to hightlight.
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



function pickTag() {    //Using math.random to pick a random index for choosing the specific child tag of the tagsEl
    const random_index=Math.floor(Math.random()*tagsEl.children.length);
    return tagsEl.children[random_index];
};

function hightLigthToggle (tag) {    //Hight light the tag and wait for 100ms later to unhightlight the tag.
    tag.classList.add("active");
    setTimeout(() => {
        tag.classList.remove("active");
    }, 100);
};