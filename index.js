// store the count
// listen for clicks and increment count
// change the count-el


let count = 0
let addInt = document.getElementById('count-el')

function increment() {
    count += 1
    addInt.innerHTML = count
}

let prevEnt = document.getElementById('Previous-entries')

function save() {
    let countStr =' ' + count + " - "
    prevEnt.innerText += countStr
    let reset = 0
    addInt.textContent = reset
}