let myLeads = [
  "ehuehuehueh",
  "hiuhuhiuhiu",
  "uiebiebiebe",
  "ehuehuehueh",
  "hiuhuhiuhiu",
  "uiebiebiebe",
  "ehuehuehueh",
  "hiuhuhiuhiu",
  "uiebiebiebe",
  "ehuehuehueh",
  "hiuhuhiuhiu",
  "uiebiebiebe",
];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const paragraphEl = document.getElementById("paragraph-el");

inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  console.log(myLeads);
});

const displayLeads = () => {
  for (let i = 0; i < myLeads.length; i++) {
    paragraphEl.textContent = myLeads + " ";
  }
  console.log(myLeads);
};
displayLeads();

// Log out the items in the myLeads array using a for loop
