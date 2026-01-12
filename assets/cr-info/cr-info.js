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

class CR {
	constructor(name, dept, batch, section, shift, contact) {
			this.name = name;
			this.dept = dept;
			this.batch = batch;
			this.section = section;
			this.shift = shift;
			this.contact = contact;
	}
}

class CRManager {
	constructor() {
			this.crList = [];
			this.filteredCrList = [];
	}

	addCR(cr) {
			this.crList.push(cr);
			this.filteredCrList.push(cr);  // Keep filtered list in sync
			this.renderTable();
			this.updateCounter();
			this.populateFilters();
	}

	renderTable() {
			const tableBody = document.querySelector('#crTable tbody');
			tableBody.innerHTML = ''; // Clear table

			this.filteredCrList.forEach((cr, index) => {
					const row = document.createElement('tr');
					row.innerHTML = `
							<td>${index + 1}</td>
							<td>${cr.name}</td>
							<td>${cr.dept}</td>
							<td>${cr.batch}</td>
							<td>${cr.section}</td>
							<td>${cr.shift}</td>
							<td><a href="tel:${cr.contact}">${cr.contact}</a></td>
					`;
					tableBody.appendChild(row);
			});
	}

	updateCounter() {
			const counter = document.getElementById('crCounter');
			counter.textContent = `Total CRs: ${this.filteredCrList.length}`;
	}

	filterTable() {
			const deptFilter = document.getElementById('deptFilter').value;
			const batchFilter = document.getElementById('batchFilter').value;
			const sectionFilter = document.getElementById('sectionFilter').value;
			const shiftFilter = document.getElementById('shiftFilter').value;

			this.filteredCrList = this.crList.filter(cr => {
					return (deptFilter === '' || cr.dept === deptFilter) &&
								 (batchFilter === '' || cr.batch === batchFilter) &&
								 (sectionFilter === '' || cr.section === sectionFilter) &&
								 (shiftFilter === '' || cr.shift === shiftFilter);
			});

			this.renderTable();
			this.updateCounter();
	}

	populateFilters() {
			const deptSet = new Set();
			const batchSet = new Set();
			const sectionSet = new Set();
			const shiftSet = new Set();

			this.crList.forEach(cr => {
					deptSet.add(cr.dept);
					batchSet.add(cr.batch);
					sectionSet.add(cr.section);
					shiftSet.add(cr.shift);
			});

			this.populateFilterOptions('deptFilter', deptSet);
			this.populateFilterOptions('batchFilter', batchSet);
			this.populateFilterOptions('sectionFilter', sectionSet);
			this.populateFilterOptions('shiftFilter', shiftSet);
	}

	populateFilterOptions(filterId, dataSet) {
			const filter = document.getElementById(filterId);
			filter.innerHTML = '<option value="">All</option>'; // Reset options

			dataSet.forEach(value => {
					const option = document.createElement('option');
					option.value = value;
					option.textContent = value;
					filter.appendChild(option);
			});
	}

}

// Initialize CR Manager
const crManager = new CRManager();

// Add Event Listeners for Filters
document.getElementById('deptFilter').addEventListener('change', () => crManager.filterTable());
document.getElementById('batchFilter').addEventListener('change', () => crManager.filterTable());
document.getElementById('sectionFilter').addEventListener('change', () => crManager.filterTable());
document.getElementById('shiftFilter').addEventListener('change', () => crManager.filterTable());

// Add Event Listener for PDF Download
document.getElementById('downloadPdf').addEventListener('click', () => crManager.savePDF());

// Dark/Light Mode Logic
const themeToggleButton = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const body = document.body;

function enableDarkMode() {
	body.classList.add('dark-mode');
	themeIcon.textContent = 'Dark Mode🌜';  // Change icon to moon
	localStorage.setItem('theme', 'dark');
}

function enableLightMode() {
	body.classList.remove('dark-mode');
	themeIcon.textContent = 'Light Mode🌞';  // Change icon to sun
	localStorage.setItem('theme', 'light');
}

