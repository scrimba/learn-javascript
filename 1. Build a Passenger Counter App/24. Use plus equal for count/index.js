let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    // Change this to use the plus equal technique you've learned
    count = count + 1
    countEl.innerText = count
}

function save() {
    console.log(count)
}


