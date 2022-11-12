let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");

// Get the leads from the localStorage
// Log out the variable

// HINTS:
// localStorage.setItem(key, value)
// localStorage.getItem(key)
// localStorage.clear()
// PS: both key and value need to be strings

inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  inputEl.value = "";
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  renderLeads();

  // To verify that it works:
  console.log(localStorage.getItem("myLeads"));
});
let leadsFromLocalStorage = localStorage.getItem(JSON.parse("myLeads"));

// Store it in a variable, leadsFromLocalStorage
console.log(leadsFromLocalStorage);

function renderLeads() {
  let listItems = "";
  for (let i = 0; i < myLeads.length; i++) {
    listItems += `
            <li>
                <a target='_blank' href='${myLeads[i]}'>
                    ${myLeads[i]}
                </a>
            </li>
        `;
  }
  ulEl.innerHTML = listItems;
}
