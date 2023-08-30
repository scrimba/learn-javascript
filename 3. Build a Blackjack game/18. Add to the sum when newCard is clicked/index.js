let firstCard = 10
let secondCard = 4
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

function startGame() {
    cardsEl.textContent = "Cards: " + firstCard + " " + secondCard
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}


function newCard() {
    console.log("Drawing a new card from the deck!")
    // 1. Create a card variable, and hard code its value to a number (2-11)
    
    // 2. Add the new card to the sum variable
    
    // 3. Call startGame()
}

// create an array of values
// loop through that array
// render random numbers from that array.
// render the sum of the numbers frm the array as well.

// let cardSequence [] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
// let yearSequence [] = [ 1991, 1992, 1993, 1994, 1995,1996, 1997, 1998, 1999, 2000]

// for (int i = 0; i < cardSequence.length; i++){
    //console.log(cardSequence[i]);
// 
// }
// function getRandomInt(max) {
//     return Math.floor(Math.random() * max);
//   }
  
const randomIntArrayInRange = (min, max, n = 1) =>
  Array.from(
    { length: n },
    () => Math.floor(Math.random() * (max - min + 1)) + min
  );

  randomIntArrayInRange(1, 21, 21);

  //Arrays in javascript
  // let featuredPost = [ 
//     'profile name',
//     'profile picture',
//     'interests',
//     'github profile'
//   ]

// featuredPost[0];
// featuredPost[1];
// featuredPost[2];
// featuredPost[3];

//create a new array - cards - that contains first and secondCard
let cards = [firstCard, secondCard];
cardsEl.textContent = "Cards: " + cards[0] + cards[1];

// Total race time variable
let firstRaceTime = 12
let secondRaceTime = 32

 function getTotalRaceTime(){
let sumTime = firstRace + secondRaceTime
// console.log(sumTime)
return sumTime
}

let sumRaceTime = getTotalRaceTime()
console.log(sumRaceTime)

function getRandomCard(){
    return 5;
}

// Declaration of a function,
// This implies that after declaration the function in any hierachy that one chooses the function later gets hoisted on the top of the stack or the file in this case.

// Create a function that gets a random Card

function getRandomCardX(){
    return Math.floor (Math.random() * 13) + 1;
}