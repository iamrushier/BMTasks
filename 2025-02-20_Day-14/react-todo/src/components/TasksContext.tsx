import { createContext, ReactNode, useContext, useState } from "react";
import { todoItemType } from "../types";
import { loadFromLocalStorage } from "../storage";
type TasksContextType = {
  todos: todoItemType[];
  setTodos: React.Dispatch<React.SetStateAction<todoItemType[]>>;
};
const TasksContext = createContext<TasksContextType | undefined>(undefined);

export const TaskProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const data = loadFromLocalStorage("todos");
  const [todos, setTodos] = useState<todoItemType[]>(data || []);
  return (
    <TasksContext.Provider value={{ todos, setTodos }}>
      {children}
    </TasksContext.Provider>
  );
};

export const useTodos = () => {
  const context = useContext(TasksContext);
  if (!context) throw new Error("No context found");
  return context;
};