themeToggleButton.addEventListener('click', () => {
	if (body.classList.contains('dark-mode')) {
			enableLightMode();
	} else {
			enableDarkMode();
	}
});

// Load the saved theme from local storage
if (localStorage.getItem('theme') === 'dark') {
	enableDarkMode();
}

// bba CR's data
crManager.addCR(new CR("-","BBA","-", "A", "Day", ""));
crManager.addCR(new CR("Md. Asik Uddin Dihan","BBA","15", "B", "Day", "01741-010001"));
crManager.addCR(new CR("-","BBA","-", "C", "Day", ""));
crManager.addCR(new CR("-","BBA","-", "D", "Day", ""));
crManager.addCR(new CR("-","BBA","-", "E", "Day", ""));
crManager.addCR(new CR("Shah Md Intisar Hoque","BBA", "17", "-", "Day", "01783-943276"));
crManager.addCR(new CR("Bhuiyan Niloy","BBA", "20", "-", "Day", "01626-164026"));
crManager.addCR(new CR("Mehedi Hasan", "BBA", "21", "B", "Day", "01710-268871"));
crManager.addCR(new CR("Asif Mahmud Akib", "BBA", "21", "C", "Day", "01631-985008"));
crManager.addCR(new CR("Imran Ahmed", "BBA", "22", "A", "Day", "01610-051205"));
crManager.addCR(new CR("-", "BBA", "23", "-", "Day", ""));
crManager.addCR(new CR("Zannatul Nayma Neha ","BBA", "24", "A", "Day", ""));
crManager.addCR(new CR("Mohammad Kaderul Munir", "BBA", "24", "-", "Day", "01874-920462"));
crManager.addCR(new CR("-", "BBA", "25", "-", "Day", ""));
crManager.addCR(new CR("Taher juzar hussain", "BBA", "26", "A", "Day", "01833-709590"));
crManager.addCR(new CR("Anamul Haque Khan Fahim", "BBA", "26", "B", "Day", "01840-122638"));
crManager.addCR(new CR("Artika Azim Urbi", "BBA", "26", "-", "Day", ""));
crManager.addCR(new CR("Atiya Ulfat","BBA", "26", "-", "Day", ""));
crManager.addCR(new CR("MD. Aliph Annur","BBA", "27", "A", "Day", "01922-333149"));
crManager.addCR(new CR("Kazi Md Amin", "BBA", "27", "B", "Day", "01310-760247"));
crManager.addCR(new CR("Sushmita Paul", "BBA", "27", "-","Day", ""));
crManager.addCR(new CR("Miftah Sultana Momo", "BBA", "27", "D","Day", ""));
crManager.addCR(new CR("Rafin Kamal", "BBA", "27", "D","Day", "01858-264093"));
crManager.addCR(new CR("Ehsanul Haq", "BBA", "28", "A", "Day", "01406-699924"));
crManager.addCR(new CR("Meheriyan Hossain Maria", "BBA", "28", "A", "Day", ""));
crManager.addCR(new CR("Fourkanul Islam","BBA", "29", "A", "Day", "01715-069319"));
crManager.addCR(new CR("Afraz Abdullah","BBA", "29", "B", "Day", "01944-174538"));
crManager.addCR(new CR("Md Minhaz Uddin", "BBA", "29", "C", "Day", "01571-580068"));
crManager.addCR(new CR("Nur Nahar Irin", "BBA", "29", "C", "Day", ""));
crManager.addCR(new CR("Md Imtiaz Hossain", "BBA", "29", "D", "Day","01879-633157"));
crManager.addCR(new CR("Amena Begum Munni", "BBA", "29", "E", "Day", ""));
crManager.addCR(new CR("Jahid Hasan Refat", "BBA", "29", "E", "Day", "01621-924633"));
crManager.addCR(new CR("Apurba Das", "BBA", "30", "A", "Day", "01784-113280"));
crManager.addCR(new CR("Rasheda Akter", "BBA", "30","A", "Day", ""));
crManager.addCR(new CR("Anika Khanam", "BBA", "30","B", "Day", ""));
crManager.addCR(new CR("Jarif Jasid", "BBA", "30", "C", "Day", "01566-068217"));
crManager.addCR(new CR("Arab Reza Chowdhury", "BBA", "30", "D", "Day", "01978-244196"));
crManager.addCR(new CR("Abrar", "BBA", "30", "B", "Day", "01890-335672"));
crManager.addCR(new CR("Aslam Sami", "BBA", "31", "A", "Day", "01878-404036"));
crManager.addCR(new CR("Tanmoy Palit", "BBA", "31", "A", "Day", "01828-712659"));
crManager.addCR(new CR("Bristy Nandy", "BBA", "31", "B", "Day", ""));
crManager.addCR(new CR("Md Junaid Uddin Heaven", "BBA", "31", "B", "Day", "01939-499805"));
crManager.addCR(new CR("Meherun Nesa", "BBA", "31", "C", "Day", ""));
crManager.addCR(new CR("Nusrat Jahan Khanam", "BBA", "31", "C", "Day", ""));
crManager.addCR(new CR("S.M Fahim Uddin", "BBA", "31", "C", "Day", "01821-424327"));
crManager.addCR(new CR("Dipa Chowdhury", "BBA", "31","D", "Day", ""));
crManager.addCR(new CR("Nissan palit", "BBA", "31", "D", "Day", "01818-573863"));
crManager.addCR(new CR("Tasfiya Rahman Sumaiya", "BBA", "31", "-", "Day", ""));
crManager.addCR(new CR("MD. Enamul Haque Sayed", "BBA", "32", "A", "Day", "01885-210697"));
crManager.addCR(new CR("Afroza Chowdhury", "BBA", "32", "A", "Day", ""));
crManager.addCR(new CR("Md Saydur Rahman", "BBA", "32", "B", "Day", "01875-261994"));
crManager.addCR(new CR("Sidratul Muntaha", "BBA", "32", "B", "Day", ""));
crManager.addCR(new CR("Mahadi Habib Shifat", "BBA", "32","C", "Day", "01827-531542"));
crManager.addCR(new CR("Rubaiya Sultana", "BBA", "32","C", "Day", ""));
crManager.addCR(new CR("Mahmudul Islam", "BBA", "32", "D", "Day", "01753-698891"));
crManager.addCR(new CR("Ritu Sikder", "BBA", "32","D", "Day", ""));
crManager.addCR(new CR("Tazkea Afrin", "BBA", "32", "E", "Day", ""));
crManager.addCR(new CR("Md Ismail Hossen", "BBA", "32", "E", "Day", "01944-405929"));
crManager.addCR(new CR("Anas Bin Jaber", "BBA", "33","A", "Day", "01603-661520"));
crManager.addCR(new CR("Jannatul Fahmida", "BBA", "33", "C", "Day", ""));
crManager.addCR(new CR("Md Mahsenul Haque Adnan", "BBA", "33", "C", "Day", "01814-305472"));
crManager.addCR(new CR("Md Miraj Hossen Tanveer", "BBA", "33", "C", "Day", "016326-59902"));
crManager.addCR(new CR("Nusrat Jahan","BBA", "33", "A", "Day", ""));
crManager.addCR(new CR("Sinthiya Albin", "BBA", "33", "E", "Day", ""));
crManager.addCR(new CR("Abir Hassan", "BBA", "33", "D", "Day", "01622-39327"));
crManager.addCR(new CR("Nafisa Anjum", "BBA", "33", "D", "Day", ""));
crManager.addCR(new CR("Mehzabin Ikra", "BBA", "34", "A", "Day", ""));
crManager.addCR(new CR("Shoaib Uddin Sabith", "BBA", "34", "A", "Day", "01816-112662"));
crManager.addCR(new CR("Islam Sabit", "BBA", "34", "B", "Day", "01943-458064"));
crManager.addCR(new CR("Anika Khanam", "BBA", "34", "B", "Day", ""));
crManager.addCR(new CR("Nusrat Jahan Elma", "BBA", "34", "C", "Day", ""));



