let hands = ["rock", "paper", "scissor"]

// Create a function that returns a random item from the array

function randomRPS() {
    let result = hands[Math.floor(Math.random() * 3)]
    return result
}

console.log(randomRPS())
