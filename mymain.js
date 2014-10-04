function defaultFont (text, css) {
  console.log("%c" + text, "font-size: 14px; " + css);
}

function moodFont (text, css) {
  console.log("%c<--" + text + "-->", "color: #083452; font-size: 16px;");
}

function story (question, answer) {
  return prompt(question, answer);
}

function storyPrompt (question, answer) {
  return prompt(question, answer);
}

var allDecisions = [];
console.log("And so our adventure begins. It's lunchtime on a seemingly sunny day in St. Pete.");

var lunchAdventure = prompt("Are you ready to venture out for lunch?", "Yes, I'm starving!");
allDecisions.push(lunchAdventure);

console.log("You said " + lunchAdventure + " Cool, let's do this!");


var publixOrRestaurant = prompt("Do you want to run to Publix or go to a restaurant?", "Publix or Restaurant");
allDecisions.push(publixOrRestaurant);

if (publixOrRestaurant === "Publix") {
    console.log("Oh no, someone is caught stealing at Publix. The police arrive and we are mistakenly carted off to jail.");
} else {
  moodFont("It's starting to look cloudy, as we head down past Central Avenue.");
    console.log("I see a sign for a new bacon restaurant. It points down a dark alley, should we try it anyway?");

  var baconOrNot = prompt("Try the new bacon place? (Y)es or (N)o");
  allDecisions.push(baconOrNot);

  if (baconOrNot === "Y") {
      console.log("The Bacon barn ends up being a great, cheap lunch option.");
  } else {
      console.log("We end up eating fast food, that is neither fast nor good");
    }
}

moodFont("We wind our way past the homeless nappers and the shady dude to make our way to the door of the Bacon Barn.");


/*defaultFont('The key is this', 'font-size: 50px;');
defaultFont('Present some options and then ask the question');
var answer = story('Easy, right?', 'yes');
allDecisions.push(answer);


function multipleChoice() {
  console.log("Now I'm going to start using my console.log 'helper method'");
  console.log("A helper method is a small method that wraps up a bit of functionality. Making it easier to use repeatedly or more readable.");

  var bacon = story('Are you game?', 'Unsure');
  allDecisions.push(bacon);
*/
  switch (bacon ){
      case "Yes":
        defaultFont("The Bacon barn ends up being a great, cheap lunch option.");
        break;
      case "No":
        defaultFont("We end up eating fast food, that is neither fast nor good.");
        break;
      default:
        defaultFont("Decision paralysis sets in, we end up not eating at all.");
  }

}
allDecisions.forEach(function(answer) { console.log(answer); });
