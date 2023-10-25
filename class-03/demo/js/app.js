console.log("Hello World");

let dogs = ["Rosie", "Geno", "Rocky"];

let gotItRight = false;

while( ! gotItRight ) {
  let guess = prompt("What is the name of a dog of mine?");
  if( dogs.includes( guess ) ) {
    alert("Right!");
    gotItRight = true;
  }
}

// Let them try 4
for( let i = 1; i < 5; i++ ) {

   let guess = prompt("How old am I?");
   // guess = "55"
   guess = Number(guess);
   if( guess === 55 ) {
    alert("Right!");
    break;
   }

}
