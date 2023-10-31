let isGoodWithTitles = ["People", "Dogs", "Cats"];

// Define a class called "Dog" using a constructor function
function Dog( name, breed, isGoodWithPeople, isGoodWithDogs, isGoodWithCats ) {
  this.name = name;
  this.breed = breed;
  this.isGoodWith = [ isGoodWithPeople, isGoodWithDogs, isGoodWithCats ];
}

// Prototype method of the Dog Constructor
// All instances can call it natively and "this" is in context
Dog.prototype.walk = function() {
  console.log(`${this.name} is Jogging`);
}

Dog.prototype.render = function() {

  /*
  This used to draw the whole table ....
  But we don't need that, because we declared it in the markup

   let rootElement = document.getElementById("root");
   let dogContainer = document.createElement("section");
   dogContainer.classList.add('dog');
   rootElement.appendChild(dogContainer);

   let nameElement = document.createElement("h2");
   nameElement.textContent = this.name;
   dogContainer.appendChild(nameElement)

   let table = document.createElement("table");

   let header = document.createElement("thead")
   let headerRow = document.createElement("tr");
   header.appendChild(headerRow);

   headerName = document.createElement('th');
   headerName.textContent = "Name";
   headerRow.appendChild(headerName);

   headerBreed = document.createElement('th');
   headerBreed.textContent = "Breed";
   headerRow.appendChild(headerBreed);

  For each of the "is good with", and a header cell
   for( let i = 0; i < isGoodWithTitles.length; i++ ) {
    let cell = document.createElement("th");
    cell.textContent = isGoodWithTitles[i];
    headerRow.appendChild(cell);
   }
   let body = document.createElement("tbody");

  dogContainer.appendChild(table);
  table.appendChild(header);
  table.appendChild(body);
  table.appendChild(footer);
  */

   let body = document.getElementById("dogs");
   let dogRow = document.createElement('tr');
   body.appendChild(dogRow);

   let nameCell = document.createElement('td');
   nameCell.textContent = this.name;
   dogRow.appendChild(nameCell);

   let breedCell = document.createElement('td');
   breedCell.textContent = this.breed;
   dogRow.appendChild(breedCell);

   for( let i = 0; i < this.isGoodWith.length; i++ ) {
    let cell = document.createElement("td");
    cell.textContent = this.isGoodWith[i].toString();
    dogRow.appendChild(cell);
   }

}

let geno = new Dog("Geno", "Pit Bull", false, false, false);
let rosie = new Dog("Rosie", "Lab", true, true, false);

let state = {
  dogs: [geno, rosie]
}

geno.render();
rosie.render();

// try rendering from that array instead of 1 by 1

// How do I do the totals across the <tfoot> ???
