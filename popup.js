const timeElement = document.getElementById('time');
const nameElement = document.getElementById('name');
const timerElement = document.getElementById('timer');

chrome.storage.local.get(["timer"], (res) => {
	const time = res.timer ?? 0
	    timerElement.textContent = `The timer is at: ${time} seconds`;
})

const currentTime = new Date().toLocaleTimeString();
timeElement.textContent = `The time is ${currentTime}`;

// chrome.action.setBadgeText({
// 	text: 'Time',
// }),	() => {
// 		console.log('Finished setting badge text.');
// };

chrome.storage.sync.get(['name'], (res) => {
	// ?? if null set name what is on right hand side
	const name = res.name ?? 'Change name in options';
	nameElement.textContent = `Your name is: ${name}`;
});