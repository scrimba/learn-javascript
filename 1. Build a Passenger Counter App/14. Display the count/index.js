// document.getElementById("count").innerText = 5

// change the count-el in the HTML to reflect the new count

let count = 0

function increment() {
    count++
    console.log(count)
    document.getElementById("count-el").innerText = count
}


