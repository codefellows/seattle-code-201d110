let favoriteDog = "Rosie";

let dogGuess = prompt("What is my favorite dog's name?");
// Geno
// Normalize it ...
let normalizedDogGuess = dogGuess.toLowerCase();
// geno

console.log(dogGuess);

if( normalizedDogGuess === "rosie" ) {
  console.log("You got it, but John is sad");
  // Concatenation
  alert("You got it, " + dogGuess + " is his OG dog");
  // Template Literal
  alert(`Yes, ${dogGuess} is the one that John loves most`);
} else {
  console.log("Try again ....");
  alert("Nope!");
}
