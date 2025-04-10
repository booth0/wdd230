const json = './data/vehicles.json'; // Relative path to local JSON file
const cards2 = document.querySelector('#cards');

async function getVehicleData() {
    try {
        const response = await fetch(json);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data); // Check if data is being fetched correctly
        displayScooters(data.vehicle_type.scooters);
        displayATVs(data.vehicle_type.atvs);
        displayJeeps(data.vehicle_type.jeeps)
    } 
    catch (error) {
        console.error('Error fetching data:', error);
    }
}
const createPriceTable = (price) => {
    // Create the table and add some basic styling
    const table = document.createElement('table');
    table.style.borderCollapse = 'collapse';
    table.style.marginTop = '10px';
    table.style.margin = '10px auto';
    
    // Create header row
    const headerRow = document.createElement('tr');
    const headers = ['Pricing Method', 'Half Day', 'Full Day'];
    headers.forEach(text => {
        const th = document.createElement('th');
        th.textContent = text;
        th.style.border = '1px solid #ccc';
        th.style.padding = '5px';
        headerRow.appendChild(th);
    });
    table.appendChild(headerRow);

    // Create row for Reservation pricing
    const reservationRow = document.createElement('tr');
    const resMethodCell = document.createElement('td');
    resMethodCell.textContent = 'Reservation';
    resMethodCell.style.border = '1px solid #ccc';
    resMethodCell.style.padding = '5px';

    const resHalfDayCell = document.createElement('td');
    resHalfDayCell.textContent = `$${price.reservation.half_day}`;
    resHalfDayCell.style.border = '1px solid #ccc';
    resHalfDayCell.style.padding = '5px';

    const resFullDayCell = document.createElement('td');
    resFullDayCell.textContent = `$${price.reservation.full_day}`;
    resFullDayCell.style.border = '1px solid #ccc';
    resFullDayCell.style.padding = '5px';

    reservationRow.appendChild(resMethodCell);
    reservationRow.appendChild(resHalfDayCell);
    reservationRow.appendChild(resFullDayCell);
    table.appendChild(reservationRow);

    // Create row for Walk-in pricing
    const walkInRow = document.createElement('tr');
    const walkMethodCell = document.createElement('td');
    walkMethodCell.textContent = 'Walk-in';
    walkMethodCell.style.border = '1px solid #ccc';
    walkMethodCell.style.padding = '5px';

    const walkHalfDayCell = document.createElement('td');
    walkHalfDayCell.textContent = `$${price.walk_in.half_day}`;
    walkHalfDayCell.style.border = '1px solid #ccc';
    walkHalfDayCell.style.padding = '5px';

    const walkFullDayCell = document.createElement('td');
    walkFullDayCell.textContent = `$${price.walk_in.full_day}`;
    walkFullDayCell.style.border = '1px solid #ccc';
    walkFullDayCell.style.padding = '5px';

    walkInRow.appendChild(walkMethodCell);
    walkInRow.appendChild(walkHalfDayCell);
    walkInRow.appendChild(walkFullDayCell);
    table.appendChild(walkInRow);

    return table;
};

const displayScooters = (scooters) => {
    const title = document.createElement('h2');
    const container_div = document.createElement('div');
    container_div.className = "container";
    container_div.style.display = "flex";
    container_div.style.justifyContent = "start";
    
    title.textContent = "Scooters";
    // title.style.textAlign = 'center';
    cards2.appendChild(title);

    scooters.forEach((scooter) => {
        const section = document.createElement('section');
        const vehicle_name = document.createElement('h3');
        const capacity = document.createElement('p');

        vehicle_name.textContent = `${scooter.name} (${scooter.output})`;
        capacity.textContent = `Capacity: ${scooter.capacity} Person`;

        section.className = 'card';
        section.appendChild(vehicle_name);
        section.appendChild(capacity);

        // Create and append the price table using the helper function
        const priceTable = createPriceTable(scooter.price);
        section.appendChild(priceTable);

        container_div.appendChild(section);
    });
    cards2.appendChild(container_div);
};

const displayATVs = (atvs) => {
    const title = document.createElement('h2');
    title.textContent = "ATVs";
    cards2.appendChild(title);

    const container_div = document.createElement('div');
    container_div.className = "container";
    container_div.style.display = "flex";
    container_div.style.justifyContent = "start";

    atvs.forEach((atv) => {
        const section = document.createElement('section');
        const vehicle_name = document.createElement('h3');
        const capacity = document.createElement('p');

        vehicle_name.textContent = atv.name;
        capacity.textContent = `Capacity: ${atv.capacity} Person${atv.capacity > 1 ? 's' : ''}`;

        section.className = 'card';
        section.appendChild(vehicle_name);
        section.appendChild(capacity);

        // Append the price data table
        const priceTable = createPriceTable(atv.price);
        section.appendChild(priceTable);

        container_div.appendChild(section);
    });
    cards2.appendChild(container_div);
};

const displayJeeps = (jeeps) => {
    const title = document.createElement('h2');
    title.textContent = "Jeeps";
    cards2.appendChild(title);

    const container_div = document.createElement('div');
    container_div.className = "container";
    container_div.style.display = "flex";
    container_div.style.justifyContent = "start";

    jeeps.forEach((jeep) => {
        const section = document.createElement('section');
        const vehicle_name = document.createElement('h3');
        const capacity = document.createElement('p');
        const styleDetail = document.createElement('p');
        const airConditioning = document.createElement('p');
        const transmission = document.createElement('p');

        vehicle_name.textContent = jeep.name;
        capacity.textContent = `Capacity: ${jeep.capacity} Person${jeep.capacity > 1 ? 's' : ''}`;
        styleDetail.textContent = `Style: ${jeep.style}`;
        airConditioning.textContent = `Air Conditioning: ${jeep.air_conditioning ? 'Yes' : 'No'}`;
        transmission.textContent = `Transmission: ${jeep.transmission}`;

        section.className = 'card';
        section.appendChild(vehicle_name);
        section.appendChild(capacity);
        section.appendChild(styleDetail);
        section.appendChild(airConditioning);
        section.appendChild(transmission);

        // Append the price data table
        const priceTable = createPriceTable(jeep.price);
        section.appendChild(priceTable);

        container_div.appendChild(section);
    });
    cards2.appendChild(container_div);
};









