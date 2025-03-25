// Get the popup element and the close button
const popup = document.getElementById('popupBanner');
const closeBtn = document.getElementById('closeBtn');
const bannerHeadline = document.getElementById('bannerHeadline');
const isWednesday = document.getElementById('isWednesday');
let upcomingWednesday;
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  function isPopupDay() {
    const today = new Date();
    const day = today.getDay(); // Get the current day (0 = Sunday, 1 = Monday, 2 = Tuesday, etc.)

    // Checks to see if today is Wednesday, deciding whether the banner says today or this Wednesday
    if (day == 3) {
        isWednesday.textContent = 'today';
    } else {
        isWednesday.textContent = 'this Wednesday';
    }

    if (day >= 1 && day <= 3) {
        let daysToWednesday = 3 - day;
        upcomingWednesday = new Date(today); // Initialize as a Date object
        upcomingWednesday.setDate(today.getDate() + daysToWednesday);
        return true;
    }
    return false; // Monday (1), Tuesday (2), Wednesday (3)
}
  
  // Show the popup only if it's Monday, Tuesday, or Wednesday
if (isPopupDay()) {
    // Show the popup after 2 seconds
    let day = upcomingWednesday.getDate(); // Get the day of the month
    let suffix = (day % 10 === 1 && day !== 11) ? 'st' : (day % 10 === 2 && day !== 12) ? 'nd' : (day % 10 === 3 && day !== 13) ? 'rd' : 'th';
    let monthday = `${day}${suffix}`;
    bannerHeadline.textContent = `Wednesday ${months[upcomingWednesday.getMonth()]} ${monthday}, Chamber Meet and Greet`;
    setTimeout(() => {
      popup.style.display = 'flex';
    }, 2000);
}

// Banner testing: used to test banner on days that aren't Monday, Tuesday, or Wednesday

// let today = new Date()
// let day = today.getDate(); // Get the current day of the month
// let suffix = (day % 10 === 1 && day !== 11) ? 'st' : (day % 10 === 2 && day !== 12) ? 'nd' : (day % 10 === 3 && day !== 13) ? 'rd' : 'th';
// let date = `${day}${suffix}`;
// if (today.getDay() == 3) {
//     isWednesday.textContent = 'today'
// }
// else {
//     isWednesday.textContent = 'this Wednesday'
// }
// bannerHeadline.textContent = `Wednesday ${months[today.getMonth()]} ${date}, Chamber Meet and Greet`;

// // Show the popup after 2 seconds (for example)
// setTimeout(() => {
//     popup.style.display = 'flex';
//   }, 2000);

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