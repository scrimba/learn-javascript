let fruit = ["apple", "orange", "apple", "apple", "orange"]
let appleShelf = document.getElementById("apple-shelf")
let orangeShelf = document.getElementById("orange-shelf")

// Create a function that puts the apples onto the appleShelf
// and the oranges onto the orangeShelf. Use a for loop,
// a conditional statement, and the textContent property.

function sortFruit() {

    for (i = 0; i < fruit.length; i++) {
        if (fruit[i] === "apple") {
            appleShelf.textContent += fruit[i] + " "
            console.log(appleShelf.textContent)
        } else if (fruit[i] === "orange") {
            orangeShelf.textContent += fruit[i] + " "
            console.log(orangeShelf.textContent)
        }
    }
}

sortFruit()

// video paused on 4:33:57