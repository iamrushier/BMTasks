import { useState } from "react";
import { todoItemType, todoPropType } from "../types";

const TodoItem = (props: todoPropType & todoItemType) => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(props.title);
  return (
    <li className="list-group-item d-flex align-items-center" key={props.id}>
      <input
        type="checkbox"
        className="form-check-input me-3"
        checked={props.status}
        onChange={() => {
          const currIndex = props.data.findIndex(
            (item) => item.id === props.id
          );
          const copy = structuredClone(props.data);
          copy[currIndex].status = !copy[currIndex].status;
          props.setData(copy);
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
          const currIndex = props.data.findIndex(
            (item) => item.id === props.id
          );
          const copy = structuredClone(props.data);
          copy[currIndex].title = title;
          props.setData(copy);
        }}
      >
        {isEditing ? "Save" : "Edit"}
      </button>
      <button
        className="btn btn-danger"
        onClick={() => {
          const filteredData = props.data.filter(
            (item) => item.id !== props.id
          );
          props.setData(filteredData);
        }}
      >
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
