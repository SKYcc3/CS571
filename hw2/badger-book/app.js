document.getElementById("search-btn").addEventListener("click", handleSearch);


//step 6
	const interestItemAnchorHTML = document.getElementsByClassName("container-fluid")[0];
	
	interestItemAnchorHTML.addEventListener("click", (e) => {
		const selectedText = e.target.innerText;
		searchbar = document.getElementById("search-interest");
		button = document.getElementById("search-btn");
		
		searchbar.value = selectedText;
		button.click();
})

fetch("https://cs571.org/api/s24/hw2/students", {
	headers: {
		"X-CS571-ID": CS571.getBadgerId()
	}
})
  .then(response => response.json())
  .then(data => {
	//step1
	console.log(data);
	
	//step2
	const num = data.length;
	const numStudentElement = document.getElementById('num-results');

	if (numStudentElement) {
		numStudentElement.innerText = num.toString();
	} else {
		console.error('Element with id num-results not found.');
	}

	//step3
	buildStudents(data);
})
  .catch(error => console.error('Error fetching student data:', error));

  
  function buildStudents(data) {
	// TODO This function is just a suggestion! I would suggest calling it after
	//      fetching the data or performing a search. It should populate the
	//      index.html with student data by using createElement and appendChild.
	for (let i = 0; i < data.length; i++) {
		
		const row = document.getElementById("students")
	
		let divHTML = document.createElement('div');
		row.appendChild(divHTML);
		divHTML.className = "col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3";
		
		let nameHTML = document.createElement('h2');
		let majorHTML = document.createElement('h5');
		let numCreditsHTML = document.createElement('p');
		let interestsHTML = document.createElement('p');
		let ulInterestsHTML = document.createElement('ul');
	
		let brHTML = document.createElement('br');
	
		divHTML.appendChild(nameHTML);
		divHTML.appendChild(majorHTML);
		divHTML.appendChild(numCreditsHTML);
		divHTML.appendChild(interestsHTML);
		divHTML.appendChild(ulInterestsHTML);
		
	
		divHTML.appendChild(brHTML);
	
		//get data
		let firstName = data[i].name.first;
		let lastName = data[i].name.last; 
		nameHTML.innerText = firstName + ' ' + lastName;
	
		majorHTML.innerText = data[i].major;
	
		let numCredits = data[i].numCredits;
		numCreditsHTML.innerText = firstName + ' is taking ' + numCredits + ' credits an is ' + '' + 'from Wisconsin.' ;
		
		let numInterests = data[i].interests.length;
		interestsHTML.innerText = 'They have ' + numInterests + ' interests including...'
	
		for ( j = 0; j < numInterests; j++) {
			//for step6
			let interestItemAnchorHTML = document.createElement('a');
			interestItemAnchorHTML.className = "interestItem";

			let interestItem = document.createElement("li");
			interestItemAnchorHTML.innerText = data[i].interests[j];

			interestItem.appendChild(interestItemAnchorHTML);
			ulInterestsHTML.appendChild(interestItem);
		}
	}
	
}

function handleSearch(e) {
	e?.preventDefault(); // You can ignore this; prevents the default form submission!

	//get input terms
	const name = document.getElementById("search-name").value.trim().toLowerCase();
	const major = document.getElementById("search-major").value.trim().toLowerCase();
	const interest = document.getElementById("search-interest").value.trim().toLowerCase();

	//perform match
	fetch("https://cs571.org/api/s24/hw2/students", {
	headers: {
		"X-CS571-ID": CS571.getBadgerId()	
	}
})
  .then(response => response.json())
  .then(data => {
	const matchStudents = data.filter(s => {
	const fullName =  `${s.name.first} ${s.name.last}`.toLowerCase();

	const nameMatch = name ? fullName.includes(name) : true; 
	const majorMatch = major ? s.major.toLowerCase().includes(major) : true;
	const interestMatch = interest ? s.interests.some(int => int.toLowerCase().includes(interest)) : true;
	return nameMatch && majorMatch && interestMatch;
	})

	// Clear previous results  
	document.getElementById('students').innerHTML = ''; 

	buildStudents(matchStudents); 

	//Update num of result
	const num = matchStudents.length;
	const numStudentElement = document.getElementById('num-results');

	if (numStudentElement) {
		numStudentElement.innerText = num.toString();
	} else {
		console.error('Element with id num-results not found.');
	}
});

}

