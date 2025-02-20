import TodoItem from "./TodoItem";
import CountDisplay from "./CountDisplay";
import { saveToLocalStorage } from "../storage";
import { useTodos } from "./TasksContext";
import { useEffect } from "react";
import React from "react";
const TodoContainer = React.memo(() => {
  console.log("TodoContainer renders");
  const { todos } = useTodos();
  useEffect(() => {
    saveToLocalStorage("todos", todos);
  }, [todos]);
  return (
    <>
      <CountDisplay />
      <div className="card mt-4">
        <ul className="list-group ">
          {todos.map((item) => {
            return (
              <TodoItem
                key={item.id}
                title={item.title}
                id={item.id}
                status={item.status}
              />
            );
          })}
        </ul>
      </div>
    </>
  );
});

export default TodoContainer;
