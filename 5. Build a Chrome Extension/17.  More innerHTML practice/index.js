const container = document.getElementById("container");
const container2 = document.getElementById("container2");

container.innerHTML = "<button>Buy!</button>";

container.addEventListener("click", () => {
  container2.innerHTML = "<p> You just bought it! </p>";
});

// When clicked, render a paragraph under the button (in the container)
// that says
