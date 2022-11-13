const form = document.querySelector("#sign-up");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");

const persNumber = document.querySelector("#personal_number");
const mobNumber = document.querySelector("#mobile_number");
const jobDescription = document.querySelector("#job_description");





const modal = document.querySelector("#sign-in");

const closeModalBtn = document.querySelector("#sign-in .modal-close");

const usernameError = document.querySelector("#username-error");
const emailError = document.querySelector("#email-error");
const passwordError = document.querySelector("#password-error");


const persNumberError = document.querySelector("#persNumber-error");
const mobNumberError = document.querySelector("#mobNumber-error");
const descriptionError = document.querySelector("#descr-error");

console.log(persNumberError);

let isPersonalNumberValid = false;
let isMobileNumberValid = false;
let isJobDescriptionValid = false;



let isUserNameValid = false;
let isEmailValid = false;
let isPasswordValid = false;


function validateMobileNumber() {
	if (mobNumber.value.length <= 8) {
        mobNumberError.innerText = "Less than 9 symbol";

		mobNumber.classList.remove("correct");
		mobNumber.classList.add("error");
		isMobileNumberValid = false;
	} else if (mobNumber.value.length >= 10){
		mobNumberError.innerText = "More than 9 symbol";
		mobNumber.classList.add("error");
		mobNumber.classList.remove("correct");
		isMobileNumberValid = false;
	} else {
        mobNumber.classList.add("correct");
		mobNumber.classList.remove("error");
        mobNumberError.innerText = "";

		isMobileNumberValid = true;
	} 

	return isMobileNumberValid;

    
}

function validatePersonalNumber() {
	if (persNumber.value.length >= 12) {
        persNumberError.innerText = "More than 11 symbol";

		persNumber.classList.remove("correct");
		persNumber.classList.add("error");
		isPersonalNumberValid = false;
	} else if (persNumber.value.length <= 10){
		persNumberError.innerText = "Less than 11 symbol";
		persNumber.classList.add("error");
		persNumber.classList.remove("correct");
		isPersonalNumberValid = false;
	} else {
        persNumber.classList.add("correct");
		persNumber.classList.remove("error");
        persNumberError.innerText = "";

		isPersonalNumberValid = true;
	} 

	return isPersonalNumberValid;

    
}






function validateUserName() {
	if (!username.validity.valid) {
		username.classList.remove("correct");
		username.classList.add("error");
		isJobDescriptionValid.innerText = "empty";
		isJobDescriptionValid = false;
	} else {
		username.classList.remove("error");
		username.classList.add("correct");
		usernameError.innerText = "";
		isJobDescriptionValid = true;
	}

	return isJobDescriptionValid;
}

function validateUserEmail() {
	if (!email.validity.valid) {
		// console.log("not valid");
		email.classList.remove("correct");
		email.classList.add("error");

		if (email.validity.typeMismatch) {
			emailError.innerText = "not valid format";
		} else {
			emailError.innerText = "empty";
		}
		isEmailValid = false;
	} else {
		email.classList.add("correct");
		email.classList.remove("error");
		emailError.innerText = "";
		isEmailValid = true;
	}

	return isEmailValid;
}

function validatePassword() {
	if (password.value.length < 5) {
		passwordError.innerText = "only 5 char";
		password.classList.remove("correct");
		password.classList.add("error");
		isPasswordValid = false;
	} else if (password.value.length >= 5 && password.value.length < 10) {
		passwordError.innerText = "less than 10";
		password.classList.add("correct");
		password.classList.remove("error");
		isPasswordValid = true;
	} else {
		// console.log("> 10");
		passwordError.innerText = "> 10";
		isPasswordValid = true;
	}

	return isPasswordValid;
}

form.addEventListener("submit", (e) => {
	e.preventDefault();
	// console.log(username.validity, email.validity, password.value);

	const isValidName = validateUserName();
	const isValidEmail = validateUserEmail();
	const isValidPassword = validatePassword();
    const isValidPersNumber = validatePersonalNumber();
    const isValidMobNumber = validateMobileNumber();

	if (isValidName && isValidEmail && isValidPassword && isValidPersNumber && isValidMobNumber) {
		console.log("submit form");


		modal.classList.add("open"); 
		showSelectedModal("#sign-in");

		form.reset();
	}
});

username.addEventListener("input", validateUserName);
email.addEventListener("input", validateUserEmail);
password.addEventListener("input", validatePassword);