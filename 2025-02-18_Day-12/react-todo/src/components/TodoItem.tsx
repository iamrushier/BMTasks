import React, { useEffect, useState } from "react";
import { todoItemType, todoPropType } from "../types";

const TodoItem = (props: todoPropType & todoItemType) => {
  //   const [todoItemState, setTodoItemState] = useState({ ...props });
  //   useEffect(() => {
  //     console.log(todoItemState);
  //   }, [todoItemState]);
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
          props.setData(copy); //{ ...todoItemState, status: !todoItemState.status }
        }}
      />
      <span className="flex-grow-1">{props.title}</span>
      <button className="btn btn-danger">Delete</button>
    </li>
  );
};

export default TodoItem;
