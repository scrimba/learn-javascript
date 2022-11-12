let fruit = ["🍎", "🍊", "🍎", "🍎", "🍊"];
let appleShelf = document.getElementById("apple-shelf");
let orangeShelf = document.getElementById("orange-shelf");
// Create a function that puts the apples onto the appleShelf
// and the oranges onto the orangeShelf. Use a for loop,
// a conditional statement, and the textContent property.

const fruitSorter = () => {
  for (let i = 0; i < fruit.length; i++) {
    fruit[i] === "🍎"
      ? (appleShelf.textContent += fruit[i])
      : (orangeShelf.textContent += fruit[i]);
  }
};
fruitSorter();