// bft CR's data
crManager.addCR(new CR("Abu Sayed","BFT", "25", "-", "Day", "01683-131771"));
crManager.addCR(new CR("Nadia Nahar", "BFT", "26", "-", "Day", ""));
crManager.addCR(new CR("Mohammad Junayed Hossain", "BFT", "27", "-", "Day", "01820-964340"));
crManager.addCR(new CR("Fariha Kamal", "BFT", "28", "-", "Day", ""));
crManager.addCR(new CR("Sajarul Hoque", "BFT", "29", "-", "Day", "01871-247568"));
crManager.addCR(new CR("Khadimatul Alam Ratna", "BFT", "29", "-", "Day", ""));
crManager.addCR(new CR("Tanvin Reza", "BFT", "30", "-", "Day", ""));
crManager.addCR(new CR("Mostafa Hossain Shakil", "BFT", "30", "-", "Day", "01885-978437"));
crManager.addCR(new CR("Samaira ", "BFT", "31", "-", "Day", ""));
crManager.addCR(new CR("Pritam Paul Chowdhury", "BFT", "31", "-", "Day", "01738-141972"));
crManager.addCR(new CR("Antika Aich", "BFT", "32", "-", "Day", ""));
crManager.addCR(new CR("Roktim Chy", "BFT", "32", "-", "Day", "01304-578169"));
crManager.addCR(new CR("Md Shihab Hossain", "BFT", "33", "-", "Day", "01571-168361"));
crManager.addCR(new CR("Farjana Akter Asha", "BFT", "33", "-", "Day", ""));


