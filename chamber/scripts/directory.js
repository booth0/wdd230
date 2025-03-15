const json = './data/members.json'; // Relative path to local JSON file
const cards2 = document.querySelector('#cards');

async function getLinkData() {
    try {
        const response = await fetch(json);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data); // Check if data is being fetched correctly
        displayBusinesses(data.members); // Assuming "links" is the key in JSON
    } 
    catch (error) {
        console.error('Error fetching data:', error);
    }
}

const displayBusinesses = (businesses) =>{
    businesses.forEach((business) => {
        section = document.createElement('section');
        address = document.createElement('p')
        phone = document.createElement('p')
        website = document.createElement('a')
        logo = document.createElement('img');

        address.textContent = `${business.address}`
        phone.textContent = `${business.phone}`
        website.textContent = `${business.website}`

        website.setAttribute('href', business.website)
        logo.setAttribute('src', business.image); // Set image source
        logo.setAttribute('alt', 'Image of ${business.name}'); // Set alt text
        logo.setAttribute('loading', 'lazy'); // Set alt text
        logo.style.maxHeight = "80px";
        section.className = 'card';
        cards2.appendChild(section);
        section.appendChild(logo);
        section.appendChild(address);
        section.appendChild(phone);
        section.appendChild(website);
        
    });
}

getLinkData();