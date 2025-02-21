import { useMemo } from "react";
import { useTodos } from "./TasksContext";
import React from "react";

const CountDisplay = React.memo(() => {
  console.log("CountDisplay renders");
  const { todos } = useTodos();
  const completedTasksCount = useMemo(() => {
    return todos.filter((task) => task.status).length;
  }, [todos]);
  return (
    <div className="card p-2 flex-row justify-content-center">
      <div>Completed tasks: {completedTasksCount}</div>
    </div>
  );
});

export default CountDisplay;