// bte CR's data
crManager.addCR(new CR("Estiak Mahbub", "BTE", "22", "-", "-", "01533-912191"));
crManager.addCR(new CR("Sreenath Das", "BTE", "25", "-", "-", "01993-606963"));
crManager.addCR(new CR("Mohammad Abdul Ahad", "BTE", "26", "A", "Day", "01876-385596"));
crManager.addCR(new CR("Sharmin Akter Emu", "BTE", "26", "A", "Eve", ""));
crManager.addCR(new CR("Aminur", "BTE", "27", "-", "Eve", "01855-812836"));
crManager.addCR(new CR("Raihana Akter", "BTE", "28", "-", "Eve", ""));
crManager.addCR(new CR("Abir Hasan", "BTE", "29", "-", "Day", "01871-562088"));
crManager.addCR(new CR("Salma Sharmin", "BTE", "29", "E", "-", ""));
crManager.addCR(new CR("Tarekul Islam", "BTE", "29", "-", "-", "01624-635680"));
crManager.addCR(new CR("Farjana Akter", "BTE", "30", "-", "-", ""));
crManager.addCR(new CR("Md Arafat", "BTE", "30", "A", "Eve", "01879-679140"));
crManager.addCR(new CR("Tirtha Das", "BTE", "30", "-", "-", ""));
crManager.addCR(new CR("Minhaj Uddin Komol", "BTE", "31", "-", "-", "01870-769495"));
crManager.addCR(new CR("Minar Mahamud", "BTE", "31", "-", "-", "01866-435286"));
crManager.addCR(new CR("Showrav Dhar", "BTE", "31", "A", "Eve", ""));
crManager.addCR(new CR("Tawsif Abedin Chowdhury", "BTE", "32", "-", "Eve", "01890-429173"));
crManager.addCR(new CR("Mashfiq Salam", "BTE", "33", "-", "-", "01883-569214"));
crManager.addCR(new CR("Tomisra Nur", "BTE", "33", "-", "-", ""));
crManager.addCR(new CR("Animesh Mazumder", "BTE", "34", "-", "Day", "01826-149630"));
crManager.addCR(new CR("Muhammad Sultanul Arfin", "BTE", "35", "A", "Day", "01827-586390"));
crManager.addCR(new CR("Sahanaj Akter Any", "BTE", "35", "", "Day", "01833-288575"));
crManager.addCR(new CR("Sajnin Ali Trina", "BTE", "35", "", "Eve", "01614-446994"));
crManager.addCR(new CR("Sujoy Chowdhury", "BTE", "36", "", "Day", "01853-129924"));
crManager.addCR(new CR("Arpa Debi", "BTE", "36", "", "Day", "01824-453620"));


