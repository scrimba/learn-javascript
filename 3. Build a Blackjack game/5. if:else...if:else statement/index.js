// Check if the person is elegible for a birthday card from the King! (100)

let age = 100

// if less than 100    -> "Not elegible"
// else if exactly 100 -> "Here is your birthday card from the King!"
// else                -> "Not elegible, you have already gotten one"

if (age < 100) {
    console.log("Not eligible.");
} else if (age === 100) {
    console.log("Here is your birthday card from the King!");
} else {
    console.log("Not elegible, you've already gotten one.");
}