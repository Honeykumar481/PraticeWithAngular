const ei = document.querySelector("#reason");
const ea = document.querySelector("#amount");
const cancel = document.querySelector("#clear");
const add = document.querySelector("#add");
const List = document.querySelector("#ListShow");
const totalExpense = document.querySelector("#total");
let expense = 0;
const clear = () => {
  ei.value = "";
  ea.value = "";
};

add.addEventListener("click", () => {
  const reason = ei.value;
  const amount = ea.value;
  const item = document.createElement("ion-item");
  item.textContent = reason + ": $" + amount;
  List.appendChild(item);
  expense += +amount;
  totalExpense.textContent = expense;
  clear();
});
cancel.addEventListener("click", clear);
