let hands = ["rock", "paper", "scissor"];

// Create a function that returns a random item from the array

const getRamdomItem = () => {
  let ramdomItem = Math.floor(Math.random() * 3);
  console.log(hands[ramdomItem]);
};
getRamdomItem();
