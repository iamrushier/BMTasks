import "bootstrap/dist/css/bootstrap.min.css";
import TodoInput from "./components/TodoInput";
import { useEffect, useState } from "react";
import TodoContainer from "./components/TodoContainer";
import { loadFromLocalStorage, saveToLocalStorage } from "./storage";
function App() {
  const data = loadFromLocalStorage("todos");
  const [todos, setTodos] = useState(data);
  useEffect(() => {
    saveToLocalStorage("todos", todos);
  }, [todos]);
  return (
    <>
      <div className="container mt-5 w-50">
        <TodoInput data={todos} setData={setTodos} />
        <TodoContainer data={todos} setData={setTodos} />
      </div>
    </>
  );
}

export default App;
