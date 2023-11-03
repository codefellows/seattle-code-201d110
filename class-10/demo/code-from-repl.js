// Global Variables
//   elements (getElementById);
//   array of hours..


// Declare my classes and constructors and prototypes

// Declare all my functions

let saySomething = function() {
  console.log("Saying Something");
}

function showMessage() {
  console.log("I am a message");
}

// Run meaningful code
// Things down here probably need the globals, fns and classes
saySomething();


// Execution Context

const name = "John";

function globalFunction() {
  console.log("I can be run from anywhere");
}

function scopedFunction(name) {

  // This is "scoped" to the function it lives in
  // Like a "let" for this function
  function privateFunction(dogsName) {
    console.log("privateFunction", name);
    const words = "Woof";
    return `${dogsName} says woof`;
  }

  console.log("scopedFunction (name)?", name);
  // console.log("scopedFunction (words)?", words);
  // console.log("scopedFunction (dogsName)", dogsName);
  console.log(privateFunction(name));

}

scopedFunction("Geno");
// privateFunction();

// OBJECTS

const teacher = {
  name: "John",
  age: 55,
  teach: function() {
    console.log(`${name} is teaching`);
    console.log(`${this.name} is teaching`);
  },
  code: () => {
    console.log(`${this.name} is writing code`);
  }
}

teacher.teach();
teacher.code();
// console.log(age);

// const hi = function() { }
const hi = () => {
  console.log("Hi");
}
