
function setError(fieldName, message) 
{
  const errorElement = document.getElementById(`error-${fieldName}`);
  errorElement.textContent = message;
  errorElement.style.display = "block";
}


const form = document.getElementById("registrationForm");

// Event listener for the submit event.
form.addEventListener("submit", function(event) 
{
  // Prevent the form from submitting.
  event.preventDefault();

  // Validate the form fields.
  let firstName = document.getElementById("firstName").value;
  if (firstName == "") 
  {
    setError("firstName", "First name is required.");
    return;
  }

  let lastName = document.getElementById("lastName").value;
  if (lastName == "") 
  {
    setError("lastName", "Last name is required.");
    return;
  }

  let email = document.getElementById("email").value;
  if (email == "") 
  {
    setError("email", "Email is required.");
    return;
  } 
  else if (!isEmail(email)) 
  {
    setError("email", "Invalid email address.");
    return;
  }


  let contact = document.getElementById("contact").value;
  if (contact == "") 
  {
    setError("contact", "Contact number is required.");
    return;
  } 
  else if (!isContactNumber(contact)) 
  {
    setError("contact", "Invalid contact number.");
    return;
  }

  let dob = document.getElementById("dob").value;
  if (dob == "") {
    setError("dob", "Date of birth is required.");
    return;
  }

  let age = document.getElementById("age").value;
  if (age == "") {
    setError("age", "Age is required.");
    return;
  } else if (age < 18) {
    setError("age", "You must be at least 18 years old to register.");
    return;
  }

  alert("Form successfully validated!");
  form.submit();
});

// Function for valid email address.
function isEmail(email) 
{
  return /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/.test(email);
}

// Function for valid contact number.
function isContactNumber(contact) 
{
  return /[0-9]{10}/.test(contact);
}














