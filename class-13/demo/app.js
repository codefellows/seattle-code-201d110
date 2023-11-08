const header = document.getElementById("greeting");
const input = document.getElementById("nameInput");
const form = document.getElementById("nameForm");

form.addEventListener("submit", handleSubmit);
input.addEventListener("change", handleChange);

let state = {};

function init() {

  // let name = localStorage.getItem("personsName"); // could be a name or null or undefined
  // let changes = Number(localStorage.getItem("numChanges"));

  // let state = {
  //   name: localStorage.getItem("personsName"),
  //   changes: Number(localStorage.getItem("numChanges"))
  // };

  // Initially this is undefined

  // Reads from local storage as a string
  let stateString = localStorage.getItem("state") || "";

  // Converts to an object
  state = JSON.parse(stateString);

  // Confirms
  console.log("Read the state", state);

}


function handleSubmit(e) {
  e.preventDefault();
  e.target.reset();
}

function handleChange(e) {
  state.name = e.target.value;
  ++state.changes;

  // State is an object
  // Need to convert to a string so we can save it.
  console.log(state);
  console.log(JSON.stringify(state));
  localStorage.setItem("state", JSON.stringify(state));

  // One by one (old) way
  // localStorage.setItem("personsName", state.name);
  // localStorage.setItem("numChanges", ++state.changes);
  renderGreeting();
}

function renderGreeting() {
  if(state.name) { header.textContent = `Hello, ${state.name}` }
}

// What we type in doesn't survive a re-render
// All of the JS is in "memory" only for as long as the page is open


// Wouldn't it be cool if it said Hello to us on page load?
init();
renderGreeting();
