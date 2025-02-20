import { useEffect, useState } from "react";
import { todoItemType } from "../types";
import { useTodos } from "./TasksContext";
import React from "react";
import { saveToLocalStorage } from "../storage";

const TodoItem = React.memo((props: todoItemType) => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(props.title);
  const { todos, setTodos } = useTodos();
  console.log("TodoItem renders", title);

  useEffect(() => {
    saveToLocalStorage("todos", todos);
  }, [todos]);
  return (
    <li className="list-group-item d-flex align-items-center" key={props.id}>
      <input
        type="checkbox"
        className="form-check-input me-3"
        checked={props.status}
        onChange={() => {
          const currIndex = todos.findIndex((item) => item.id === props.id);
          const copy = structuredClone(todos);
          copy[currIndex].status = !copy[currIndex].status;
          setTodos(copy);
        }}
      />
      <span className="flex-grow-1 align-items-center">
        {!isEditing ? (
          title
        ) : (
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          ></input>
        )}
      </span>
      <button
        className="btn btn-warning"
        onClick={() => {
          setIsEditing(!isEditing);
          const currIndex = todos.findIndex((item) => item.id === props.id);
          const copy = structuredClone(todos);
          copy[currIndex].title = title;
          setTodos(copy);
        }}
      >
        {isEditing ? "Save" : "Edit"}
      </button>
      <button
        className="btn btn-danger"
        onClick={() => {
          const filteredData = todos.filter((item) => item.id !== props.id);
          setTodos(filteredData);
        }}
      >
        Delete
      </button>
    </li>
  );
});

export default TodoItem;
