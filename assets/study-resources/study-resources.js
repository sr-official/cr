// Sample data of resources 
const resources = [
	{
			title: "Accounts Name",
			department: "BBA",
			type: "pdf",
			author: "MD Saydur Rahman",
			url: "https://drive.google.com/file/d/1H7HZt2bkmk7nbNJmZ1RSZzLgmXzHfoEO/view?usp=drive_link"
	},
	{
			title: "Introduction to Machine Learning",
			department: "CSE",
			type: "article",
			author: "JavaPoint",
			url: "https://www.javatpoint.com/machine-learning"
	},
	{
			title: "Depreciation",
			department: "BBA",
			type: "article",
			author: "MD Saydur Rahman",
			url: "https://drive.google.com/file/d/1HBf9BF29G4VFAD7gdaE_BVhsV0iBTyOR/view?usp=drive_link"
	},
	{
			title: "Thesis Guidlines",
			department: "EEE",
			type: "article",
			author: "EEE, BUET",
			url: "https://eee.buet.ac.bd/academics/undergraduate/thesis-and-project"
	},
	{
			title: "Criminal Case Study",
			department: "LLB",
			type: "article",
			author: "Doogue + Geroge",
			url: "https://www.criminal-lawyers.com.au/criminal-law/case-studies"
	},
	{
			title: "Multiple-step Income Statement",
			department: "BBA",
			type: "pdf",
			author: "Doogue + Geroge",
			url: "https://drive.google.com/file/d/16MPKKh47uOsIhN367odUhPcGYaWPaUOY/view?usp=drive_link"
	},

];


// Function to dynamically render resource cards
function renderResources() {
	const cardContainer = document.getElementById("cardContainer");
	cardContainer.innerHTML = '';  // Clear existing cards

	resources.forEach(resource => {
			const card = document.createElement("div");
			card.classList.add("card");
			card.setAttribute("data-department", resource.department);
			card.setAttribute("data-type", resource.type);

			card.innerHTML = `
			<h3>${resource.title}</h3>
			<p>Department: ${resource.department}</p>
			<p>Credit: ${resource.author}</p>
			${resource.type === "pdf" ? 
					`<a href="${resource.url}" class="btn download-btn" download>Download PDF</a>` : 
					`<a href="${resource.url}" class="btn read-btn" target="_blank">Read Online</a>`}
	`;
			cardContainer.appendChild(card);
	});
}

// Function to filter resources based on department and type
function filterResources() {
	const departmentFilter = document.getElementById("departmentFilter").value;
	const typeFilter = document.getElementById("typeFilter").value;
	const cards = document.querySelectorAll(".card");

	cards.forEach(card => {
			const cardDepartment = card.getAttribute("data-department");
			const cardType = card.getAttribute("data-type");

			// Show card if it matches both filters or if filters are set to "all"
			if ((departmentFilter === "all" || departmentFilter === cardDepartment) &&
					(typeFilter === "all" || typeFilter === cardType)) {
					card.style.display = "block";
			} else {
					card.style.display = "none";
			}
	});
}

// Initial rendering of resources
document.addEventListener("DOMContentLoaded", renderResources);


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

