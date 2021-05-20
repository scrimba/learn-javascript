const welcomeEl = document.getElementById("welcome-el")

function greetUser(greeting, name) {
    // Rewrite the expression using template literals
    welcomeEl.textContent = greeting + ", " + name + " 👋"
}

greetUser("Howdy", "James")