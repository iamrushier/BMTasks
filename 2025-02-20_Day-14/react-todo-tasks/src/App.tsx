import "bootstrap/dist/css/bootstrap.min.css";
import TodoInput from "./components/TodoInput";
import TodoContainer from "./components/TodoContainer";
import { TaskProvider } from "./components/TasksContext";
import CountDisplay from "./components/CountDisplay";
const App = () => {
  console.log("App renders");
  return (
    <>
      <h1 className="text-center mt-3">React Todo Tasks</h1>
      <hr />
      <div className="container mt-3 w-50">
        <TaskProvider>
          <TodoInput />
          <CountDisplay />
          <TodoContainer />
        </TaskProvider>
      </div>
    </>
  );
};

export default App;
