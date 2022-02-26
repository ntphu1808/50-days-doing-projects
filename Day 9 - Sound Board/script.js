const sounds=document.querySelectorAll("audio")
const container=document.querySelector(".container")

sounds.forEach(sound => {
    const id = sound.getAttribute("id")
    const btn = document.createElement("button")
    btn.classList.add("btn")
    btn.innerText=id
    container.append(btn)

    btn.addEventListener("click", () => {
        sounds.forEach(otherSounds => {
            otherSounds.pause()     // stop all other songs which are playing
            otherSounds.currentTime=0    //set the time playing over to zero
        });
        sound.play()    // then play the current song.
    })
})