// cse Cr's data

crManager.addCR(new CR("Joy Sarkar", "CSE", "22", "-", "-", "01817-211552"));
crManager.addCR(new CR("Miraz Hossen Ibnsina", "CSE", "23", "D", "-", "01869-568606"));
crManager.addCR(new CR("Bishwajit Aich", "CSE", "24", "A", "Day", "01850-137754"));
crManager.addCR(new CR("Md. Zillur Rahaman", "CSE", "24", "E", "-", "01861-202373"));
crManager.addCR(new CR("Shrabon Biswas", "CSE", "26", "A", "Day", "01830-325855"));
crManager.addCR(new CR("Sadman Mahfuz Rafi", "CSE", "27", "A", "Day", "01516-556513"));
crManager.addCR(new CR("Sirajul Monir", "CSE", "27", "A", "Day", "01629-028559"));
crManager.addCR(new CR("Anayet Ullah Misbha", "CSE", "27", "B", "Day", "01881-277194"));
crManager.addCR(new CR("Md Alamgir Hossain Asif", "CSE", "29", "A", "-", "01630-447382"));
crManager.addCR(new CR("Shaik Abdul Ahad", "CSE", "29", "E", "-", "01642-762700"));
crManager.addCR(new CR("Md. Jawad Hassan", "CSE", "29", "-", "-", "01973-773627"));
crManager.addCR(new CR("Umme Hafsa", "CSE", "29", "-", "-", ""));
crManager.addCR(new CR("Md Momtasir Mohtad Noman", "CSE", "30", "A", "-", "01704-615591"));
crManager.addCR(new CR("Shahidul Adham Musrur ", "CSE", "30", "A", "Eve", "01758968292"));
crManager.addCR(new CR("Md Naimul Islam Shanto", "CSE", "30", "B", "Day", "01703-639871"));
crManager.addCR(new CR("Sharmin Akter", "CSE", "30", "B", "-", ""));
crManager.addCR(new CR("Farhana Mariyan Tarannum", "CSE", "30", "A", "Day", ""));
crManager.addCR(new CR("Shahidul Adham Musrur ", "CSE", "30", "A", "Eve", "01758968282"));
crManager.addCR(new CR("Md Reza Uddin Tonmoy", "CSE", "31", "A", "Day", "01639-056199"));
crManager.addCR(new CR("Sujit Chakraborty", "CSE", "31", "B", "Day", "01997-730529"));
crManager.addCR(new CR("Subaita Ikram", "CSE", "31", "B", "Day", "-"));
crManager.addCR(new CR("Indrajith Goswami", "CSE", "31", "-", "Eve", "01643-805167"));
crManager.addCR(new CR("Joytu Nandy", "CSE", "31", "-", "Eve", "01874-440355"));
crManager.addCR(new CR("Mohammad Tasnim Hasan", "CSE", "31", "-", "-", "01568-034182"));
crManager.addCR(new CR("Rayhan", "CSE", "31", "E", "-", "01865-929228"));
crManager.addCR(new CR("Mison Deb", "CSE", "31", "-", "Eve", "01868-304068"));
crManager.addCR(new CR("Arpita Barua Pew", "CSE", "32", "A", "-", ""));
crManager.addCR(new CR("Imran Hossain", "CSE", "32", "E", "Eve", "01674-168278"));
crManager.addCR(new CR("Al Hasan", "CSE", "32", "C", "-", "01914-444847"));
crManager.addCR(new CR("Farhana Akter", "CSE", "32", "-", "-", ""));
crManager.addCR(new CR("Sawda Akter Sinthia", "CSE", "33", "A", "Day", ""));
crManager.addCR(new CR("Arpita Das", "CSE", "33", "A", "Day", ""));
crManager.addCR(new CR("Abida Siddiqua", "CSE", "33", "-", "Eve", ""));
crManager.addCR(new CR("Fares Alvi", "CSE", "33", "-", "Eve", "01640-412461"));
crManager.addCR(new CR("Md Jahedul Alam", "CSE", "33", "C", "Day", "01911-841155"));
crManager.addCR(new CR("Jannatul Jahan Ananna", "CSE", "33", "C", "Day", ""));
crManager.addCR(new CR("Hosne Ara Begum", "CSE", "33", "C", "Day", ""));
crManager.addCR(new CR("Najmul Islam", "CSE", "34", "A", "Day", "01888-729453"));
crManager.addCR(new CR("Faria Jannat", "CSE", "34", "A", "Eve", ""));
crManager.addCR(new CR("Mazharul Islam", "CSE", "34", "A1", "-", "01602-838790"));
crManager.addCR(new CR("Mijanur Rahman", "CSE", "34", "A2", "-", "01690-177204"));
crManager.addCR(new CR("Mohammad Sagor Sarkar", "CSE", "34", "B1", "-", "01767-143126"));
crManager.addCR(new CR("Afruza Akter Nisha", "CSE", "34", "B2", "-", ""));
crManager.addCR(new CR("Tyaba Akter", "CSE", "34", "", "Day", "01827-939111"));


