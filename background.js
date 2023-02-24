console.log("Hello from background script!");

let time = 0 

setInterval(() => {
    time += 1

    console.log(time);
}, 1000)