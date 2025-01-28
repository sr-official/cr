
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



document.getElementById('cr-info').addEventListener('click', function() {
	window.location.href = 'assets/cr-info/cr-info.html'; // Link to the new CR's information page
});

document.getElementById('all-links').addEventListener('click', function() {
	window.location.href = 'assets/links/links.html'; // Link to the new consultation page
});

document.getElementById('resources').addEventListener('click', function() {
	window.location.href = 'assets/study-resources/study-resources.html'; // Link to the new resources page
});

document.getElementById('teachers_contribution').addEventListener('click', function() {
	window.location.href = 'assets/teachers/teachers.html'; // Link to the new resources page
});

document.getElementById('contact').addEventListener('click', function() {
	window.location.href = 'assets/contact/contact.html'; // Link to the new admin profile page
});