const welcomeEl = document.getElementById("welcome-el");

// Give the function a parameter, greeting, that replaces "Welcome back"
function greetUser(x) {
  welcomeEl.textContent = x + ", Per Harald Borgen 👋";
}

greetUser("sup");
