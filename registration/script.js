const form = document.getElementById('form');

form.addEventListener('submit', e => {
  e.preventDefault();
})

var confirmPassword = function() {
  if (document.getElementById('password').value !=
    document.getElementById('confirm_password').value) {
    document.getElementById('confirm_message').style.display = 'inline';
  }
  else {
    document.getElementById('confirm_message').style.display = 'none';
  }
}