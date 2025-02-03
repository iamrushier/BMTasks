document.addEventListener("DOMContentLoaded", () => {
  // Take references of required elements
  const inputTodo = document.getElementById("input-todo");
  const buttonTodo = document.getElementById("button-todo");
  const deleteAll = document.getElementById("button-delete_all");
  const ulTodo = document.getElementById("ul-todo");

  // Trach whether it is Edit mode or Create mode
  let editMode = false;
  let editElement = null;

  // Event listener for Add button
  buttonTodo.addEventListener("click", () => {
    const text = inputTodo.value;
    // if (editMode) {
    //   // In case editing existing item
    //   editElement.querySelector(".text-todo").textContent = text;
    //   editMode = false;
    //   editElement = null;
    //   buttonTodo.textContent = "Add";
    // } else {
    createTodo(text);
    // }
    inputTodo.value = "";
    saveAllTodo();
  });

  // Creating a list item dynamically
  const createTodo = (task) => {
    const li = document.createElement("li");
    // Add styles
    li.className =
      "list-group-item d-flex justify-content-between align-items-start";
    // Render actual element
    li.innerHTML = `<span class="text-todo">${task}</span>
    <div class="btn-group" role="group" aria-label="Basic mixed styles example">
      <button type="button" class="btn btn-danger">Edit</button>
      <button type="button" class="btn btn-warning">Delete</button>
    </div>`;

    ulTodo.appendChild(li);
  };

  // Bubbling of events: events are bubbled up to the parent element
  // So event listener added to parent
  ulTodo.addEventListener("click", (e) => {
    // Action if it is "Delete" button
    if (e.target.classList.contains("btn-warning")) {
      // Confirmation before deleting
      const confirms = confirm("Delete this item?");
      if (confirms) {
        e.target.closest(".list-group-item").remove(); // Traversing DOM for parent
        saveAllTodo();
      }
    }
    // Action if it is "Edit" button
    if (e.target.classList.contains("btn-danger")) {
      const li = e.target.closest(".list-group-item"); // Get the li parent
      if (!editMode) {
        const taskText = li.querySelector(".text-todo").textContent; // Get current ToDo
        li.querySelector("span").remove();
        const ip = document.createElement("input");
        // ip.classList.add(".text-todo");
        ip.innerHTML = `<input type='text'>`;
        ip.value = taskText;
        li.prepend(ip);
        li.querySelector(".btn-danger").textContent = "Save";
      } else {
        const taskText = li.querySelector("input").value; // Get current ToDo
        li.querySelector("input").remove();
        const span = document.createElement("span");
        span.classList.add("text-todo");
        span.textContent = taskText;
        li.prepend(span);
        console.log(taskText);
        li.querySelector(".btn-danger").textContent = "Edit";
        editMode = false;
        saveAllTodo();
      }
      editMode = !editMode;
    }
  });

  // Save the todo items in local storage
  const saveAllTodo = () => {
    // Extract only text content for all todo list items
    const allTodos = [...document.querySelectorAll(".text-todo")].map(
      (task) => task.textContent
    );
    // Convert to string before storing in localStorage
    localStorage.setItem("allTodos", JSON.stringify(allTodos));
  };

  // Render list item for each data in local storage
  const loadAllTodo = () => {
    // Parse into array, using shortcuit || operator
    const allTodos = JSON.parse(localStorage.getItem("allTodos")) || [];
    allTodos.forEach((task) => createTodo(task));
  };

  loadAllTodo(); // Exccuted the first time code loads

  deleteAll.addEventListener("click", () => {
    const confirms = confirm("Delete all items?");
    if (confirms) {
      ulTodo.innerHTML = "";
      saveAllTodo();
      loadAllTodo();
    }
  });
});

/* 
Requiremenst:
1. Alert and get confirmation before deleting item - Done
2. Button to delete all todo items - Done
3. Update element on the spot, instead of loading into Input field.
*/
