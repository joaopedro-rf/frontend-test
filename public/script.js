const searchInput = document.getElementById("search");
const resultsList = document.getElementById("results");
const resultsCircle = document.getElementById("circle");

const userData = [
  { id: 1, name: "Item 1" },
  { id: 2, name: "Item 2" },
  { id: 3, name: "Item 3" },
  { id: 4, name: "Item 4" },
  { id: 5, name: "Item 5" },
  { id: 6, name: "Item 6" },
  { id: 7, name: "Item 7" },
  { id: 8, name: "Item 8" },
  { id: 9, name: "Item 9" },
  { id: 10, name: "Item 10" },
];

function renderResults(count) {
  resultsList.innerHTML = "";

  const limitedData = userData.slice(0, count);
  limitedData.forEach((item) => {
    const li = document.createElement("li");
    li.innerHTML = `<div class="circle">${item.id}</div> Name: ${item.name}`;
    resultsList.appendChild(li);
  });
}

searchInput.addEventListener("input", (event) => {
  const count = parseInt(event.target.value, 10);

  if (!isNaN(count) && count > 0) {
    renderResults(count);
  } else {
    resultsList.innerHTML = "";
  }
});

renderResults(userData);
