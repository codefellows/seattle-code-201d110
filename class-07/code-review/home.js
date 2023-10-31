// DOM: Document OBJECT Model
// Objects:
//   Key/Value Pairs
//   properties: Nouns or "Has"
//   methods: Verbs or "Can"

// Create a store object
// NOTE: seattle.phoneNumbers[0] is "main"
// These stores can "render" themselves ... "component"
// NOTE: Both have the same render method
//       this is not very "DRY"
//       "Don't Repeat Yourself"
//       sales.js and the sales.html does this differently...

const seattle = {
  name: "Seattle",
  phoneNumbers: ["Main: 555-1212", "Fax: 555-6363"],
  render: function() {
    // Looks for any element with an id="root", i.e.
    // <section id="root">
    const rootElement = document.getElementById("root");

    // Create a new, empty section for a store
    const storeSection = document.createElement("section");
    storeSection.classList.add("location")
    rootElement.appendChild(storeSection);

    const firstTitle = document.createElement("h2");
    // Give it some content
    firstTitle.textContent = this.name;
    // Add it to the page, as a child of rootElement
    storeSection.appendChild(firstTitle);

    // Add a unordered list to show the address...
    const storeDataList = document.createElement("ul");
    storeSection.appendChild(storeDataList);

    // Put the phone numbers in the UL
    for( let i=0; i<this.phoneNumbers.length; i++ ) {
      const phoneItem = document.createElement('li');
      // Add the actual number, from the store object
      phoneItem.textContent = this.phoneNumbers[i];
      // Append that to the UL
      storeDataList.appendChild(phoneItem);
    }
  }
}

const tokyo = {
  name: "Tokyo",
  phoneNumbers: ["Main: 333-1212", "Fax: 333-6363"],
  render: function() {
    // Looks for any element with an id="root", i.e.
    // <section id="root">
    const rootElement = document.getElementById("root");

    // Create a new, empty section for a store
    const storeSection = document.createElement("section");
    rootElement.appendChild(storeSection);

    const firstTitle = document.createElement("h2");
    // Give it some content
    firstTitle.textContent = this.name;
    // Add it to the page, as a child of rootElement
    storeSection.appendChild(firstTitle);

    // Add a unordered list to show the address...
    const storeDataList = document.createElement("ul");
    storeSection.appendChild(storeDataList);

    // Put the phone numbers in the UL
    for( let i=0; i<this.phoneNumbers.length; i++ ) {
      const phoneItem = document.createElement('li');
      // Add the actual number, from the store object
      phoneItem.textContent = this.phoneNumbers[i];
      // Append that to the UL
      storeDataList.appendChild(phoneItem);
    }
  }
}


seattle.render();
tokyo.render();

