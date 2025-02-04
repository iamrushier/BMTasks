document.addEventListener("DOMContentLoaded", () => {
  // Take references of required elements
  const inputTodo = document.getElementById("input-todo");
  const buttonTodo = document.getElementById("button-todo");
  const deleteAll = document.getElementById("button-delete_all");
  const ulTodo = document.getElementById("ul-todo");

  // Trach whether it is Edit mode or Create mode
  let editMode = false;
  let draggedItem = null;

  // Event listener for Add button
  buttonTodo.addEventListener("click", () => {
    const text = inputTodo.value;
    createTodo(text);
    inputTodo.value = "";
    saveAllTodo();
  });

  // Creating a list item dynamically
  const createTodo = (task, isChecked = "") => {
    const li = document.createElement("li");
    // Add styles
    li.className =
      "list-group-item d-flex justify-content-between align-items-start";
    // Render actual element
    li.draggable = true;
    //li.style.cursor = "move";
    li.innerHTML = `
    <div class="inputs">
      <input class="form-check-input me-0" type="checkbox" ${isChecked}>
      <span class="text-todo">${task}</span>
    </div>
    <div class="btn-group" role="group" aria-label="Basic mixed styles example">
      <button type="button" class="btn btn-danger">Edit</button>
      <button type="button" class="btn btn-warning">Delete</button>
    </div>`;
    li.addEventListener("dragstart", handleDragStart);
    li.addEventListener("dragend", handleDragEnd);
    li.querySelector(".form-check-input").addEventListener(
      "change",
      function () {
        saveAllTodo();
      }
    );
    ulTodo.appendChild(li);
  };

  function handleDragStart(e) {
    draggedItem = this;
    this.style.opacity = "0.5";
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setDate("text/plain", ""); // For firefox??
  }
  function handleDragEnd(e) {
    draggedItem.style.opacity = "1";
    draggedItem = null;
    saveAllTodo();
  }
  ulTodo.addEventListener("dragover", function (e) {
    e.preventDefault();
    const afterElement = getDragAfterElement(ulTodo, e.clientY);
    const draggable = draggedItem;
    if (afterElement == null) {
      ulTodo.appendChild(draggable);
    } else {
      ulTodo.insertBefore(draggable, afterElement);
    }
  });
  function getDragAfterElement(container, y) {
    const draggableElements = [
      ...container.querySelectorAll(".list-group-item:not(.dragging)"),
    ];
    return draggableElements.reduce(
      (closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = y - box.top - box.height / 2;
        if (offset < 0 && offset > closest.offset) {
          return { offset: offset, element: child };
        } else {
          return closest;
        }
      },
      { offset: Number.NEGATIVE_INFINITY }
    ).element;
  }
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

      const elementArr = ["span", "input"];
      const propertyArr = ["textContent", "value"];
      const btnTextArr = ["Edit", "Save"];

      const currentChild = li.querySelector(".text-todo"); // true:1, false:0
      const taskText = currentChild[propertyArr[Number(editMode)]];

      currentChild.remove();

      const newChild = document.createElement(elementArr[Number(!editMode)]);
      newChild[propertyArr[Number(!editMode)]] = taskText;

      newChild.classList.add("text-todo", "ms-1");

      li.querySelector(".form-check-input").insertAdjacentElement(
        "afterEnd",
        newChild
      );

      li.querySelector(".btn-danger").textContent =
        btnTextArr[Number(!editMode)];

      editMode && saveAllTodo();
      editMode = !editMode;
    }
  });

  // Save the todo items in local storage
  const saveAllTodo = () => {
    // Extract only text content for all todo list items
    const allTodos = [...document.querySelectorAll(".inputs")].map((item) => [
      item.textContent.trim(),
      item.querySelector(".form-check-input").checked ? "checked" : "",
    ]);

    // Convert to string before storing in localStorage
    localStorage.setItem("allTodos", JSON.stringify(allTodos));
  };

  // Render list item for each data in local storage
  const loadAllTodo = () => {
    // Parse into array, using shortcuit || operator
    const allTodos = JSON.parse(localStorage.getItem("allTodos")) || [];
    allTodos.forEach(([task, status]) => createTodo(task, status));
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
Requirements:
1. Alert and get confirmation before deleting item - Done
2. Button to delete all todo items - Done
3. Update element on the spot, instead of loading into Input field. - Done
4. Drag and drop to reorder - Done
*/
