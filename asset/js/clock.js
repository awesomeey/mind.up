const calendar = document.querySelector('#calendar');
const clock = document.querySelector('#clock');
let date = new Date();

function getdate(){
	const yy = String(date.getFullYear()).padStart(2,"0");
	const mm = String(date.getMonth() + 1).padStart(2,"0");
	const dd = String(date.getDate()).padStart(2,"0");
	calendar.innerText = `#${yy}.${mm}.${dd}`;
}

function getClock(){
	date = new Date();
	const hours = String(date.getHours()).padStart(2,"0");
	const minutes = String(date.getMinutes()).padStart(2,"0");
	const seconds = String(date.getSeconds()).padStart(2,"0");
	clock.innerText = `#${hours}:${minutes}:${seconds}`;
}

// function clockFormat(date){
// 	return date > 10 ? date : `0${date}`;
// }

getdate();
getClock();
setInterval(getClock, 1000);