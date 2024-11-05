/*
    Name: Nefeli Koumpouli  
    File: assignment2.js
    Date Created: 2024-10-17
    Date Updated: 2024-10-20
    Purpose: MIS 7375 Homework 2...  Learning JavaScript.
    Version: 2.0
    */



// Set the min and max date values
const currentDate = new Date();
const maxDateValue = currentDate.toISOString().split('T')[0];
const minDateValue = new Date(currentDate.setFullYear(currentDate.getFullYear() - 120)).toISOString().split('T')[0];

document.getElementById('dob').setAttribute('min', minDateValue);
document.getElementById('dob').setAttribute('max', maxDateValue);

// Validate form
document.getElementById("form").addEventListener("submit", function(event) {
  // Prevent the default form submission
  event.preventDefault();
});

// Validate birthdate
function validateBirthdate() {
  const birthdateInput = document.getElementById('dob');
  const birthdateMessage = document.getElementById('error');
  const enteredDate = new Date(birthdateInput.value);
  
  birthdateMessage.textContent = '';

  if (enteredDate > currentDate) {
    birthdateMessage.textContent = 'Birthdate cannot be in the future.';
  } else if (enteredDate < new Date(minDateValue)) {
    birthdateMessage.textContent = 'Birthdate cannot be more than 120 years ago.';
  }
}


// Validate date function
function validateDate() {
  const dobInput = document.getElementById('dob');
  const dobMessage = document.getElementById('dobMessage');
  
  const enteredDate = new Date(dobInput.value);
  

  dobMessage.textContent = '';

  // Check if the entered date is valid
  if (enteredDate > today) {
    dobMessage.textContent = 'Date of birth cannot be in the future.';
  } else if (enteredDate < new Date(minDate)) {
    dobMessage.textContent = 'Date of birth cannot be more than 120 years ago.';
  }
}



/*/ Validate on form submission (i dont think thats better)
function submitForm() {
  validateDate(); 

  const dobMessage = document.getElementById('dobMessage');
  if (!dobMessage.textContent) {
    alert('Form submitted successfully!');
     dobInput.value = '';
  }
}
  */


// assignment2.js
function updateValue(value) {
  document.getElementById('demo').innerText = value;
}

//username
function validateUsername() {
  const usernameInput = document.getElementById('username');
  const regex = /^[A-Za-z][A-Za-z0-9-_]{4,29}$/;

  if (!regex.test(usernameInput.value)) {
    
    usernameInput.setCustomValidity('Invalid username format. Use letters, numbers, underscores, or dashes. No spaces.');
  } else {
    
    usernameInput.setCustomValidity('');
  }
}

//change case to username
function submitUsername() {
  const usernameInput = document.getElementById('username');
  const output = document.getElementById('output');

  // Get the value, convert to lowercase, and display
  const correctedUsername = usernameInput.value.toLowerCase();
  output.textContent = `Corrected Username: ${correctedUsername}`;

  usernameInput.value = '';
}

//today's date
const errorElement = document.getElementById('error');
document.getElementById("today").innerHTML = new Date().toLocaleDateString();

function validatePasswords() {
  const passwordInput = document.getElementById('password');
  const repasswordInput = document.getElementById('repassword');
  const messageElement = document.getElementById('passwordMessage');

}
 
// Check if passwords match
function submitPasswords() {
  const passwordInput = document.getElementById('password');
  const repasswordInput = document.getElementById('repassword');
  const messageElement = document.getElementById('passwordMessage');

  const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,30}$/;

  messageElement.textContent = '';

  if (passwordInput.value !== repasswordInput.value) {
    messageElement.textContent = 'Passwords do not match. Please try again.';
} else if (!passwordRegex.test(passwordInput.value)) {
    messageElement.textContent = 'Passwords must be at least 8 characters and no more than 30 characters long and contain at least 1 upper case letter, 1 number, and 1 special character.';
}  else {
  alert('Password successfully submitted!');
  
  passwordInput.value = '';
  repasswordInput.value = '';
  messageElement.textContent = '';
}
}

function reviewFunction() {
  const username = document.getElementById('username').value;
  const dob = document.getElementById('dob').value;
  const password = document.getElementById('password').value;
  const repassword = document.getElementById('repassword').value;

  const reviewMessage = `
                Username: ${username}
                Date of Birth: ${dob}
                Password: ${password}
                Re-entered Password: ${repassword}`;

  alert('Review your information: If no info then it needs info\n' + reviewMessage);
}

//Message after validation

function validateFirstName() {
  const firstNameInput = document.getElementById('firstName');
  const firstNameMessage = document.getElementById('firstNameMessage');
  const regex = /^[A-Za-z]{1,30}$/;

  firstNameMessage.textContent = '';

  if (!regex.test(firstNameInput.value)) {
    firstNameMessage.textContent = 'Error';
    firstNameMessage.style.color = 'red'; 
  } else {
    firstNameMessage.textContent = 'Pass'; 
    firstNameMessage.style.color = 'green'; 
  }
}

function validateLastName() {
  const lastNameInput = document.getElementById('lastName');
  const lastNameMessage = document.getElementById('lastNameMessage');
  const regex = /^[A-Za-z]{1,30}$/; 

  lastNameMessage.textContent = '';

  if (!regex.test(lastNameInput.value)) {
    lastNameMessage.textContent = 'Error';
    lastNameMessage.style.color = 'red'; 
  } else {
    lastNameMessage.textContent = 'Pass'; 
    lastNameMessage.style.color = 'green'; 
  }
}

function validateEmail() {
  const emailInput = document.getElementById('email');
  const emailMessage = document.getElementById('emailMessage');
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 


  emailMessage.textContent = '';

  if (!regex.test(emailInput.value)) {
      emailMessage.textContent = 'Error';
      emailMessage.style.color = 'red'; 
  } else {
      emailMessage.textContent = 'Pass';
      emailMessage.style.color = 'green'; 
  }
}

function validatePhone() {
  const phoneInput = document.getElementById('phone');
  const phoneMessage = document.getElementById('phoneMessage');
  const regex = /^\+?[1-9]\d{1,14}$'-'/; 

 
  phoneMessage.textContent = '';

  if (!regex.test(phoneInput.value)) {
      phoneMessage.textContent = 'Error';
      phoneMessage.style.color = 'red'; 
  } else {
      phoneMessage.textContent = 'Pass'; 
      phoneMessage.style.color = 'green';
  }
}