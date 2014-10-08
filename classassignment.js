var questions = [
    'What is your age?',
    'What is your location?',
    'What is your favorite coffee?',
    'What is your favorite book?'
];

var q = 0
var looping = true;

while (looping) {
  if (q > questions.length -1) {
    q = 0;
  }
  var answer = prompt(questions[q]);

  if (answer === '') {
    looping = false;
  }
  q += 1;
}

alert("Thanks for taking the survey!");
