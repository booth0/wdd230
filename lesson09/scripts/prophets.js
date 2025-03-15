const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

const cards = document.querySelector('#cards');

async function getProphetData() {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        // console.table(data.prophets);
        displayProphets(data.prophets);
    }
    catch (error) {
        console.error('Error fetching data:', error);
    }
}

const displayProphets = (prophets) =>{
    prophets.forEach((prophet) => {
        section = document.createElement('section');
        fullName = document.createElement('h2');
        portrait = document.createElement('img');
        fullName.textContent = `${prophet.name} ${prophet.lastname}`
        portrait.setAttribute('src', prophet.imageurl); // Set image source
        portrait.setAttribute('alt', 'Image of ${prophet.name} ${prophet.lastname}'); // Set alt text
        portrait.setAttribute('loading', 'lazy'); // Set alt text
        portrait.setAttribute('width', '150'); // Set width (optional)
        portrait.setAttribute('height', '200'); // Set height (optional)
        section.className = 'card';
        cards.appendChild(section);
        section.appendChild(fullName);
        section.appendChild(portrait);
        
        // section.appendChild(fullName);
    });
}

getProphetData();