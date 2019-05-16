var mode = document.querySelector('#mode');
var body = document.querySelector('body');
var pres = document.querySelectorAll('pre.highlight');

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

Array.prototype.forEach.call(pres, function(item) {
  item.addEventListener("click", function(e) {
  var feedback = document.querySelector(".feedback");
    window.getSelection().selectAllChildren(e.target);
    document.execCommand("copy");
      console.log(feedback);
    if(feedback) {
      feedback.classList.add("show");
      feedback.innerText = 'Copied!';
      setTimeout(function() {
        feedback.classList.remove("show");
      }, 2000);
    }
  });
});

var isPostPage = body.classList.contains('back');

if (isPostPage) setTimeout(() => {body.classList.add('back-effect');}, 1000);