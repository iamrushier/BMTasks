import { useMemo } from "react";
import { todoItemType } from "../types";

const CountDisplay = ({ data }: { data: todoItemType[] }) => {
  console.log("CountDisplay renders");
  const copmletedTasksCount = useMemo(() => {
    return data.filter((task) => task.status).length;
  }, [data]);
  return (
    <div className="card p-2 flex-row justify-content-center">
      <div>Completed tasks: {copmletedTasksCount}</div>
    </div>
  );
};

export default CountDisplay;
