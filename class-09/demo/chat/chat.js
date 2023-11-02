// Get the individual inputs by their ID
const person = document.getElementById("person");
const message = document.getElementById("comment");

const form = document.getElementById("chatForm");
const chats = document.getElementById("chatList");

function Chat() {
  // Application State
  this.chats = [];
  this.chatter = ""; // the person that's typing
  this.message = ""; // the thing they typed

  this.addMessage = function() {
    if( this.chatter && this.message ) {
      this.chats.push( `${this.chatter}: ${this.message}`);
    }
  }

  this.render = function() {
    // Append a new <li> to the <ul> that contains
    let latestChat = this.chats[ this.chats.length - 1];
    const message = document.createElement("li");
    chats.appendChild(message);
    message.textContent = latestChat;
  }

}

const chatApp = new Chat();

// Event Listeners take 2 arguments:
// 1st: the type of event
// 2nd: function to run in response, with an "Event" object
// Event Object
//   - "target" is what triggered the event

// Capture who the person is
person.addEventListener("change", function(event) {
  chatApp.chatter = event.target.value;
});

// Capture what the person typed
message.addEventListener("change", function(event) {
  chatApp.message = event.target.value;
});

// Render the chat into the UL

// When the form is "submitted" handle that
// Take the chat message and add it to the UL
form.addEventListener("submit", function(event) {
  event.preventDefault();
  form.reset();
  person.focus();

  // Add the message to the list
  chatApp.addMessage();

  // Render the new message
  chatApp.render();

  // Potentially ...
  // Send the raw to the server and get back raw data
  // Use that raw data to update
  console.log(chatApp);
});
