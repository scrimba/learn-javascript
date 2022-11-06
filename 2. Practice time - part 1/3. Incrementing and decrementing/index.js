let myPoints = 3

// Create two functions, add3Points() and remove1Point(), and have them
// add/remove points to/from the myPoints variable

function add3Points() {
    myPoints += 3;
}

function remove1Point() {
    myPoints -= 1;
}

for (i = 0; i < 3; i++) {
    add3Points()
}

for (x = 0; x < 2; x++) {
    remove1Point()
}

// Call the functions to that the line below logs out 10
console.log(myPoints)