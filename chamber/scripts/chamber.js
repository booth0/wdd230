const year = document.querySelector('#year');
const options = {year: "numeric"};

const currentDate = new Date().toLocaleDateString("en-UK", options);

// Split the existing content by comma
const contentArray = year.textContent.split(',');

// Reconstruct the content with the date inserted between "&copy;" and "Adam Booth, Arizona"
year.textContent = contentArray[0] + currentDate  + ' ' + contentArray[1];



// Last Modified

var lastModified = document.lastModified;
            
// Find the last modified paragraph element
 var lastModifiedParagraph = document.getElementById("lastModified");
            
// Update the content of the paragraph with the last modified date and time
lastModifiedParagraph.textContent += lastModified;



// Hamburger Menu

const hamButton = document.querySelector('#hamMenu');
const navigation = document.querySelector('.navbar');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});



// Dark Mode

const modeButton = document.querySelector("#mode");
const body = document.querySelector("body");
const cards = document.querySelectorAll(".card");
const header = document.querySelector("header");
const footer = document.querySelector("footer");

modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("🕶️")) {
		header.style.background = "#181818";
		body.style.background = "#212121";
		footer.style.background = "#181818";
		modeButton.textContent = "🔆";
		cards.forEach(card => {
            card.style.background = "#181818";
            card.style.color = "white";
        });
	} else {
		header.style.background = "#17183B";
		body.style.background = "#E9E6D3";
		footer.style.background = "#A11692";
		modeButton.textContent = "🕶️";
		cards.forEach(card => {
            card.style.background = "white";
            card.style.color = "black";
        });
	}
});


