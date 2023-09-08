
let countEl = document.getElementById("count-el");

let count=0;

let prevCounts = "Previous entries: ";


function increment(){
    count++;
    countEl.innerText = count;

}

function save(){
    console.log(count)
    prevCounts = prevCounts + count + " - "

    document.getElementById("save-el").innerHTML = prevCounts;

}