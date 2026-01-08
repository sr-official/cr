
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


    // Array of teachers and their details
		const teachers = [
			{
					name: 'Mr. Azmat Ullah',
					designation: 'Assistant Professor',
					department: 'Department of Business Administraiton',
					institute: 'Port City Internaitonal University',
					journals: [
							{ title: 'Journal: Significance Role of TVET for Developing Country', link: 'https://zenodo.org/records/1341351' },
					],
			},
			{
					name: 'Aklima Akter',
					designation: 'Senior Lecturer',
					department: 'Department of Business Administraiton',
					institute: 'Port City Internaitonal University',
					journals: [
							{ title: 'Article: Corporate Attributes and Corporate Social Disclosures', link: 'https://www.emerald.com/insight/content/doi/10.1108/ijlma-02-2018-0023/full/html' },
							{ title: 'Article: Do capital regulations and risk-taking behavior affect bank performance? Evidence from Bangladesh', link: 'https://archive.aessweb.com/index.php/5002/article/view/1728' },
							{ title: 'Article: Corporate Governance and Corporate Social Disclosures: A Meta-Analytical Review', link: 'https://www.emerald.com/insight/content/doi/10.1108/ijaim-01-2017-0005/full/html' },
							{ title: 'Article: Financial Diagnosis Using CAMEL Model: Public versus Private Banks in Bangladesh', link: 'https://abc.us.org/ojs/index.php/ajtp/article/view/415' },
							{ title: 'Article: Job Satisfaction of the Employees of the General Insurance Companies in Bangladesh', link: 'https://i-proclaim.my/journals/index.php/gdeb/article/view/124' },
							{ title: 'Google Scholar Profile Link', link: 'https://scholar.google.com/citations?user=pmOcNhkAAAAJ&hl=en&oi=ao' },
							{ title: 'Research Gate Profile Link', link: 'https://www.researchgate.net/profile/Aklima-Akter-4' },
					],
			},
			{
					name: 'Hafsa Binta Firdaus',
					designation: 'Lecturer',
					department: 'Department of Business Administraiton',
					institute: 'Port City Internaitonal University',
					journals: [
							{ title: 'Publication: Impact of Knowledge Management on Knowledge Worker Productivity', link: 'https://www.tandfonline.com/doi/full/10.1080/14778238.2024.2380728' },
							{ title: 'Publication: An Empirical Study on the Use of Electronic Payment Systems Among Generation Z in Bangladesh. (2024)', link: 'https://icmab.gov.bd/wp-content/uploads/2024/08/An-Empirical-Study-on-the-Use-of-Electronic-Payment-Systems-among-Generation-Z-in-Bangladesh.pdf' },
							{ title: 'Publication: Exploring the Beneficial Effects of Green Knowledge Management on Corporate Sustainable Development', link: 'https://iopscience.iop.org/article/10.1088/2515-7620/ada238' },
					],
			},
			{
					name: 'Mr. Md. Rashed Khan Milon',
					designation: 'Assistant Professor',
					department: 'Department of English',
					institute: 'Port City Internaitonal University',
					journals: [
							{ title: 'Peer-reviewed Journal: Exploring Bangladeshi university students’ willingness to communicate (WTC) in English classes through a qualitative study', link: 'https://sfleducation.springeropen.com/articles/10.1186/s40862-022-00129-6' },
							{ title: 'Book Chapter: Technology Application in Tourism Event, Education and Training for Making a Nation’s Image', link: 'https://link.springer.com/chapter/10.1007/978-981-16-8070-0_9' },
					],
			},
			{
					name: 'Muhammad Ishtiaq',
					designation: 'Senior Lecturer',
					department: 'Department of English',
					institute: 'Port City Internaitonal University',
					journals: [
							{ title: 'Publication: The Portrayal of Nineteenth Century’s Byronic Hero in Don Juan', link: 'https://www.sumerianz.com/?ic=journal-home&journal=33&info=archive-detail&month=03-2022&issue=1&volume=5' },
							{ title: 'Publication: Unlocking Fluency: Task-Based Language Teaching (TBLT) in Tertiary Speaking Classes - Insights from Bangladeshi Teachers and Students', link: 'https://icrrd.com/article/365/unlocking-fluency-task-based-language-teaching-tblt-in-tertiary-speaking-classes-insights-from-bangladeshi-teachers-and-students' },
							{ title: 'Publication: Exploring Deviation and Conformity in Thomas Hardy‟s The Return of the Native. Sumerianz Journal of Education, Linguistics and Literature, 7(2)', link: 'https://www.sumerianz.com/?ic=journal-home&journal=33&info=archive-detail&month=06-2024&issue=2&volume=7' },
							{ title: 'Publication: Diasporic Narratives: Cultural Hybridity, Identity and Multiculturalism in Lahiri’s “When Mr. Pirzada Came to Dine. ICRRD Journal, 5(3)', link: 'https://icrrd.com/article/384/diasporic-narratives-cultural-hybridity-identity-and-multiculturalism-in-lahiris-when-mr-pirzada-came-to-dine' },

					],
			},
			{
				name: 'Abu Hanif',
				designation: 'Lecturer',
				department: 'Department of English',
				institute: 'Port City Internaitonal University',
				journals: [
						{ title: 'Research Gate: The Portrayal of Nineteenth Century’s Byronic Hero in Don Juan', link: 'https://www.researchgate.net/profile/Abu-Hanif-7' },

				],
		},
			{
				name: 'Manoara Begum',
				designation: 'Chairman',
				department: 'Department of Computer Science and Engineering',
				institute: 'Port City Internaitonal University',
				journals: [
						{ title: 'Publication: Analyzing Sentiments in eLearning: A Comparative Study of Bangla and Romanized Bangla Text Using Transformers', link: 'https://ieeexplore.ieee.org/document/10570454' },
						{ title: 'Publication: An improved framework for reliable cardiovascular disease prediction using hybrid ensemble learning', link: 'https://ieeexplore.ieee.org/document/10101564' },
						{ title: 'Publication: A Decision Concept to Support House Hunting', link: 'https://thesai.org/Publications/ViewPaper?Volume=13&Issue=10&Code=IJACSA&SerialNo=91' },
						{ title: 'Publication: A Decision Concept to Support House Hunting', link: 'https://thesai.org/Publications/ViewPaper?Volume=13&Issue=10&Code=IJACSA&SerialNo=91' },

				],
		},
			{
				name: 'Fariha Tahsin Chowdhury',
				designation: 'Lecturer',
				department: 'Department of Computer Science and Engineering',
				institute: 'Port City Internaitonal University',
				journals: [
						{ title: 'Publication: Soft Constraints Handling for Multi-objective Optimization', link: 'https://link.springer.com/chapter/10.1007/978-981-15-5258-8_33' },
				],
		},
			{
				name: 'Swarup Chakraborty',
				designation: 'Senior Lecturer',
				department: 'Department of Electrical and Electronic Engineering',
				institute: 'Port City Internaitonal University',
				journals: [
						{ title: 'Publication: Google Scholar Link', link: 'https://scholar.google.com/citations?user=9HzDA7sAAAAJ&hl=en' },
				],
		},
			{
				name: 'Naeem Pasha',
				designation: 'Lecturer',
				department: 'Department of Electrical and Electronic Engineering',
				institute: 'Port City Internaitonal University',
				journals: [
						{ title: 'Research & Publication: Impact of Artificial Light in Cultivation & Generate Electricity Besides Agriculture', link: 'https://ieeexplore.ieee.org/document/9198365' },
						{ title: 'Research & Publication: Performance Analysis of Novel Design and Simulation of a Microstrip Patch Antenna for Ku-Band Satellite Communications', link: 'https://ieeexplore.ieee.org/document/9392467' },
				],
		},
			{
				name: 'Mr. S.M. Rahat Rahman',
				designation: 'Senior Lecturer',
				department: 'Department of Civil Engineering',
				institute: 'Port City Internaitonal University',
				journals: [
						{ title: 'Journal: Assessment of Ambient Air Quality in Major cities of Bangladesh', link: 'https://sites.google.com/site/pjsciencea/v-6/v-6-n-5-july?fbclid=IwAR0NCCWBQOPetTI67JMkE0Ee8eQtgRQUOdPQ7WRmZQXPe5h0Sso92_ie5Pw' },
				],
		},
			{
				name: 'Israt Jahan Ruva',
				designation: 'Senior Lecturer',
				department: 'Department of Civil Engineering',
				institute: 'Port City Internaitonal University',
				journals: [
						{ title: 'Journal Article: Spatiotemporal Monitoring and Assessment of Noise Pollution in an Urban Setting', link: 'https://www.sciencedirect.com/science/article/pii/S2212095521001826?via%3Dihub' },
				],
		},
			{
				name: 'Md Abdul Aziz',
				designation: 'Lecturer',
				department: 'Department of Civil Engineering',
				institute: 'Port City Internaitonal University',
				journals: [
						{ title: 'Journal Article: Evaluation of Noise Environment and Noise Mapping with ArcGIS in Chittagong City, Bangladesh', link: 'https://www.jksee.or.kr/journal/view.php?doi=10.4491/KSEE.2021.43.4.230' },
				],
		},
			{
				name: 'Engr. Mr. Iusuf Khan',
				designation: 'Assistant Professor',
				department: 'Department of Textile Engineering',
				institute: 'Port City Internaitonal University',
				journals: [
						{ title: 'Research Gate', link: 'https://www.researchgate.net/profile/Engr-Khan-6' },
				],
		},
			{
				name: 'Md. Rezaul Karim',
				designation: 'Assistant Professor',
				department: 'Department of Textile Engineering',
				institute: 'Port City Internaitonal University',
				journals: [
						{ title: 'Research Gate', link: 'https://www.researchgate.net/profile/Md-Karim-53' },
				],
		},
			{
				name: 'Mr. Niaz Morshed Rifat',
				designation: 'Senior Lecturer',
				department: 'Department of Textile Engineering',
				institute: 'Port City Internaitonal University',
				journals: [
						{ title: 'Publication: Predicting the tensile strength of bleach washed denim garments by using fuzzy logic modeling', link: 'https://journals.sagepub.com/doi/10.1177/15589250211069602' },
						{ title: 'Research Gate', link: 'https://www.researchgate.net/profile/Niaz_Rifat' },
				],
		},
			{
				name: 'Mr. Chowdhury Md. Adib Zawad',
				designation: 'Senior Lecturer',
				department: 'Department of Textile Engineering',
				institute: 'Port City Internaitonal University',
				journals: [
						{ title: 'Research Gate', link: 'https://www.researchgate.net/profile/Chowdhury_Md_Zawad' },
				],
		},
			{
				name: 'Md. Rafiul Islam',
				designation: 'Senior Lecturer',
				department: 'Department of Textile Engineering',
				institute: 'Port City Internaitonal University',
				journals: [
						{ title: 'Research Gate', link: 'https://www.researchgate.net/profile/Rafiul_Islam4' },
				],
		},
			{
				name: 'Mr. Jahid Khan',
				designation: 'Senior Lecturer',
				department: 'Department of Textile Engineering',
				institute: 'Port City Internaitonal University',
				journals: [
						{ title: 'Website', link: 'https://sites.google.com/view/jahid-khan-txe' },
						{ title: 'Research Gate', link: 'https://www.researchgate.net/profile/Jahid-Khan' },
				],
		},
			{
				name: 'Mohammad Mehedi Hasan Rocky',
				designation: 'Assistant Professor',
				department: 'Department of Natural Science',
				institute: 'Port City Internaitonal University',
				journals: [
						{ title: 'Research Gate', link: 'https://www.researchgate.net/profile/M-Mehedi-Rocky' },
				],
		},
			{
				name: 'Md Aminul Islam',
				designation: 'Assistant Professor',
				department: 'Department of Natural Science',
				institute: 'Port City Internaitonal University',
				journals: [
						{ title: 'Publication: Unsteady Heat and Mass Transfer Slip Flow over an Exponentially Permeable Stretching Sheet', link: 'https://www.banglajol.info/index.php/JSR/article/view/55577' },
						{ title: 'Publication: Effects on Unsteady MHD Flow of a Nanofluid for Free Convection past an Inclined Plate', link: 'https://www.banglajol.info/index.php/JSR/article/view/58301' },
				],
		},
			{
				name: 'Salena Akter',
				designation: 'Assistant Professor',
				department: 'Department of Natural Science',
				institute: 'Port City Internaitonal University',
				journals: [
						{ title: 'Publication: Resonance nonlinear wave phenomena with obliqueness and fractional time evolution via the novel auxiliary ordinary differential equation method', link: 'https://link.springer.com/article/10.1007/s42452-019-0563-8' },
						{ title: 'Publication: Oblique resonance wave phenomena for nonlinearcoupled evolution equations with fractionaltemporal evolution', link: 'https://link.springer.com/article/10.1140/epjp/i2019-12832-6' },
						{ title: 'Publication: Oblique plane waves with bifurcation behaviors and chaotic motion for resonant nonlinear Schrodinger equations having fractional temporal evolution', link: 'https://www.sciencedirect.com/science/article/pii/S2211379719323472?via%3Dihub' },
						{ title: 'Publication: Oblique Traveling Wave Closed-Form Solutions to Space-Time Fractional Coupled Dispersive Long Wave Equation Through the Generalized Exponential Expansion Method', link: 'https://link.springer.com/article/10.1007/s40819-022-01339-9' },
				],
		},
			{
				name: 'Md. Abadat Hossain',
				designation: 'Assistant Professor',
				department: 'Department of Natural Science',
				institute: 'Port City Internaitonal University',
				journals: [
						{ title: 'Publication: Measurement of Absorbed Outdoor Dose Rate Due to Gamma Radiation in the Northern Part of Chittagong City Corporation', link: 'https://www.ijstr.org/research-paper-publishing.php?month=may2014' },
						{ title: 'Publication: Assessment of the activity concentrations of the naturally occurring radionuclides from the samples collected from the different (CUFL & JFL) Urea Fertilizer Company Limited', link: 'https://www.fundamentaljournals.org/index.php/ijfps/article/view/56' },
						{ title: 'Book: Assessment of Terrestrial Radionuclides the Northern Part of Chittagong City Corporation', link: 'https://www.amazon.com/Assessment-Terrestrial-Radionuclides-Chittagong-Corporation/dp/6200258147' },
				],
		},
			{
				name: 'Maksud Khan',
				designation: 'Lecturer',
				department: 'Department of Natural Science',
				institute: 'Port City Internaitonal University',
				journals: [
						{ title: 'Publication: Identification of Potent Inhibitors against Transmembrane Serine Protease 2 for Developing Therapeutics against SARS-CoV-2', link: 'https://www.tandfonline.com/doi/full/10.1080/07391102.2021.1980109' },
						{ title: 'Publication: Virtual screening, molecular dynamics and structure–activity relationship studies to identify potent approved drugs for Covid-19 treatment', link: 'https://www.tandfonline.com/doi/full/10.1080/07391102.2020.1794974' },
				],
		},
			{
				name: 'Ishmam Ibnul Arabi',
				designation: 'Lecturer',
				department: 'Department of Natural Science',
				institute: 'Port City Internaitonal University',
				journals: [
						{ title: 'Publication: Ammonium-based ionicliquids: synthesis, characterization, computational approach, molecular docking study and phytotoxicityassessment', link: 'https://www.sciencedirect.com/science/article/abs/pii/S0022286022019871?via%3Dihub' },
				],
		},
			{
				name: 'Md. Ahad Hossain',
				designation: 'Lecturer',
				department: 'Department of Natural Science',
				institute: 'Port City Internaitonal University',
				journals: [
						{ title: 'Research Article: Supriyo Saha, et al. Chemistry Select, 2024', link: 'https://chemistry-europe.onlinelibrary.wiley.com/doi/10.1002/slct.202304774' },
						{ title: 'Research Article: Current Chemistry Letters, 2023', link: 'https://www.growingscience.com/ccl/Vol13/ccl_2023_62.pdf' },
						{ title: 'Google Scholar', link: 'https://scholar.google.com/citations?hl=en&user=G1Liq3cAAAAJ&view_op=list_works&authuser=1&gmla=ALUCkoWek6frJTKiEy2Shn6-dZPafe-Lb3iRoyFYGf8pGN0JLiitf91DXAR1sEth8fGOoEVWAzt94ok9zUyzFr9H' },
				],
		},
	];

	const teacherContainer = document.getElementById('teacherContainer');

	// Function to create teacher cards
	function displayTeachers() {
			teachers.forEach((teacher, index) => {
					const teacherDiv = document.createElement('div');
					teacherDiv.className = 'teacher';

					teacherDiv.innerHTML = `
							<h3>${teacher.name}</h3>
							<div class="teacher-info">${teacher.designation}</div>
							<div class="teacher-info">${teacher.department}</div>
							<div class="teacher-info">${teacher.institute}</div>
					`;

					teacherDiv.addEventListener('click', () => displayJournals(index));
					teacherContainer.appendChild(teacherDiv);
			});
	}

	// Function to display journal links for a selected teacher
	function displayJournals(teacherIndex) {
			const selectedTeacher = teachers[teacherIndex];
			document.body.innerHTML = `
					<h1 style="text-align: center; padding: 20px;">${selectedTeacher.name}</h1>
					<div class="journal-list">
							${selectedTeacher.journals
									.map(
											(journal) => `
									<div class="journal-item">
											<a href="${journal.link}" target="_blank">${journal.title}</a>
									</div>
							`
									)
									.join('')}
					</div>
					<div style="text-align: center; margin: 20px;">
							<button onclick="location.reload()">Go Back</button>
					</div>
			`;
	}

	// Initialize the teacher display
	displayTeachers();