const year = document.querySelector('#year');
const options = {year: "numeric"};
// year.textContent += " " + new Date().toLocaleDateString("en-UK", options);
const currentDate = new Date().toLocaleDateString("en-UK", options);

// Split the existing content by comma
const contentArray = year.textContent.split(',');

// Reconstruct the content with the date inserted between "&copy;" and "Adam Booth, Arizona"
year.textContent = contentArray[0] + currentDate  + ' ' + contentArray[1] + ", " + contentArray[2];