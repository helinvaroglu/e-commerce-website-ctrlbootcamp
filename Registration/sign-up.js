const form = document.getElementById('form');
const password = document.getElementById('password');
const confirm_password = document.getElementById('confirm_password');
const confirm_message = document.getElementById('confirm_message');

function confirmPassword() {
  if (password != null && confirm_password != null) {
    if (password.value !=
      confirm_password.value) {
      confirm_message.style.display = 'inline';
    }
    else {
      confirm_message.style.display = 'none';
    }
  }
}
form.addEventListener('submit', function(e) {
  alert("User Created")
})