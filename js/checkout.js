
// Exercise 6
function validate() {
	var error = 0;
	// Get the input fields
	var fName = document.getElementById("fName").value;
	var fEmail = document.getElementById("fEmail");
	var fPhone = document.getElementById("fPhone").value;
	let fPassword  = document.getElementById("fPassword").value


	// Get the error elements
	var errorName = document.getElementById("errorName");
	var errorEmail = document.getElementById("errorEmail"); 
	let errorPhone = document.getElementById("errorPhone");
	let errorPassword = document.getElementById("errorPassword");
	
	// Validate fields entered by the user: name, phone, password, and email
if (fName.length > 3) { // l86 en html
		console.log("fName.length: ", fName.length);
		errorName.style.display = "none";
		//error++;
	}
	else {
		errorName.style.display = "block";
		error++;
	}

	
	if(fEmail.value == ""){
		errorEmail.style.display = "block";
		error++;
	}
	else {
		errorEmail.style.display = "none";
		}

	if(fPhone.length > 3){
		errorPhone.style.display = "none";
	}
	else {
		errorPhone.style.display = "block";
		error++;
	}

	if(fPassword.length > 3){
		errorPassword.style.display = "none";
	}
	else {		
		errorPassword.style.display = "block";
		error++;
	}
	if(error>0){
		console.log("Error");
		
	}else{
		alert("OK");
	}

}
