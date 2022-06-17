const API_KEY = 'ce60ceb5a497c84989b93d82ed9b5c5e'; // openweathermap API
const weatherAPI = document.querySelector('#weather-api');
const locale = weatherAPI.querySelector('.locale');
const city = weatherAPI.querySelector('.city');
const weather = weatherAPI.querySelector('.weather');
const temp = weatherAPI.querySelector('.temp');

function onGeoOk(position){
	const lat = position.coords.latitude;
	const lon = position.coords.longitude;
	const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`

	fetch(url)
		.then(response => response.json())
		.then(data => {
			locale.innerText = `${data.sys.country},`;
			city.innerText = data.name;
			weather.innerHTML = `<img src="http://openweathermap.org/img/w/${data.weather[0].icon}.png" alt="${data.weather[0].main} icon">${data.weather[0].main},`;
			temp.innerHTML = Math.floor(data.main.temp) + '&#8451;';
		});
}

function onGeoError(){
	weatherAPI.innerTEXT = 'where r u? cant find u!';
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);