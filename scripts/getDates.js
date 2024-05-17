const year = document.querySelector('#year');
const options = {year: "numeric"};

const currentDate = new Date().toLocaleDateString("en-UK", options);

// Split the existing content by comma
const contentArray = year.textContent.split(',');

// Reconstruct the content with the date inserted between "&copy;" and "Adam Booth, Arizona"
year.textContent = contentArray[0] + currentDate  + ' ' + contentArray[1] + ", " + contentArray[2];



var lastModified = document.lastModified;
            
// Find the last modified paragraph element
 var lastModifiedParagraph = document.getElementById("lastModified");
            
// Update the content of the paragraph with the last modified date and time
lastModifiedParagraph.textContent += lastModified;


const hamButton = document.querySelector('#hamMenu');
const navigation = document.querySelector('.menu');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

const darkMode = document.querySelector('#darkMode');
const body = document.querySelector('body');
const header = document.querySelector('header');
const menus = document.querySelectorAll('.menu');
const links = document.querySelectorAll('body a');
const footer = document.querySelector('footer');
const h2s = document.querySelectorAll('.card h2');

darkMode.addEventListener( 'click', () => {
	body.classList.toggle('dark');
	
	menus.forEach(menu => {
		menu.classList.toggle('dark2');
	});	
	links.forEach(link => {
		link.classList.toggle('whiteText');
	});	
	hamButton.classList.toggle('whiteText');
	footer.classList.toggle('dark2');
	header.classList.toggle('dark3');
	h2s.forEach(h2 => {
		h2.classList.toggle('dark3');
	});
	// boxes.forEach(box => {
	// 	box.classList.toggle('dark3');
	// });

});