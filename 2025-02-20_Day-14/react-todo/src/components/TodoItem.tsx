import { useCallback, useState } from "react";
import { todoItemType, todoPropType } from "../types";

const TodoItem = (props: todoPropType & todoItemType) => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(props.title);
  console.log("TodoItem renders", title);
  return (
    <li className="list-group-item d-flex align-items-center" key={props.id}>
      <input
        type="checkbox"
        className="form-check-input me-3"
        checked={props.status}
        onChange={useCallback(() => {
          const currIndex = props.data.findIndex(
            (item) => item.id === props.id
          );
          const copy = structuredClone(props.data);
          copy[currIndex].status = !copy[currIndex].status;
          props.setData(copy);
        }, [props.data, props.setData])}
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
        onClick={useCallback(() => {
          setIsEditing(!isEditing);
          const currIndex = props.data.findIndex(
            (item) => item.id === props.id
          );
          const copy = structuredClone(props.data);
          copy[currIndex].title = title;
          props.setData(copy);
        }, [isEditing, props.data, setIsEditing, props.setData])}
      >
        {isEditing ? "Save" : "Edit"}
      </button>
      <button
        className="btn btn-danger"
        onClick={useCallback(() => {
          const filteredData = props.data.filter(
            (item) => item.id !== props.id
          );
          props.setData(filteredData);
        }, [props.data, props.setData])}
      >
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
