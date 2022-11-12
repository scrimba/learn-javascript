const welcomeEl = document.getElementById("welcome-el");

function greetUser(greeting, name, emoji) {
  // Rewrite the expression using template literals
  welcomeEl.textContent = `${greeting}, ${name} ${emoji}`;
}

greetUser("Howdy", "James", "🖕");
