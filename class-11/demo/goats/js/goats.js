// Global Variables
// elements, and counters, and state
const goatsContainer = document.getElementById("goats");
const reportContainer = document.getElementById("report");
// querySelectorAll = list of elements
// querySelector = 1 element
const image1 = document.querySelector('#goats img:first-child');
const image2 = document.querySelector('#goats img:nth-child(2)');

const button = document.getElementById("showResults");

// variable way:
// let numClicksSoFAr = 0;
// let numClicksAllowed = 5;
// let allGoats = [];

// The global "State" of the application
let state = {
  numClicksSoFar: 0,
  numClicksAllowed: 5,
  allGoats: [],
};


// Constructor
function Goat( name, image ) {
  this.name = name;
  this.imageFile = image;
  this.votes = 0;
  this.views = 0;
  state.allGoats.push(this);
}


// Helper Functions

function renderGoats() {
  // pick 2 random goats from our array

  function pickRandomGoat() {
    return Math.floor( Math.random() * state.allGoats.length );
  }

  let goat1 = pickRandomGoat(); // 4
  let goat2 = pickRandomGoat(); // 6

  // If they are different to start with
  while( goat1 === goat2 ) {
    goat2 = pickRandomGoat();
  }

  // put the goats on screen
  // <img src="" alt="" />
  image1.src = state.allGoats[goat1].imageFile;
  image1.alt = state.allGoats[goat1].name;

  image2.src = state.allGoats[goat2].imageFile;
  image2.alt = state.allGoats[goat2].name;

  state.allGoats[goat1].views++;
  state.allGoats[goat2].views++;

}

function renderResultsButton() {
  button.style.display = "block";
}

function renderResults() {
  console.log("Showing the results");
}

function handleClick(event) {
 // Get the name from the alt tage of the image
 let goatName = event.target.alt;

 // Loop the array and find that goat, update the vote and stop
 for ( let i = 0; i < state.allGoats.length; i++ ) {
  if( goatName === state.allGoats[i].name ) {
    state.allGoats[i].votes++;
    break;
  }
 }

 state.numClicksSoFar++;

 if(state.numClicksSoFar >= state. numClicksAllowed) {
  // remove the event handler
  removeListener();
  // show the button which would let you render the results
  renderResultsButton();
 } else {
   renderGoats();
 }

}

function setupListeners() {
  // Old way = inline function
  // goatsContainer.addEventListener('click", function(event) { });

  // Better way: named callback
 goatsContainer.addEventListener("click", handleClick);
 button.addEventListener("click", renderResults)

 // Alternatively: have an event listener oneach images
 // image1.addEventListener("click", handleClick);
 // image2.addEventListener("click", handleClick);
}

function removeListener() {
 goatsContainer.removeEventListener("click", handleClick);
}

// Do I need to make these into variables????
// If not (hint), how can I do it without making them variables?
new Goat("Cruisin Goat", "images/cruisin-goat.jpg");
new Goat("Float Your Goat", "images/float-your-goat.jpg");
new Goat("Goat out of Hand", "images/goat-out-of-hand.jpg");
new Goat("Kissing Goat", "images/kissing-goat.jpg");
new Goat("Sassy!", "images/sassy-goat.jpg");
new Goat("Smiling Goat", "images/smiling-goat.jpg");
new Goat("Sweater Goat", "images/sweater-goat.jpg");

renderGoats();
setupListeners();

// debugger;
