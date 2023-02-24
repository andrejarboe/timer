chrome.alarms.create({
    // 1 is mins
    // so 1/60 is seconds
	periodInMinutes: 1 / 60,
});


chrome.alarms.onAlarm.addListener((alarm) => {
    console.log(alarm);
})

// Example:
// console.log("Hello from background script!");

// let time = 0

// setInterval(() => {
//     time += 1

//     console.log(time);
// }, 1000)
