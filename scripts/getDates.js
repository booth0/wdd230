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