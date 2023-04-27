// ! Global vars
const form = document.getElementById('form');
const userName = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('password2');

// ! Show input error message
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.classList.add('error');
  const small = formControl.querySelector('small');
  small.innerText = message;
}

// ! Show success outline
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.classList.add('success');
}

// ! Check required field
function checkRequired(inputArr) {
  inputArr.forEach((input) => {
    if (input.value.trim() === '') {
      showError(input, `${input.id} is requried`);
    } else {
      showSuccess(input);
    }
  });
}

// ! Check length
function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(
      input,
      `${getFieldName(input)} must be atleast ${min} characters.`
    );
  } else if (input.value.length > max) {
    showError(
      input,
      `${getFieldName(input)} must be less than ${max} characters.`
    );
  } else {
    showSuccess(input);
  }
}

// ! Get fieldname
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// ! Ensure passwords match
function passwordMatch(input1, input2) {
  if (input1 === input2) {
    showSuccess(input1);
    showSuccess(input2);
  } else {
    showError(input1, `Ensure passwords match`);
    showError(input2, `Ensure passwords match`);
  }
}

// ! Check if validate email
function checkEmail(input) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailRegex.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, `Email is not valid`);
  }
}

// ! Event listeners
form.addEventListener('submit', (e) => {
  e.preventDefault();

  checkRequired([userName, email, password, confirmPassword]);
  checkLength(userName, 3, 15);
  checkLength(password, 6, 25);
  checkEmail(email);
  passwordMatch(password, confirmPassword);
});
