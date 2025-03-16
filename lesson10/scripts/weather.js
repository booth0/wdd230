
// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&units=imperial&appid=1b1e8e5f5acec9a31033b42c74645b94';

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
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    captionDesc.textContent = data.weather[0].description;
    weatherIcon.setAttribute('src', `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
    weatherIcon.setAttribute('alt', data.weather.main);
}

apiFetch();