// cen CR's data
crManager.addCR(new CR("Shorifa Akter Rupa", "CEN", "21", "E", "-", ""));
crManager.addCR(new CR("MMJ Masoud", "CEN", "21", "A", "Eve", "01727-842842"));
crManager.addCR(new CR("Nazmul Hasan", "CEN", "24", "-", "Day", "01792-272035"));
crManager.addCR(new CR("Mohammed Belal Hossen","CEN", "25", "E", "-", "01876-879800"));
crManager.addCR(new CR("Z.M Tarikul Islam Bakul","CEN", "26", "A", "-", "01843-808142"));
crManager.addCR(new CR("Md Bakhtiar Ashik","CEN", "26", "E", "-", "01852-577007"));
crManager.addCR(new CR("Showmen Chowdhury","CEN", "27", "D", "-", "01875-541415"));
crManager.addCR(new CR("Rahul","CEN", "27", "E", "-", "01987-525515"));
crManager.addCR(new CR("Sourav Barua","CEN", "28", "D", "-", "01818-212771"));
crManager.addCR(new CR("Mosharof Maruf","CEN", "29", "-", "-", "01836-259436"));
crManager.addCR(new CR("Md Solaiman Badsha","CEN", "29", "-", "Eve", "01858-824725"));
crManager.addCR(new CR("Md.Foysal Islam","CEN", "30", "E", "-", "01568-007085"));
crManager.addCR(new CR("Fardin Foisal","CEN", "30", "E", "-", "01639-000936"));
crManager.addCR(new CR("Raju Chowdhury","CEN", "31", "A", "Eve", "01605-164736"));
crManager.addCR(new CR("Ismail","CEN", "32", "A", "Day", "01867-552680"));
crManager.addCR(new CR("Mohammed Fahad Karim","CEN", "32", "-", "Eve", "01973-403361"));
crManager.addCR(new CR("Mohammad Habib Ullah","CEN", "32", "E-A", "Eve", "01644-604503"));
crManager.addCR(new CR("Sadia Akter","CEN", "34", "A", "Day", "01317-638123"));
crManager.addCR(new CR("Arnick Hossain","CEN", "34", "-", "Day", "01740-706056"));
crManager.addCR(new CR("Md Robiul Hasan Tanvir","CEN", "34", "-", "Eve", "01854-402554"));
crManager.addCR(new CR("Md. Mahbub Hasan","CEN", "34", "-", "Eve", "01647-533177"));

