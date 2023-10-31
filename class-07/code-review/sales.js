// DOM: Document OBJECT Model
// Objects:
//   Key/Value Pairs
//   properties: Nouns or "Has"
//   methods: Verbs or "Can"

// Create a store object
// NOTE: seattle.phoneNumbers[0] is "main"
// These stores can "render" themselves ... "component"

let hours = ["6am", "7am", "8am"];

const seattle = {
  name: "Seattle",
  phoneNumbers: ["Main: 555-1212", "Fax: 555-6363"],
  minCustomersPerHour: 23,
  maxCustomersPerHour: 65,
  averageCookies: 6.3,
  estimatedSales: [],
  render: function() {
    renderStore(this);
  },
  estimate: function() {
    this.estimatedSales = estimate(this);
  }
}

const tokyo = {
  name: "Tokyo",
  phoneNumbers: ["Main: 333-1212", "Fax: 333-6363"],
  minCustomersPerHour: 3,
  maxCustomersPerHour: 24,
  averageCookies: 1.2,
  estimatedSales: [],
  render: function() {
    renderStore(this);
  },
  estimate: function() {
    this.estimatedSales = estimate(this);
  }
}


function random(min,max) {
  return Math.floor( Math.random() * (max-min+1)) + min;
}

// Based on the min/max and average
// return an array of estimated sales per hour
function estimate(store) {
  let estimatedSales = [];
  // loop over the hours array
  // for each, do the math and add that to the estimated sales
  for( let i=0; i < hours.length; i++ ) {
    const numCustomers = random( store.minCustomersPerHour, store.maxCustomersPerHour);
    const hourlySales = Math.ceil(numCustomers * store.averageCookies);
    estimatedSales.push( hourlySales );
  }
  return estimatedSales;
}

function renderStore( store ) {

  console.log("In the renderStore(), store is: ", store);

  // Looks for any element with an id="root", i.e.
  // <section id="root">
  const rootElement = document.getElementById("root");

  // Create a new, empty section for a store
  const storeSection = document.createElement("section");
  rootElement.appendChild(storeSection);

  const firstTitle = document.createElement("h2");
  // Give it some content
  firstTitle.textContent = store.name;
  // Add it to the page, as a child of rootElement
  storeSection.appendChild(firstTitle);

  // Add a unordered list to show the address...
  const storeDataList = document.createElement("ul");
  storeSection.appendChild(storeDataList);

  // Put the estimates in the UL
  let total = 0;
  for( let i=0; i < hours.length; i++ ) {
    total += store.estimatedSales[i];
    const est = document.createElement('li');
    // Add the actual number, from the store object
    est.textContent = `${hours[i]}: ${store.estimatedSales[i]}`
    // Append that to the UL
    storeDataList.appendChild(est);
  }

  const totalElement = document.createElement('li');
  totalElement.textContent = `Total: ${total}`;
  storeDataList.appendChild(totalElement);

}


// Way #1
seattle.estimate();
seattle.render();

tokyo.estimate();
tokyo.render();

// Way #2
// Make an array of stores and loop them.

// Call the render function with different objects
// let stores = [ seattle, tokyo ];

// // Loop over the stores
// for( let i=0; i < stores.length; i++ ) {
//   stores[i].estimate();
//   stores[i].render();
// }
