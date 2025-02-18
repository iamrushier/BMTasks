import { useState } from "react";
import { todoPropType } from "../types";

const TodoInput = ({ data, setData }: todoPropType) => {
  const [title, setTitle] = useState("");
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
            setData(
              data.concat([{ title: title, status: false, id: Date.now() }])
            );
            setTitle("");
          }}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default TodoInput;
