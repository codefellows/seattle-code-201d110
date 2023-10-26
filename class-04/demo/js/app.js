/*
    Way #1 to get the dishes put away

    Zach: Open the envelope and do the things....
    Envelope "Empty the Dishwasher" ..
    Inside were these instructions: 
    1. Open the dishwasher.
    2. Pull out the top rack.
    3. Put the mugs in the top shelf of the cupboard.
    4. Put the glasses in the bottom shelf of the cupboard.
    4. Put the long utensils in the canister.
    5. ....
    27. Put the butter knives in the left side of the drawer
    28. Close dishwasher.

    Way #2 to get the dishes put away

    1. Zach: TO DO: Empty the Dishwasher
*/

// Greet the visitor
function greeting() {
  let name = prompt("WHat is your name?");
  alert( `Welcome back, ${name}!`);
}


// Checks if their answer was right
function wasAnswerRight(correctAnswer, answerGiven) {
    if( answerGiven === correctAnswer ) { return true; }
    else { return false; }
}


function checkMyFavoriteColor() { 
  let myFavoriteColors = ['black', 'grey', 'bone'];
  let colorGuess = prompt("Guess one of my favorite colors");
  colorGuess = colorGuess.toLowerCase();
  if( myFavoriteColors.includes(colorGuess) ) { return true; }
  return false;
}

function guessMyFavoriteColor() { 
  let correctColorGuess = false;
  while( ! correctColorGuess ) {
    correctColorGuess = checkMyFavoriteColor();
  }
  return correctColorGuess;
}



// Invoke the functions
// greeting();
const goodOrBad = guessMyFavoriteColor();
alert("Nice Job");


// function isNewspaperOutside() {
//     if( it is there ) { return true; }
//     return false;
// }

// function isSomethingThere( something, where ) {
//     if( something is there ) { return true; }
//     return false;
// }

// let newsPaperWasDelivered = isSomethingThere("newspaper", "driveway");
// let paperTowels = isSomethingThere("paper towels", "garage cabinet");
