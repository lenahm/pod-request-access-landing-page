const form = document.getElementById('access-form');
const email = form.querySelector('input[type="email"]');
const errorMsg = document.getElementById('form-error-msg');

function showError(show) {
  errorMsg.hidden = !show;
}

form.addEventListener('submit', e => {
  e.preventDefault(); 
  const isValid = email.checkValidity();

  if (!isValid) {
    showError(true);
  } else {
    showError(false);
  }
});
