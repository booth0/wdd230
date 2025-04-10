const toggleBtn = document.querySelector('.menu-toggle');
const navbar = document.querySelector('.navbar');
toggleBtn.addEventListener('click', () => {
  navbar.classList.toggle('active');
});

// ✔️ The current temperature
// ✔️ The current humidity
// ✔️ The next day's forecasted temperature at 15:00 (3:00pm).
// ✔️ All the weather data points provided including the main (which is the title, e.g., "Clouds"), the description, and the associated weather icon.

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=20.43&lon=-86.90&units=imperial&appid=1b1e8e5f5acec9a31033b42c74645b94';

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


// const currentTemp = document.querySelector('#current-temp');
// let weatherIcon = document.createElement('img');
// const weatherImg = document.querySelector('#weatherImg');
// const captionDesc = document.querySelector('#description');

const weatherCard = document.querySelector('.card:nth-of-type(2)');

const displayWeather = (data) => {
const currentTemp = document.createElement("p");
const currentHumidity = document.createElement("p");
currentTemp.innerHTML = `Current Temperature: ${data.main.temp}&deg;F`;
currentHumidity.innerHTML = `Current Humidity: ${data.main.humidity}`
weatherCard.appendChild(currentTemp);
weatherCard.appendChild(currentHumidity);




  // captionDesc.textContent = data.weather[0].description.split(' ').map(word => 
  //     word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
  // ).join(' ');
  // weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`; // Replace with your image URL
  // weatherIcon.alt = data.weather[0].main;
  // weatherImg.appendChild(weatherIcon);

}


apiFetch()