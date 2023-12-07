console.log("welcome to my todo app");

let todoDataSection = document.getElementById("todo-data");

function addTodo() {
  let rowDiv = document.createElement("div");
  let todoItem = document.createElement("div");
  let todoNumber = document.createElement("div");
  let todoDetail = document.createElement("div");
  let todoStatus = document.createElement("div");
  let todoActions = document.createElement("div");

  let deleteButton = document.createElement("button");
  let finishedButton = document.createElement("button");
  let hr = document.createElement("hr");

  todoActions.appendChild(deleteButton);
  todoActions.appendChild(finishedButton);

  todoItem.appendChild(todoNumber);
  todoItem.appendChild(todoDetail);
  todoItem.appendChild(todoStatus);
  todoItem.appendChild(todoActions);
  rowDiv.appendChild(todoItem);
  rowDiv.appendChild(hr);
}

//references for event and event listners

// let getTodosButton = document.getElementById("get-todos");
// //registration of a event listners
// getTodosButton.addEventListener("click", () => {
//   console.log("clicked");
// });
// getTodosButton.addEventListener("mouseover", handler);
// getTodosButton.addEventListener("mouseout", () => {
//   console.log("out of the button");
// });
// function handler() {
//   console.log("clicked woww");
// }
