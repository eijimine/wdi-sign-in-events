document.addEventListener('DOMContentLoaded', function() {

var modal = document.querySelector('div.modal');
var signIn = document.querySelector('button.signin');
var closeButton = document.querySelector('button.close');
var submitButton = document.querySelector('button.submit');
var form = document.querySelectorAll('form > input');


signIn.addEventListener('click', function() {
  modal.style.display = 'block';
});

closeButton.addEventListener('click', function() {
  modal.style.display = 'none';
});

submitButton.addEventListener('click', function() {
  form.forEach(function(form) {
    form.className = 'error';
  });
});

form.forEach(function(f) {
  f.addEventListener('mouseover', function() {
    f.className = '';
  });
});

});
