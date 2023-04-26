const form = document.getElementById('form');
const userName = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('password2');

// Show input error message
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.classList.add('error');
  const small = formControl.querySelector('small');
  small.innerText = message;
}

//Show success outline
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.classList.add('success');
}

// Validate email
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(String(email).toLowerCase());
}

// Event listeners
form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (userName.value === '') {
    showError(userName, 'Username is requried');
  } else {
    showSuccess(userName);
  }

  if (email.value === '') {
    showError(email, 'Email is requried');
  } else if (!isValidEmail(email.value)) {
    showError(email, 'Email not valid');
  } else {
    showSuccess(email);
  }

  if (password.value === '') {
    showError(password, 'Password is requried');
  } else {
    showSuccess(password);
  }

  if (confirmPassword.value === '') {
    showError(confirmPassword, 'Confirm Password');
  } else {
    showSuccess(confirmPassword);
  }
});
