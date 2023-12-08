console.log("welcome to my todo app");

let todoDataSection = document.getElementById("todo-data");

function addTodo(todoData) {
  let rowDiv = document.createElement("div");
  let todoItem = document.createElement("div");
  let todoNumber = document.createElement("div");
  let todoDetail = document.createElement("div");
  let todoStatus = document.createElement("div");
  let todoActions = document.createElement("div");

  let deleteButton = document.createElement("button");
  let finishedButton = document.createElement("button");
  let hr = document.createElement("hr");
  /*
  <div class="row">
                    <div class="todo-item d-flex flex-row justify-content-between align-items-center ">
                        <div class="todo-no">1.</div>
                        <div class="todo-detail text-muted">Complete the action inside the todo items</div>
                        <div class="todo-status text-muted">In Progress</div>
                        <div class="todo-actions d-flex flex-row justify-content-start gap-2">
                            <button class="btn btn-danger ">Delete</button>
                            <button class="btn btn-success ">Finished</button>
                        </div>
                    </div>
                    <hr>
                </div>
                */
  //adding classes
  rowDiv.classList.add("row");
  todoItem.classList.add(
    "todo-item",
    "d-flex",
    "flex-row",
    "justify-content-between",
    "align-items-center"
  );
  todoNumber.classList.add("todo-no");
  todoDetail.classList.add("todo-detail", "text-muted");
  todoStatus.classList.add("todo-status", "text-muted");
  todoActions.classList.add(
    "todo-actions",
    "d-flex",
    "flex-row",
    "justify-content-start",
    "gap-2"
  );
  deleteButton.classList.add("btn", "btn-danger");
  finishedButton.classList.add("btn", "btn-success");

  todoNumber.textContent = "1.";
  todoDetail.textContent = todoData; //sets the todo  text sent from the input element
  todoStatus.textContent = "In progress";
  deleteButton.textContent = "Delete";
  finishedButton.textContent = "Finished";

  todoActions.appendChild(deleteButton);
  todoActions.appendChild(finishedButton);

  todoItem.appendChild(todoNumber);
  todoItem.appendChild(todoDetail);
  todoItem.appendChild(todoStatus);
  todoItem.appendChild(todoActions);
  rowDiv.appendChild(todoItem);
  rowDiv.appendChild(hr);

  todoDataSection.appendChild(rowDiv);
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