// const displayScooters = (scooters) => {
//     const title = document.createElement('h2');
//     title.textContent = "Scooters";
//     cards2.appendChild(title);

//     scooters.forEach((scooter) => {
//         const section = document.createElement('section');
//         const vehicle_name = document.createElement('h3');
//         const capacity = document.createElement('p');

//         vehicle_name.textContent = `${scooter.name} (${scooter.output})`;
//         capacity.textContent = `Capacity: ${scooter.capacity} Person`;

//         const reservationHeading = document.createElement('strong');
//         reservationHeading.textContent = "Reservation:";
//         const reservationDetails = document.createElement('p');
//         reservationDetails.innerHTML = `
//             Half Day: $${scooter.price.reservation.half_day}<br>
//             Full Day: $${scooter.price.reservation.full_day}
//         `;

//         const walkInHeading = document.createElement('strong');
//         walkInHeading.textContent = "Walk-in:";
//         const walkInDetails = document.createElement('p');
//         walkInDetails.innerHTML = `
//             Half Day: $${scooter.price.walk_in.half_day}<br>
//             Full Day: $${scooter.price.walk_in.full_day}
//         `;

//         section.className = 'card';
//         section.appendChild(vehicle_name);
//         section.appendChild(capacity);
//         section.appendChild(reservationHeading);
//         section.appendChild(reservationDetails);
//         section.appendChild(walkInHeading);
//         section.appendChild(walkInDetails);

//         cards2.appendChild(section);
//     });
// }

// const displayATVs = (atvs) => {
//     const title = document.createElement('h2');
//     title.textContent = "ATVs";
//     cards2.appendChild(title);

//     atvs.forEach((atv) => {
//         const section = document.createElement('section');
//         const vehicle_name = document.createElement('h3');
//         const capacity = document.createElement('p');

//         vehicle_name.textContent = atv.name;
//         capacity.textContent = `Capacity: ${atv.capacity} Person${atv.capacity > 1 ? 's' : ''}`;

//         const reservationHeading = document.createElement('strong');
//         reservationHeading.textContent = "Reservation:";
//         const reservationDetails = document.createElement('p');
//         reservationDetails.innerHTML = `
//             Half Day: $${atv.price.reservation.half_day}<br>
//             Full Day: $${atv.price.reservation.full_day}
//         `;

//         const walkInHeading = document.createElement('strong');
//         walkInHeading.textContent = "Walk-in:";
//         const walkInDetails = document.createElement('p');
//         walkInDetails.innerHTML = `
//             Half Day: $${atv.price.walk_in.half_day}<br>
//             Full Day: $${atv.price.walk_in.full_day}
//         `;

//         section.className = 'card';
//         section.appendChild(vehicle_name);
//         section.appendChild(capacity);
//         section.appendChild(reservationHeading);
//         section.appendChild(reservationDetails);
//         section.appendChild(walkInHeading);
//         section.appendChild(walkInDetails);

//         cards2.appendChild(section);
//     });
// }

// const displayJeeps = (jeeps) => {
//     const title = document.createElement('h2');
//     title.textContent = "Jeeps";
//     cards2.appendChild(title);

//     jeeps.forEach((jeep) => {
//         const section = document.createElement('section');
//         const vehicle_name = document.createElement('h3');
//         const capacity = document.createElement('p');
//         const styleDetail = document.createElement('p');
//         const airConditioning = document.createElement('p');
//         const transmission = document.createElement('p');

//         vehicle_name.textContent = jeep.name;
//         capacity.textContent = `Capacity: ${jeep.capacity} Person${jeep.capacity > 1 ? 's' : ''}`;
//         styleDetail.textContent = `Style: ${jeep.style}`;
//         airConditioning.textContent = `Air Conditioning: ${jeep.air_conditioning ? 'Yes' : 'No'}`;
//         transmission.textContent = `Transmission: ${jeep.transmission}`;

//         const reservationHeading = document.createElement('strong');
//         reservationHeading.textContent = "Reservation:";
//         const reservationDetails = document.createElement('p');
//         reservationDetails.innerHTML = `
//             Half Day: $${jeep.price.reservation.half_day}<br>
//             Full Day: $${jeep.price.reservation.full_day}
//         `;

//         const walkInHeading = document.createElement('strong');
//         walkInHeading.textContent = "Walk-in:";
//         const walkInDetails = document.createElement('p');
//         walkInDetails.innerHTML = `
//             Half Day: $${jeep.price.walk_in.half_day}<br>
//             Full Day: $${jeep.price.walk_in.full_day}
//         `;

//         section.className = 'card';
//         section.appendChild(vehicle_name);
//         section.appendChild(capacity);
//         section.appendChild(styleDetail);
//         section.appendChild(airConditioning);
//         section.appendChild(transmission);
//         section.appendChild(reservationHeading);
//         section.appendChild(reservationDetails);
//         section.appendChild(walkInHeading);
//         section.appendChild(walkInDetails);

//         cards2.appendChild(section);
//     });
// }


getVehicleData();