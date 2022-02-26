const jokes=document.getElementById("jokes")
const btn = document.getElementById("btn")
getJokes()

btn.addEventListener("click", function() {
    getJokes()
});

async function getJokes(url="https://icanhazdadjoke.com/") {
    const resp=await fetch(url, {
        method:"GET",
        headers: {
            "Accept": "application/json"
        }
    });
    const data = await resp.json()
    jokes.innerText=data.joke
};