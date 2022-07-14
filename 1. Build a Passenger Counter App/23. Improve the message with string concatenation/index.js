let welcomeEl = document.getElementById("welcome-el")

let myName = "Patrick Aziken"
let greeting = "Welcome back"

welcomeEl.innerText = greeting + name

// Add an emoji to the end!
// WRITE YOUR CODE BELOW HERE
// HINT: count = count + 1

function renderGreeting() {
    welcomeEl.innerText = `${greeting}, ${myName}!`;
}
renderGreeting();