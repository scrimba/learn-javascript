let firstCard = 10
let secondCard = 7
let sum = firstCard + secondCard + 8 // 26

if (sum < 21) {
    console.log("Do you want to draw a new card?");
} else if (sum === 21) {
    console.log("Woohoo! You've got blackjack!");
} else {
    console.log("You're out of the game!");
}