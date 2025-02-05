document.addEventListener("DOMContentLoaded", () => {
  // Take references of required elements
  const inputTodo = document.getElementById("input-todo");
  const buttonTodo = document.getElementById("button-todo");
  const deleteAll = document.getElementById("button-delete_all");
  const ulTodo = document.getElementById("ul-todo");
  const toast = document.getElementById("toast");

  function showToast(message) {
    toast.style.visibility = "visible";
    toast.style.opacity = "1";
    toast.textContent = message;
    setTimeout(() => {
      toast.style.opacity = "0";
      toast.style.visibility = "hidden";
      toast.innerHTML = "";
    }, 2000);
  }

  let editMode = false;

  function getFromAPI() {
    // ulTodo.innerHTML="";
    axios
      .get("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then((res) => {
        for (const item of res.data) {
          createTodo(item.id, item.title, item.checked ? "checked" : "");
        }
        showToast("ToDo items retrieved\n(GET request)");
      })
      .catch((e) => console.log("Error:", e.message));
  }
  getFromAPI();

  // Event listener for Add button
  buttonTodo.addEventListener("click", () => {
    const text = inputTodo.value;
    if (text === "") return;
    axios
      .post("https://jsonplaceholder.typicode.com/todos?_limit=5", {
        title: text,
        checked: false,
      })
      .then((res) => {
        createTodo(
          res.data.id,
          res.data.title,
          res.data.checked ? "checked" : ""
        );
        showToast("New ToDo item created!\n(POST request)");
      })
      .catch((e) => console.log("Error:", e.message));
    inputTodo.value = "";
  });

  const createTodo = (id, task, isChecked = "") => {
    const li = document.createElement("li");
    li.className =
      "list-group-item d-flex justify-content-between align-items-start";
    li.id = id;
    li.innerHTML = `
    <div class="inputs">
      <input class="form-check-input me-0" type="checkbox" ${isChecked}>
      <span class="text-todo">${task}</span>
    </div>
    <div class="btn-group" role="group" aria-label="Basic mixed styles example">
      <button type="button" class="btn btn-danger">Edit</button>
      <button type="button" class="btn btn-warning">Delete</button>
    </div>`;
    li.querySelector(".form-check-input").addEventListener(
      "change",
      function (e) {
        axios
          .patch(`https://jsonplaceholder.typicode.com/todos/${li.id}`, {
            completed: e.target.checked,
          })
          .then(() => {
            showToast(`Todo item checked/unchecked!\n(PATCH)`);
          })
          .catch((e) => console.log("Error:", e.message));
      }
    );
    ulTodo.appendChild(li);
  };

  ulTodo.addEventListener("click", (e) => {
    // Action if it is "Delete" button
    if (e.target.classList.contains("btn-warning")) {
      const confirms = confirm("Delete this item?");
      if (confirms) {
        const item = e.target.closest(".list-group-item");
        axios
          .delete(`https://jsonplaceholder.typicode.com/todos/${item.id}`)
          .then(() => {
            item.remove(); // Traversing DOM for parent
            showToast("ToDo item deleted!(DELETE)");
          })
          .catch((e) => console.log("Error:", e.message));
      }
    }
    // Action for Edit button
    if (e.target.classList.contains("btn-danger")) {
      const li = e.target.closest(".list-group-item"); // Get the li parent
      const currentChild = li.querySelector(".text-todo");
      const taskText = currentChild[!editMode ? "textContent" : "value"];
      if (taskText === "") return;
      currentChild.remove();
      const newChild = document.createElement(!editMode ? "input" : "span");
      newChild[!editMode ? "value" : "textContent"] = taskText;
      newChild.classList.add("text-todo", "ms-1");
      if (editMode) {
        axios
          .put(`https://jsonplaceholder.typicode.com/todos/${li.id}`, {
            title: taskText,
            completed: li.querySelector(".form-check-input").checked,
          })
          .then((res) => {
            li.querySelector(".form-check-input").insertAdjacentElement(
              "afterEnd",
              newChild
            );
            li.querySelector(".btn-danger").textContent = "Edit";
            editMode = false;
            showToast(`ToDo item replaced!(PUT)`);
          })
          .catch((e) => console.log("Error:", e.message));
      } else {
        li.querySelector(".form-check-input").insertAdjacentElement(
          "afterEnd",
          newChild
        );
        li.querySelector(".btn-danger").textContent = "Save";
        editMode = true;
      }
    }
  });

  deleteAll.addEventListener("click", () => {
    const confirms = confirm("Delete all items?");
    if (confirms) {
      axios
        .delete("https://jsonplaceholder.typicode.com/todos/*")
        .then(() => {
          ulTodo.innerHTML = "";
          showToast("All ToDo items deleted!(DELETE/*)");
        })
        .catch((e) => console.log("Error:", e.message));
    }
  });
});
