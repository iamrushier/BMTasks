import { useCallback, useState } from "react";
import { useTodos } from "./TasksContext";
import React from "react";
const TodoInput = () => {
  console.log("TodoInput renders");
  const [title, setTitle] = useState("");
  const { dispatch } = useTodos();

  const addTask = useCallback(() => {
    dispatch({
      type: "add_new",
      data: { title: title, id: Date.now(), status: false },
    });
    setTitle("");
  }, [title, dispatch]);

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
        <button className="btn btn-outline-secondary" onClick={() => addTask()}>
          Add
        </button>
      </div>
    </div>
  );
};

export default React.memo(TodoInput);
