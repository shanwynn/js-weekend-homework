/* I print to the console and I'm much easier to type than console.log,
    if you add css to me I'll format your message that way.

    p('I can not believe that you said that');

    or

    p('I am yelling so loud right now!', 'color: red; font-size: 40px;');

    */
function p (text, css) {
  console.log("%c" + text, "font-size: 14px; " + css);
}

/* I also print to the console, but I come prestyled. This is great for
     writing ambient text about what is going on in the story.

    info('You are standing in a dark hallway. Haunted by object literals and arrays.');

    */
function info (text) {
  console.log("%c---" + text + "---", "color: gray; font-size: 15px;");
}

/* I don't do anything other than wrap the function 'prompt' in the name ask. Ask is much
    nicer than prompt

    var yourAnswer = ask('What is your answer?', 'none');
    */
function ask (question, defaultAnswer) {
  return prompt(question, defaultAnswer);
}


/*

  THIS IS WHERE THE STORY BEGINS

  this is not the most elegant way of doing a choose your own adventure.
  The prompt will come up first when you start and you'll need to click through
  them to open the console log to start reading the text.

  This will not be the prettiest code ever. :()
*/

var allTheAnswers = [];
console.log('How to build a text adventure with console.log() and prompt()');

var continueResponse = prompt('Do you want to continue?', 'of course!');
allTheAnswers.push(continueResponse);

console.log('You said "' + continueResponse + '". Do you really feel that way?');

var upOrDown = prompt("Do you want to go (UP)stairs or (DOWN)stairs?", "DOWN");
allTheAnswers.push(upOrDown);

if (upOrDown === "UP") {
    console.log("Going up!");
    usingHelpers();
} else {
    console.log("Going down!");
    usingHelpers();
}

info('Its important to always set the mood in an interactive story');
info('It was a dark and stormy night... when the loops began.');

p('The key is this', 'font-size: 50px;');
p('Present some options and then ask the question');
var answer = ask('Easy, right?', 'yes');
allTheAnswers.push(answer);

p('Then store the answer. For instance, you just told me ' + 'answer');
p('Using .push() add the answer to your array for keeping track of answers');



function usingHelpers() {
  console.log("Now I'm going to start using my console.log 'helper method'");
  console.log("A helper method is a small method that wraps up a bit of functionality. Making it easier to use repeatedly or more readable.");

  var doesMakeSense = ask('Does that make sense?', 'Yep');
  allTheAnswers.push(doesMakeSense);

  switch (doesMakeSense ){
      case "Yep":
        p("Okay, I'm glad that makes sense.");
        break;
      case "No":
        p("No? Well, ask me about it more tomorrow.");
        break;
      default:
        p("I'm going to have to take that as a maybe...");
  }

}

allTheAnswers.forEach(function(answer) { console.log(answer); });
