const currentTemp = document.querySelector('#current-temp');
let weatherIcon = document.createElement('img');
const weatherImg = document.querySelector('#weatherImg');
const captionDesc = document.querySelector('#description');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=33.41&lon=-111.84&units=imperial&appid=1b1e8e5f5acec9a31033b42c74645b94';

async function apiFetch() {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw Error(await response.text());
        }

        const data = await response.json();
        console.log(data); // Check if data is being fetched correctly
        displayWeather(data);
    } 
    catch (error) {
        console.error('Error fetching data:', error);
    }
}

const displayWeather = (data) => {
    const temp = data.main.temp;
    currentTemp.innerHTML = `${temp}&deg;F`;
    captionDesc.textContent = data.weather[0].description.split(' ').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    ).join(' ');
    weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`; // Replace with your image URL
    weatherIcon.alt = data.weather[0].main;
    weatherImg.appendChild(weatherIcon);
}

apiFetch()