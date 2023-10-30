
// 1. Define an object with {}
// 2. Define properties with :
//    these are called: Key/Value pairs
// 3. Methods are also "properties/keys", but the value is a function
// 4. "this" refers to the instance, from WITHIN the instance
const geno = {
    name: 'Geno',
    age: 1,
    breed: 'Pit',
    fur: {
        face: "spotted",
        tail: "white",
        body: "white",
        ears: "brown"
    },
    isGoodWithOtherDogs: true,
    isGoodWithStrangers: false,
    interests: [ "digging", "counter surfing", "chewing" ],
    speak: function() {
        console.log("WOOF!");
    },
    // this is a "setter" which changes a value
    haveBirthday: function() {
        this.age++;
        if(this.age >= 10) {
            this.fur.face = "grey";
        }
        // Save to the database that we have a new age ...
    },
};

// Display some properties
console.log("name", geno.name);
console.log("age", geno.age);
// console.log(geno.interests);
console.log("interest", geno.interests[2]);

// Invoke a method
console.log("facial fur", geno.fur.face);
geno.speak();
geno.haveBirthday();
geno.haveBirthday();
geno.haveBirthday();
console.log("facial fur", geno.fur.face);
geno.haveBirthday();
geno.haveBirthday();
geno.haveBirthday();
console.log("facial fur", geno.fur.face);
geno.haveBirthday();
geno.haveBirthday();
geno.haveBirthday();
geno.haveBirthday();
geno.haveBirthday();
console.log("age", geno.age);
console.log("facial fur", geno.fur.face);


// You should never directly change property values
// You can ... but it's not good practice
geno.name = "Fidget";
console.log(geno.name);

geno.age++;
console.log(geno.age);

// This only works within the instance. It "is" the instance
// Out here, it's got no meaning.
console.log(this.age);