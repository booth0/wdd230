const toggleBtn = document.querySelector('.menu-toggle');
const navbar = document.querySelector('.navbar');
toggleBtn.addEventListener('click', () => {
  navbar.classList.toggle('active');
});
const popup = document.getElementById('popupBanner');
const closeBtn = document.getElementById('closeBtn');
const highTemp = document.getElementById('high_temp');

// ✔️ The current temperature
// ✔️ The current humidity
// ✔️ The next day's forecasted temperature at 15:00 (3:00pm).
// ✔️ All the weather data points provided including the main (which is the title, e.g., "Clouds"), the description, and the associated weather icon.

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=20.43&lon=-86.90&units=imperial&appid=1b1e8e5f5acec9a31033b42c74645b94';
const url2 = 'https://api.openweathermap.org/data/2.5/forecast?lat=20.43&lon=-86.90&units=imperial&appid=1b1e8e5f5acec9a31033b42c74645b94';

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
async function apiFetch2() {
  try {
    const response2 = await fetch(url2);

    if (!response2.ok) {
        throw Error(await response2.text());
    }

    const data2 = await response2.json();
    console.log(data2); // Check if data is being fetched correctly
    displayWeather2(data2.list[5]);
} 
catch (error) {
    console.error('Error fetching data:', error);
}
  
}

const weatherCard = document.querySelector('.home_card:nth-of-type(2)');

const displayWeather = (data) => {
  const weatherIconContainer = document.createElement("div");
  weatherIconContainer.className = "weatherIconContainer";
  const weatherIcon = document.createElement("img");
  const captionDesc = document.createElement("p");
  const currentTemp = document.createElement("p");
  const currentHumidity = document.createElement("p");
  weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  weatherIcon.alt = data.weather[0].main;
  captionDesc.textContent = data.weather[0].description.split(' ').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    ).join(' ');
  currentTemp.innerHTML = `Current Temperature: ${data.main.temp}&deg;F`;
  currentHumidity.innerHTML = `Current Humidity: ${data.main.humidity}`
  highTemp.innerHTML = `${data.main.temp_max}&deg;F`
  weatherCard.appendChild(weatherIconContainer);
  weatherIconContainer.appendChild(weatherIcon);
  weatherIconContainer.appendChild(captionDesc);
  weatherCard.appendChild(currentTemp);
  weatherCard.appendChild(currentHumidity);
}

const displayWeather2 = (data) => {
  const tomorrowTemp = document.createElement("p");
  tomorrowTemp.innerHTML = `Tomorrow's Temperature (3pm): ${data.main.temp}&deg;F`;
  weatherCard.appendChild(tomorrowTemp);
}


apiFetch()
apiFetch2()

// When the user clicks on the close button, hide the popup
closeBtn.onclick = function() {
  popup.style.display = 'none';
}

// You can also close the popup by clicking outside of it
window.onclick = function(event) {
  if (event.target === popup) {
    popup.style.display = 'none';
  }
}


let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}