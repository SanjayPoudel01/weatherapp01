
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '4d61fd08b9mshd21f67673068d65p1122afjsndb4eb9cd2e2a',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const getWeather = (city) => {
	cityName.innerHTML = city
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
		.then(response => response.json())
		.then((response) => {

			console.log(response)

			temp.innerHTML = response.temp
			temp2.innerHTML = response.temp
			feels_like.innerHTML = response.feels_like
			humidity.innerHTML = response.humidity
			humidity2.innerHTML = response.humidity
			min_temp.innerHTML = response.min_temp
			max_temp.innerHTML = response.max_temp
			wind_speed.innerHTML = response.wind_speed
			wind_degrees.innerHTML = response.wind_degrees
			wind_degrees2.innerHTML = response.wind_degrees
			sunrise.innerHTML = response.sunrise
			sunset.innerHTML = response.sunset
		})

		.catch(err => console.error(err));
}

submit.addEventListener("click", (e) => {
	e.preventDefault()
	getWeather(city.value)
})

getWeather("Delhi")

function populateTable(data) {
	const tableBody = document.querySelector('#data-table tbody');

	// Clear existing table rows
	tableBody.innerHTML = '';

	// Iterate over the data and populate table rows
	data.forEach(function (user) {
		const row = document.createElement('tr');
		row = `
	  temp.innerHTML=response.temp
	  temp2.innerHTML=response.temp
	  feels_like.innerHTML=response.feels_like
	  humidity.innerHTML=response.humidity
	  humidity2.innerHTML=response.humidity
	  min_temp.innerHTML=response.min_temp
	  max_temp.innerHTML=response.max_temp
	  wind_speed.innerHTML=response.wind_speed
	  wind_degrees.innerHTML=response.wind_degrees
	  wind_degrees2.innerHTML=response.wind_degrees
	  sunrise.innerHTML=response.sunrise
	  sunset.innerHTML=response.sunset
	  `;
		tableBody.appendChild(row);
	});
}

document.addEventListener('DOMContentLoaded', function () {
	fetchData();
});

async function fetchData() {
	const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=';

	try {
		const response = await fetch(url);
		const data = await response.json();

		populateTable(data);
	} catch (error) {
		console.error('Error fetching data:', error);
	}
}

function populateTable(data) {
	const tableBody = document.getElementById('table-body');

	// Clear existing table rows
	tableBody.innerHTML = '';

	// Iterate over the data and populate table rows
	data.forEach(function (user) {
		const row = document.createElement('tr');
		row.innerHTML = `
          <td>${city.sunset}</td>
         
        `;
		tableBody.appendChild(row);
	});
}