// eng CR's data
crManager.addCR(new CR("Md Iftekharul Alam", "ENG", "25", "-", "Day", "01859-363968"));
crManager.addCR(new CR("Sami","ENG", "26", "-", "Day", "01854-464807"));
crManager.addCR(new CR("Turna Ray","ENG", "26", "-", "Day", ""));
crManager.addCR(new CR("Md.Jabed Uddin","ENG", "27", "A", "Day", "01890-258176"));
crManager.addCR(new CR("Abdullah Akib","ENG", "27", "A", "Day", "01858-785865"));
crManager.addCR(new CR("Asif Mahamud Khan","ENG", "27", "B", "Day", "01734-319929"));
crManager.addCR(new CR("Habiba Jannat Siddiquee","ENG", "27", "B", "Day", ""));
crManager.addCR(new CR("Azhar Abir","ENG", "29", "B", "Day", "01875-600689"));
crManager.addCR(new CR("Mohammad Abdullah","ENG", "30", "A", "Day", "01609-466307"));
crManager.addCR(new CR("Ayesha Siddiqua Pihu","ENG", "30", "B", "Day", ""));
crManager.addCR(new CR("Tanvir Hosen","ENG", "30", "B", "Day", "01863-563873"));
crManager.addCR(new CR("Niloy","ENG", "31", "A", "Day", "01635-202847"));
crManager.addCR(new CR("Shatabdy das","ENG", "31", "A", "Day", ""));
crManager.addCR(new CR("Tahiyat-E-Alam","ENG", "31", "B", "Day", "01888-245858"));
crManager.addCR(new CR("Shahriar Fahmid","ENG", "32", "A", "Day", "01642-726507"));
crManager.addCR(new CR("Delwar","ENG", "32", "B", "Day", "01306-731481"));
crManager.addCR(new CR("Momo","ENG", "32", "B", "Day", ""));
crManager.addCR(new CR("Kowshik Das Dipta","ENG", "33", "A", "Day", "01827-206224"));
crManager.addCR(new CR("Mahamoda Akter Hira","ENG", "33", "A", "Day", "01791-951788"));
crManager.addCR(new CR("Minhaj Uddin","ENG", "33", "B", "Day", "01619-536127"));
crManager.addCR(new CR("Bijoy Dhar","ENG", "33", "B", "Day", "01853-326550"));
crManager.addCR(new CR("Sadiya Akter","ENG", "33", "B", "Day", ""));
crManager.addCR(new CR("Sheikh Faiyaj Uddin","ENG", "34", "A", "Day", "01401-950102"));


// eee cr's data
crManager.addCR(new CR("Saraf Mohaimen Chowdhury Nirjhor","EEE", "24", "-", "-", "01627-954008"));
crManager.addCR(new CR("Joy Paroi","EEE", "24", "-", "-", "01303-214643"));
crManager.addCR(new CR("Sana Ullah Karim","EEE", "25", "-", "Eve", "01334-234662"));
crManager.addCR(new CR("Md Mohiuddin Sikder","EEE", "25", "E", "Eve", "01857-000944"));
crManager.addCR(new CR("Moon Das","EEE", "26", "-", "Day", "01581-571125"));
crManager.addCR(new CR("Md Shohidul Islam Himel","EEE", "26", "-", "Eve", "01861-675454"));
crManager.addCR(new CR("Ajay Shil","EEE", "27", "-", "Eve", "01817-893700"));
crManager.addCR(new CR("Md Choton Gazi","EEE", "27", "A", "Eve", "01862-476254"));
crManager.addCR(new CR("Sagor Marma Uhlaching","EEE", "29", "", "Day", "01620-008198"));
crManager.addCR(new CR("Mosharraf Hossain Murad","EEE", "29", "A", "Eve", "01824-539680"));
crManager.addCR(new CR("Shrishanta Mohajan","EEE", "29", "-", "-", "01629-722427"));
crManager.addCR(new CR("Saikat Nath","EEE", "30", "A", "Day", "01576484864"));
crManager.addCR(new CR("Md.Latifur Rahman","EEE", "30", "-", "Eve", "01968-380090"));
crManager.addCR(new CR("Tanmoy Das Srabon","EEE", "31", "D", "-", "01887-658500"));
crManager.addCR(new CR("Mongsanu Marma","EEE", "31", "A", "Eve", "01628-264365"));
crManager.addCR(new CR("Abdul Kaium Chowdory","EEE", "32", "-", "-", "01873-735912"));
crManager.addCR(new CR("Abu Rafey Mohammad Mobasshir","EEE", "33", "-", "-", "01569-106880"));
crManager.addCR(new CR("Imtiaz Uddin Faisal","EEE", "33", "-", "Day", "01610-220379"));
crManager.addCR(new CR("Showab Ahmed Chowdhury","EEE", "34", "-", "Day", "01854-014852"));
crManager.addCR(new CR("Md. Lakumul Hasan Tasim","EEE", "36", "-", "Day", "01866-845100"));


