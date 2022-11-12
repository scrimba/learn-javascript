// What are greeting and name? parameters
// What are "Howdy" and "James"? arguments
// What are num1 and num2?parameters
// What are 3 and 4?arguments

//.                parameters
function greetUser(greeting, name) {
  welcomeEl.textContent = `${greeting}, ${name} 👋`;
}

//.        arguments
let hi = "Howdy";
greetUser(hi, "James");

function add(num1, num2) {
  return num1 + num2;
}

add(3, 4);
