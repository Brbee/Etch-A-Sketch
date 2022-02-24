const container = document.querySelector("#container");

for (let i = 0; i < 16; i++) {
  const row = document.createElement("div");
  row.style.display = "flex";
  row.style.justifyContent = "space-between";
  row.classList.add("row");
  container.appendChild(row);
  for (let j = 0; j < 16; j++) {
    const column = document.createElement("div");
    column.style.width = "100%";
    column.style.height = "100px";
    column.classList.add("column");
    column.addEventListener("mouseover", () => {
      column.classList.add("red");
    });
    row.appendChild(column);
  }
}

const clearButton = document.createElement("button");
clearButton.innerText = "New";
const body = document.querySelector("body");
clearButton.addEventListener("click", () => {
  const num = prompt("rows and columns?");
  const columns = document.querySelectorAll(".column");
  const rows = document.querySelectorAll(".row");
  columns.forEach((column) => {
    column.remove();
  });
  rows.forEach((row) => {
    row.remove();
  });
  for (let i = 0; i < num; i++) {
    const row = document.createElement("div");
    row.style.display = "flex";
    row.style.justifyContent = "space-between";
    row.classList.add("row");
    container.appendChild(row);
    for (let j = 0; j < num; j++) {
      const column = document.createElement("div");
      column.style.width = "100%";
      column.style.height = "100px";
      column.classList.add("column");
      column.addEventListener("mouseover", () => {
        column.classList.add("red");
      });
      row.appendChild(column);
    }
  }
});
body.insertBefore(clearButton, container);
