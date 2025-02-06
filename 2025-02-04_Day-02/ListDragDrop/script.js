const list = document.getElementById("list-container");
let draggedItem = null;

list.addEventListener("dragstart", function (e) {
  draggedItem = e.target;
  e.target.style.opacity = "0.5";
});

list.addEventListener("dragend", function (e) {
  e.target.style.opacity = "1";
  draggedItem = null;
});

list.addEventListener("dragover", (e) => e.preventDefault());

list.addEventListener("drop", function (e) {
  e.preventDefault();
  const targetItem = e.target;

  if (targetItem.tagName === "LI" && draggedItem !== targetItem) {
    let items = [...list.children];
    let draggedIndex = items.indexOf(draggedItem);
    let targetIndex = items.indexOf(targetItem);

    if (draggedIndex > targetIndex) {
      list.insertBefore(draggedItem, targetItem);
    } else {
      list.insertBefore(draggedItem, targetItem.nextSibling);
    }
  }
});