// jrn CR's data
crManager.addCR(new CR("Jannatul Hosna","JRN", "24", "-", "-", ""));
crManager.addCR(new CR("Mohammad Ashraf Hossain", "JRN", "24", "-", "-", "01704-568378"));
crManager.addCR(new CR("Sahedul Islam Sakib", "JRN", "25", "-", "-", "01628-749382"));
crManager.addCR(new CR("Ariful Islam Tamim", "JRN", "27", "-", "-", "01533-140614"));
crManager.addCR(new CR("Safwat Waseqa Rahman", "JRN", "28", "-", "Day", "01625-125978"));
crManager.addCR(new CR("Safunatun Jahan", "JRN", "29", "-", "-", ""));
crManager.addCR(new CR("Shirajum Munira Tusmeha", "JRN", "31", "-", "-", ""));
crManager.addCR(new CR("Md Shoriful Bari Sanif ", "JRN", "31", "-", "-", "01824-617639"));
crManager.addCR(new CR("Momi Bhattacharjee", "JRN", "33", "-", "-", ""));
crManager.addCR(new CR("Aysha Akter", "JRN", "34", "-", "Day", ""));


// llb cr's data
crManager.addCR(new CR("Mahbub", "LLB", "20", "-", "-", "01870-742862"));
crManager.addCR(new CR("Md. Arifur Rahman Chowdhury", "LLB", "24", "-", "Day", "01869-942430"));
crManager.addCR(new CR("Mahiuddin Maruf","LLB", "25", "B", "Day", "01825-386672"));
crManager.addCR(new CR("Jahedul Islam Shawony","LLB", "26", "-", "Day", "01608-804910"));
crManager.addCR(new CR("Ashikur Rahman","LLB", "28", "-", "Day", "01602-450054"));
crManager.addCR(new CR("Israt Jahan Habiba","LLB", "28", "-", "Day", ""));
crManager.addCR(new CR("Mohammad Ridwan Uddin","LLB", "28", "-", "Day", "01865-242924"));
crManager.addCR(new CR("Tahiatul Karim Anik ","LLB", "29", "A", "Day", "01301-680894"));
crManager.addCR(new CR("Fakrul Islam","LLB", "30", "-", "Day", "01883-360000"));
crManager.addCR(new CR("Jannatul Ferdous Fatema","LLB", "30", "-", "Day", ""));
crManager.addCR(new CR("Shalah Ikram Miraz","LLB", "31", "-", "Day", "01863-115466"));
crManager.addCR(new CR("Rohan","LLB", "33", "A", "Day", "01820-412805"));
crManager.addCR(new CR("Jobaer Hasnat","LLB", "33", "B", "Day", "01621-806620"));
crManager.addCR(new CR("Nusrat Jahan","LLB", "33", "-", "Day", ""));
crManager.addCR(new CR("Tabassum Nahar Nuha","LLB", "33", "-", "Day", ""));


// mba cr's data
crManager.addCR(new CR("Md. Asik Uddin Dihan", "MBA", "27", "A", "Eve", "01741-010001"));
crManager.addCR(new CR("Nahida Tabassum", "MBA", "33", "-", "Eve", ""));
crManager.addCR(new CR("Sijratul Muntaha Jhora", "MBA", "33", "-", "Eve", ""));
crManager.addCR(new CR("Asif Mahmud Akib", "MBA", "33", "", "Eve", "01631-985008"));


// llm cr's data
crManager.addCR(new CR("Mahbub", "LLM", "20", "-", "-", "01870-742862"));