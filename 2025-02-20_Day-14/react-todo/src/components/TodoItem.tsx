import { useEffect, useState } from "react";
import { todoItemType } from "../types";
import { useTodos } from "./TasksContext";
import React from "react";
import { saveToLocalStorage } from "../storage";

const TodoItem = React.memo((props: todoItemType) => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(props.title);
  const { todos, dispatch } = useTodos();
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
          dispatch({
            type: "toggle_status",
            data: { id: props.id },
          });
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
          dispatch({
            type: "edit",
            data: { id: props.id, title: title, status: props.status },
          });
        }}
      >
        {isEditing ? "Save" : "Edit"}
      </button>
      <button
        className="btn btn-danger"
        onClick={() => dispatch({ type: "delete", data: { id: props.id } })}
      >
        Delete
      </button>
    </li>
  );
});

export default TodoItem;
