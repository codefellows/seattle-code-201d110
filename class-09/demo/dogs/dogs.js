let tableBody = document.getElementById("tableBody");
let tableFooter = document.getElementById("tableFoot");
let form = document.getElementById("dogform")
// Get all the inputs as an array
let inputs = document.querySelectorAll("input");


let dogs = [];
let newDogObject = {};

function Dog( name, breed, age ) {
  this.name = name;
  this.breed = breed;
  this.age = age;
}

Dog.prototype.render = function() {

  let nameCell = document.createElement("td");
      nameCell.textContent = this.name;

  let ageCell = document.createElement("td");
      ageCell.textContent = this.age;

  let breedCell = document.createElement("td");
      breedCell.textContent = this.breed;

  let row = document.createElement("tr");
  row.appendChild(nameCell);
  row.appendChild(breedCell);
  row.appendChild(ageCell);

  tableBody.appendChild(row);
}


// document.querySelectorAll gives an array/list of
// the elements that match
console.log(inputs);
for( let i = 0; i < inputs.length; i++ ) {

  inputs[i].addEventListener("change", function(event) {
    console.log(event.target.name, event.target.value);

    // object[property] = value;
    // this is a way to assign a new property when
    // the property name is a variable
    // I can't say newDog.breed
    newDogObject[event.target.name] = event.target.value;
  });

}

function renderFooterRow() {

  // Remove the contents of the <tfoot>, but not the <tfoot> itself
  tableFooter.innerHTML = '';

  let row = document.createElement("tr");
  let nameCell = document.createElement("td");
  let breedCell = document.createElement("td");
  let ageCell = document.createElement("td");

  // Should be the average of all ages
  let totalAge = 0;
  for( let i = 0; i < dogs.length; i++ ) {
    totalAge += Number(dogs[i].age);
  }

  console.log(totalAge);
  ageCell.textContent = Math.ceil(Number(totalAge / dogs.length));

  tableFooter.appendChild(row);
  tableFooter.appendChild(nameCell);
  tableFooter.appendChild(breedCell);
  tableFooter.appendChild(ageCell);
}

form.addEventListener("submit", function(event) {
  event.preventDefault();
  console.log(newDogObject);
  let dog = new Dog( newDogObject.name, newDogObject.breed, newDogObject.age );
  dogs.push(dog);
  dog.render();
  renderFooterRow();
});



let rosie = new Dog("Rosie", "Lab", 8);
let geno  = new Dog("Geno", "Pit", 1);

dogs.push(rosie);
dogs.push(geno);

for( let i = 0; i<dogs.length; i++ ) {
  dogs[i].render();
}
