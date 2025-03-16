
// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#description');
const humidity = document.querySelector('#humidity');
const windChill = document.querySelector('#windChill');
const threeDay = document.querySelector('#threeDay');
                     
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=33.41&lon=-111.84&units=imperial&appid=1b1e8e5f5acec9a31033b42c74645b94';
const threeDayUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=33.41&lon=-111.84&units=imperial&cnt=3&appid=1b1e8e5f5acec9a31033b42c74645b94';

async function apiFetch() {
    try {
        const response1 = await fetch(url);

        if (!response1.ok) {
            throw Error(await response1.text());
        }

        const data1 = await response1.json();
        // console.log(data1); // Check if data is being fetched correctly
        displayWeather(data1);
    } 
    catch (error) {
        console.error('Error fetching data:', error);
    }

    try {
        const response2 = await fetch(threeDayUrl);

        if (!response2.ok) {
            throw Error(await response2.text());
        }

        const data2 = await response2.json();
        // console.log(data2); // Check if data is being fetched correctly
        displayForecast(data2);
    } 
    catch (error) {
        console.error('Error fetching data:', error);
    }
}

const displayWeather = (data) => {
    const temp = data.main.temp;
    const windChillCalc = 35.74 + (0.6215 * temp) - 35.75 * (data.wind.speed ** 0.16) + 0.4275 * temp * (data.wind.speed ** 0.16);
    currentTemp.innerHTML = `${temp}&deg;F`;
    captionDesc.textContent = data.weather[0].description.split(' ').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    ).join(' ');
    humidity.textContent = `Humidity: ${data.main.humidity}%`;
    windChill.textContent = `Wind Chill: ${windChillCalc.toFixed(2)}`;
    weatherIcon.setAttribute('src', `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
    weatherIcon.setAttribute('alt', data.weather.main);
}
const displayForecast = (data) => {
    threeDay.innerHTML = `Three Day Forecast: ${data.list[0].main.temp}&deg;F, ${data.list[1].main.temp}&deg;F, ${data.list[2].main.temp}&deg;F`;
}

apiFetch();