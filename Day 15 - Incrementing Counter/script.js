const counters=document.querySelectorAll(".counter")
const speed=1000 //the lower the faster

counters.forEach(counter => {
    let value=0
    counter.innerText=`${value}`
    const target= +counter.getAttribute("data-target")
    const incrementRate=target/speed

    const interval=setInterval(() => {
        value+=incrementRate
        counter.innerText=`${Math.ceil(value)}`
        if (value>=target) {
            clearInterval(interval)
            counter.innerText=`${target}`
        }
    }, 1);
})