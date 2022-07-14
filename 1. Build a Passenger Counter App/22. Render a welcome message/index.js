// Grab the welcome-el paragraph and store it in a variable called welcomeEl

// Create two variables (name & greeting) that contains your name
// and the greeting we want to render on the page

// Render the welcome message using welcomeEl.innerText
let welcomeEl = document.getElementById("welcome-el");

let myName = "Patrick Aziken"
let greeting = "Welcome to the JavaScript class"

function renderWelcomeMessage() {
    welcomeEl.innerText = `${greeting} ${myName}!`;
}
renderWelcomeMessage();