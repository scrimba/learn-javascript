const container = document.getElementById("container");

container.innerHTML = "<button>Buy!</button>";

container.addEventListener("click", () => {
  container.innerHTML += "<p> You just bought it! </p>";
});

// When clicked, render a paragraph under the button (in the container)
// that says
