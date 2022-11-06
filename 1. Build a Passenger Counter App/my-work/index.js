let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let count = 0; 

function incrementButtonClick() {
    count += 1;
    countEl.textContent = count;
}

function saveButtonClick() {
    let previousEntries = count + " - ";
    saveEl.textContent += previousEntries;
    count = 0;
    countEl.textContent = count;
}
