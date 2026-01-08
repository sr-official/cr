
//  ----- dark mode js start -----
// Function to toggle dark mode
function toggleDarkMode() {
	const isDarkMode = document.body.classList.toggle('dark-mode');
	// Save the user's preference to local storage
	localStorage.setItem('darkMode', isDarkMode);

}

// Function to apply dark mode based on saved preference
function applyDarkMode() {
	const isDarkMode = localStorage.getItem('darkMode') === 'true';
	if (isDarkMode) {
		document.body.classList.add('dark-mode');
		document.getElementById('darkModeSwitch').checked = true;
	}

}

// Initialize dark mode on page load
document.addEventListener('DOMContentLoaded', applyDarkMode);

// Event listener for the dark mode toggle
document.getElementById('darkModeSwitch').addEventListener('change', toggleDarkMode);


//  ----- dark mode js end -----



const gridContainer = document.getElementById('gridContainer');

// Example data for clickable divs
const data = [
	{ text: 'PCIU Debate Forum', url: 'https://www.facebook.com/groups/178717602310691/user/100063855258518/' },
	{ text: 'PCIU Sports Forum', url: 'https://www.facebook.com/groups/178717602310691/user/100063706102516/' },
	{ text: 'PCIU Cultural Forum', url: 'https://www.facebook.com/pciupccf1/' },
	{ text: 'PCIU Volunteers', url: 'https://www.facebook.com/groups/178717602310691/user/100089565117756/' },
	{ text: 'PCIU Rover Scout Group', url: 'https://www.facebook.com/groups/178717602310691/user/61574950585244/' },
	{ text: 'PCIU Business Club', url: 'https://www.facebook.com/groups/178717602310691/user/100064322547208/' },
	{ text: 'PCIU Textile Club', url: 'https://www.facebook.com/groups/178717602310691/user/61557189404115/' },
	{ text: 'PCIU Robotics Club', url: 'https://www.facebook.com/groups/178717602310691/user/100063785072774/' },
	{ text: 'IEEE PCIU Student Branch', url: 'https://www.facebook.com/groups/178717602310691/user/100057450609287/' },
	{ text: 'PCIU Civil Engineering Forum', url: 'https://www.facebook.com/groups/178717602310691/user/100083964973198/' },
	{ text: 'PCIU Computer Club', url: 'https://www.facebook.com/groups/178717602310691/user/100092263279944/' },
	{ text: 'PCIU Media Club', url: 'https://www.facebook.com/groups/178717602310691/user/61567010822501/' },
	{ text: 'PCIU English Club', url: 'https://www.facebook.com/groups/178717602310691/user/100064170573912/' },
	{ text: "PCIU Fashion Designer's Club", url: 'https://www.facebook.com/groups/178717602310691/user/100066802296909/' },
	{ text: 'PCIU EEE Club', url: 'https://www.facebook.com/groups/178717602310691/user/61557189404115/' },
	{ text: 'PCIU Networking & Placement Cell', url: 'https://www.facebook.com/groups/pciuplacementcell' },
];

// Function to add a clickable div
function addClickableDiv(text, url) {
		const card = document.createElement('div');
		card.className = 'card';

		card.innerHTML = `<a href="${url}" target="_blank">${text}</a>`;

		gridContainer.appendChild(card);
}

// Dynamically add divs from the example data
data.forEach(item => addClickableDiv(item.text, item.url));