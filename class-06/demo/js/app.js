const john = {
    name: "John",
    age: 55,
    weight: getRandomWeight(),
    hair: false,
    colors: ["black", "grey"]
};

const cathy = {
    name: "Cathy",
    age: 54,
    weight: getRandomWeight(),
    hair: true,
    colors: ["yellow", "purple"]
};

function getRandomWeight() {
    // Look Up Math.random on MDN
    const max = 200;
    const min = 100;
    return Math.floor( Math.random() * (max - min + 1) + min );
}


// we can reference global variables from another script file
// if they are loaded first ...
console.log(geno);
console.log(" --------------------- ");

// const's find the section with the ID of "people"
const peopleSection = document.getElementById("root");

// // Add a child node (div or a container called "johnsArea")
const johnsArea = document.createElement("div");
johnsArea.textContent = john.name;
// Append this (put it inside) to the #root element
peopleSection.appendChild(johnsArea);

// Create a new "ul" inside of John's Area
const johnsStats = document.createElement('ul');
johnsArea.appendChild(johnsStats);

// In that UL, add 2 bulconst points, from the John Object
const johnsAge = document.createElement("li")
johnsAge.textContent = `Age: ${john.age}`;
johnsStats.appendChild(johnsAge);

const johnsWeight = document.createElement("li")
johnsWeight.textContent = `Weight: ${john.weight}`;
johnsStats.appendChild(johnsWeight);


// // Add a child node
const cathysArea = document.createElement("div");
cathysArea.textContent = cathy.name;
peopleSection.appendChild(cathysArea);

// Create a new "ul" inside of Cathy's Area
const cathysStats = document.createElement('ul');
cathysArea.appendChild(cathysStats);

// In that UL, add 2 bulconst points, from the John Object
const cathysAge = document.createElement("li")
cathysAge.textContent = `Age: ${cathy.age}`;
cathysStats.appendChild(cathysAge);

const cathysWeight = document.createElement("li")
cathysWeight.textContent = `Weight: ${cathy.weight}`;
cathysStats.appendChild(cathysWeight);