var mode = document.querySelector('#mode');
var body = document.querySelector('body');

if (typeof Storage === 'undefined') {
  mode.style.display = 'none';
}

var lightMode = window.localStorage.getItem('mode') === 'light';

if (lightMode) {
  body.classList.add('light');
} else {
  body.classList.remove('light');
}

mode.addEventListener('click', function() {
  var light = body.classList.contains('light');
  var newVal = '';

  if (!light) {
    body.classList.add('light');
    newVal = 'light';
  } else {
    body.classList.remove('light');
    newVal = 'dark';
  }
  window.localStorage.setItem('mode', newVal);
});

var isPostPage = body.classList.contains('back');

if (isPostPage) setTimeout(() => {body.classList.add('back-effect');}, 1000);