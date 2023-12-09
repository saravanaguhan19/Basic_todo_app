console.log("welcome to my todo app");

let todoDataList = document.getElementById("todo-data-list");
let saveButton = document.getElementById("save-todo");
let todoInputBar = document.getElementById("todo-input-bar");
let todos = [];
// console.log(todoDataList);
todoInputBar.addEventListener("keyup", function toggleSaveButton() {
  let todoText = todoInputBar.value;
  // console.log(todoText);
  if (todoText.length == 0) {
    if (saveButton.classList.contains("disabled")) return;
    saveButton.classList.add("disabled"); //disabled
    // console.log("aadded disable");
  } else if (saveButton.classList.contains("disabled")) {
    // console.log("removed disable");
    saveButton.classList.remove("disabled");
  }
});

saveButton.addEventListener("click", function getTextAndAddTodo() {
  let todoText = todoInputBar.value;
  if (todoText.length == 0) return;
  let todo = {
    text: todoText,
    status: "In progress",
    finishButtonText: "Finished",
  };
  todos.push(todo);
  // console.log(todos);
  addTodo(todo, todos.length);
  todoInputBar.value = "";
});

function reRenderTodos() {
  todoDataList.innerHTML = "";
  todos.forEach((element, idx) => {
    addTodo(element, idx + 1);
  });
}

function removeTodo(event) {
  // console.log(
  //   "clicked",
  //   event.target.parentElement.parentElement.parentElement
  // );
  // event.target.parentElement.parentElement.parentElement.remove();

  let deleteButtonPressed = event.target;
  let indexToBeRemoved = Number(deleteButtonPressed.getAttribute("todo-idx"));
  todos.splice(indexToBeRemoved, 1);
  reRenderTodos();
}

function finishTodo(event) {
  let finishButtonPressed = event.target;
  let indexToBeFinished = Number(finishButtonPressed.getAttribute("todo-idx"));

  //toggle functionality
  if (todos[indexToBeFinished].status == "Finished") {
    todos[indexToBeFinished].status = "In progress";
    todos[indexToBeFinished].finishButtonText = "Finished";
  } else {
    todos[indexToBeFinished].status = "Finished";
    todos[indexToBeFinished].finishButtonText = "Undo";
  }
  //To rearrange the todos with respect to status in the todos
  
  todos.sort((a, b) => {
    console.log("inside sort");
    if (a.status == "Finished") {
      return 1;
    }
    return -1;
  });

  reRenderTodos();
}

function addTodo(todo, todoCount) {
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
  deleteButton.classList.add("btn", "btn-danger", "delete-todo");
  finishedButton.classList.add("btn", "btn-success", "finish-todo");

  finishedButton.setAttribute("todo-idx", todoCount - 1);
  deleteButton.setAttribute("todo-idx", todoCount - 1);
  deleteButton.onclick = removeTodo;
  finishedButton.onclick = finishTodo;

  todoNumber.textContent = `${todoCount}.`;
  todoDetail.textContent = todo.text; //sets the todo  text sent from the input element
  todoStatus.textContent = todo.status;
  deleteButton.textContent = "Delete";
  finishedButton.textContent = todo.finishButtonText;

  todoActions.appendChild(deleteButton);
  todoActions.appendChild(finishedButton);

  todoItem.appendChild(todoNumber);
  todoItem.appendChild(todoDetail);
  todoItem.appendChild(todoStatus);
  todoItem.appendChild(todoActions);
  rowDiv.appendChild(todoItem);
  rowDiv.appendChild(hr);

  todoDataList.appendChild(rowDiv);
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
