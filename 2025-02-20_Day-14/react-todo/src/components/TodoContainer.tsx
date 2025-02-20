import TodoItem from "./TodoItem";
import { todoPropType } from "../types";
import CountDisplay from "./CountDisplay";
const TodoContainer = ({ data, setData }: todoPropType) => {
  console.log("TodoContainer renders");
  return (
    <>
      <CountDisplay data={data} />
      <div className="card mt-4">
        <ul className="list-group ">
          {data.map((item) => {
            return (
              <TodoItem
                key={item.id}
                title={item.title}
                id={item.id}
                status={item.status}
                data={data}
                setData={setData}
              />
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default TodoContainer;
