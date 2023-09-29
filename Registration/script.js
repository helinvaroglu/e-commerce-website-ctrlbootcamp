const form = document.getElementById('form');

form.addEventListener('submit', e => {
  e.preventDefault();
})

var confirmPassword = function() {
  if (document.getElementById('password').value !=
    document.getElementById('confirmPassword').value) {
    document.getElementById('confirmMessage').style.display = 'inline';
  }
  else {
    document.getElementById('confirmMessage').style.display = 'none';
  }
}