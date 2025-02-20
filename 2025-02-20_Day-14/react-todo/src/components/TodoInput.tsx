import { useState } from "react";
import { useTodos } from "./TasksContext";
import React from "react";
const TodoInput = React.memo(() => {
  console.log("TodoInput renders");
  const [title, setTitle] = useState("");
  const { setTodos } = useTodos();
  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Enter todo title"
        value={title}
        onChange={(e) => setTitle(e.target.value || "")}
      />
      <div className="input-group-append">
        <button
          className="btn btn-outline-secondary"
          onClick={() => {
            setTodos((prevTodos) =>
              prevTodos.concat([
                { title: title, status: false, id: Date.now() },
              ])
            );
            setTitle("");
          }}
        >
          Add
        </button>
      </div>
    </div>
  );
});

export default TodoInput;
