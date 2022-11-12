// SETTING THE STAGE
const player = "Per";
const opponent = "Nick";
const game = "AmazingFighter";
let points = 1222;
let hasWon = false;

// PLAYING THE GAME
points += 100;
hasWon = false;

// ANNOUNCING THE WINNER
if (hasWon) {
  console.log(`
   ${player} got ${points} points and won the ${game} game!
 `);
} else {
  console.log(`The winner is ${opponent} ! ${player} lost the game`);
}

// Go through all variables and decide if they should be let or const
// Change the console logs to use template strings instead of double quotes
