chrome.alarms.create({
	// 1 is mins
	// so 1/60 is seconds
	periodInMinutes: 1 / 60,
});

chrome.alarms.onAlarm.addListener(() => {
	// console.log(alarm);
	chrome.storage.local.get(['timer'], (res) => {
		const time = res.timer ?? 0;
		chrome.storage.local.set({
			timer: time + 1,
		});
		chrome.action.setBadgeText({
			text: `${time + 1}`,
		});
	});
});


// Example:
// console.log("Hello from background script!");

// let time = 0

// setInterval(() => {
//     time += 1

//     console.log(time);
// }, 1000)
