
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

// Form submission event listener
document.getElementById("consultationForm").addEventListener("submit", function(event) {
	event.preventDefault(); // Prevent the default form submission

	// Use Formspree API to send data
	const formData = new FormData(this); // Get form data

	fetch(this.action, {
			method: this.method,
			body: formData,
			headers: {
					'Accept': 'application/json'
			}
	})
	.then(response => {
			if (response.ok) {
					alert("Thank you for your submission!"); // Success message
					this.reset(); // Reset the form after successful submission
			} else {
					alert("Oops! There was a problem with your submission."); // Error message
			}
	})
	.catch(error => {
			alert("There was a network error."); // Network error message
			console.error('Error:', error);
	});

});
