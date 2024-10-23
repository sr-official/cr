// Sample data of resources 
const resources = [
	{
			title: "Accounts Name",
			department: "BBA",
			type: "pdf",
			author: `<a href="https://www.facebook.com/saydurctg.bd" target="_blank">MD Saydur Rahman</a>`,
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
			type: "pdf",
			author: `<a href="https://www.facebook.com/saydurctg.bd" target="_blank">MD Saydur Rahman</a>`,
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
	{
			title: "Managerial Accounting | 14th Ed. <br> Ray H., Eric W., Peter C.",
			department: "BBA",
			type: "book",
			author: `<a href="https://www.facebook.com/alo292000" target="_blank">Al-Abie Monsour</a>`,
			url: "https://drive.google.com/file/d/1sYFzoNBBmERndIj_OftkayplJ3jqafFy/view?usp=drive_link"
	},
	{
			title: "Managerial Accounting | 16th Ed. <br> Ray H., Eric W., Peter C.",
			department: "BBA",
			type: "book",
			author: `<a href="https://www.facebook.com/alo292000" target="_blank">Al-Abie Monsour</a>`,
			url: "https://drive.google.com/file/d/1-n9qeTbozL6xgIyj7gULzNtsOLXhpg8H/view?usp=drive_link"
	},
	{
			title: "Accounting Principles | 13th Ed. <br> Kieso",
			department: "BBA",
			type: "book",
			author: `<a href="https://www.facebook.com/saydurctg.bd" target="_blank">MD Saydur Rahman</a>`,
			url: "https://drive.google.com/file/d/1GNsv_LsIJd_xF5_sGQcPlrdFSHuhlrx0/view?usp=drive_link"
	},
	{
			title: "Accounting Principles | 9th Ed. <br> Kieso",
			department: "BBA",
			type: "book",
			author: `<a href="https://www.facebook.com/saydurctg.bd" target="_blank">MD Saydur Rahman</a>`,
			url: "https://drive.google.com/file/d/1GUR2X3haK5h29TqZoHHBaQef5XSsWbrs/view?usp=drive_link"
	},
	{
			title: "Common Mistakes in English | <br>T.J Fitikides",
			department: "ENG",
			type: "book",
			author: `<a href="https://www.facebook.com/saydurctg.bd" target="_blank">MD Saydur Rahman</a>`,
			url: "https://drive.google.com/file/d/1H1wgv5NgcwqhPBhUzQ-hBJ_YdJM0eOuZ/view?usp=drive_linkk"
	},
	{
			title: "English Grammar in Use | <br> Louise Hashemi",
			department: "ENG",
			type: "book",
			author: `<a href="https://www.facebook.com/saydurctg.bd" target="_blank">MD Saydur Rahman</a>`,
			url: "https://drive.google.com/file/d/1G_sC0c3f4jOW_MqjddqdcqZEaqEuDRe2/view?usp=drive_link"
	},
	{
			title: "English Grammar in Use | 3rd Ed. <br> Raymond Murphy",
			department: "ENG",
			type: "book",
			author: `<a href="https://www.facebook.com/saydurctg.bd" target="_blank">MD Saydur Rahman</a>`,
			url: "https://drive.google.com/file/d/1GdFEbW7tuJjcSAkbSvsMZC2h4DgSgPXP/view?usp=drive_link"
	},
	{
			title: "English Grammar in Use | 4th Ed. <br> Raymond Murphy",
			department: "ENG",
			type: "book",
			author: `<a href="https://www.facebook.com/saydurctg.bd" target="_blank">MD Saydur Rahman</a>`,
			url: "https://drive.google.com/file/d/1GeaYUNKQNjHznJ4AezYcA9om3rdcFx8t/view?usp=drive_link"
	},
	{
			title: "Mangement by | 11th Ed. <br> Ricky W. Griffin",
			department: "BBA",
			type: "book",
			author: `<a href="https://www.facebook.com/saydurctg.bd" target="_blank">MD Saydur Rahman</a>`,
			url: "https://drive.google.com/file/d/1GgssmvwHhK2Tp0iBlgW-2CVug6JUtjbs/view?usp=drive_link"
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
			${resource.type === "pdf" || resource.type === "book"? 
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

