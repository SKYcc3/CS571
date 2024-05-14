function submitApplication(e) {
    e.preventDefault(); // You can ignore this; prevents the default form submission!
    
    document.getElementsByClassName("primary-button");
        let radios = document.getElementsByName('job');
        let jobSelected = false;
        let selectedJob = '';
        for(let i = 0; i < radios.length; i++){
            if(radios[i].checked) {
                jobSelected = true;
                selectedJob = radios[i].value;
                break;
            }
        }
        if (jobSelected) {  
            alert("Thank you for applying to be a " + selectedJob + "!");  
        } else {  
            alert("Please select a job!"); 
        }
        
    // TODO: Alert the user of the job that they applied for!
}