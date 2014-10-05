function defaultFont (text, css) {
  console.log("%c" + text, "font-size: 14px; " + css);
}

function moodFont (text, css) {
  console.log("%c<--" + text + "-->", "color: #083452; font-size: 16px;");
}

function gameOverFont (text, css) {
  console.log("%c<--" + text + "-->", "color: red; font-size: 20px;");
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
var umbrella = prompt("Should we take an umbrella? (Y)es or (N)o", "Y or N");

if (umbrella === "Y") {
    console.log("It remains sunny outside, hope we don't lose the umbrella");

} else {
  moodFont("It's starting to look cloudy, as we head down the street.");
    console.log("It's starting to rain, we should make a decision, fast.");
}

var publixOrRestaurant = prompt("Do you want to run to Publix or go to a restaurant?", "Publix or Restaurant");
allDecisions.push(publixOrRestaurant);

if (publixOrRestaurant === "Publix") {
    console.log("Oh no, someone is caught stealing at Publix. The police arrive and we are mistakenly carted off to jail.");
    gameOverFont("Game Over");
} else {
  moodFont("Things start looking shady as we get past Central.");
    console.log("I see a sign for a new bacon restaurant. It points down a dark alley, should we try it anyway?");
}

var baconOrNot = prompt("Try the new bacon place? (Y)es or (N)o");
allDecisions.push(baconOrNot);

if (baconOrNot === "Y") {
    moodFont("We wind our way past the homeless nappers and the shady dude to make our way to the door of the Bacon Barn.");
    console.log("The Bacon barn ends up being a great, cheap lunch option.");
    gameOverFont("We win!");
} else {
    console.log("We end up eating fast food, that gives us a stomach ache.");
    gameOverFont("Half a day of class work lost, we lose.");
  }

allDecisions.forEach(function(answer) { console.log("These were the decisions made " + answer); 
});
