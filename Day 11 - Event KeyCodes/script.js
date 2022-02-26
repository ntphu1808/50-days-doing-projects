const container=document.querySelector(".container")
window.addEventListener("keydown", (event) => {
    container.innerHTML=`<div class="container">
                            <div class="box">
                                <small>event.key</small>
                                <p>${event.key === " " ? "space" : event.key}</p>
                            </div>
                            <div class="box">
                                <small>event.keyCode</small>
                                <p>${event.keyCode}</p>
                            </div>
                            <div class="box">
                                <small>event.code</small>
                                <p>${event.code}</p>
                            </div>
                        </div>
    `
});