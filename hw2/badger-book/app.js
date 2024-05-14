document.getElementById("search-btn").addEventListener("click", handleSearch);

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
	numCreditsHTML.innerText = firstName + ' is taking ' + numCredits + 'credits an is ' + '' + 'from Wisconsin.' ;
	
	let numInterests = data[i].interests.length;
	interestsHTML.innerText = 'They have ' + numInterests + ' interests including...'

	for ( j = 0; j < numInterests; j++) {
		let interestItem = document.createElement("li");
		interestItem.innerText = data[i].interests[j];
		ulInterestsHTML.appendChild(interestItem);
	}
}

})
  .catch(error => console.error('Error fetching student data:', error));

  function buildStudents(studs) {
	// TODO This function is just a suggestion! I would suggest calling it after
	//      fetching the data or performing a search. It should populate the
	//      index.html with student data by using createElement and appendChild.
}

function handleSearch(e) {
	e?.preventDefault(); // You can ignore this; prevents the default form submission!

	//get input terms
	const searchname = document.getElementById("search-name").value;
	const searchmajor = document.getElementById("search-major").value;
	



}

