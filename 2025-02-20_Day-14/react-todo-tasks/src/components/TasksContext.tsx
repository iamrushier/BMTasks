import { createContext, ReactNode, useContext, useReducer } from "react";
import { todoItemType } from "../types";
import { loadFromLocalStorage } from "../storage";
type TasksContextType = {
  todos: todoItemType[];
  dispatch: React.ActionDispatch<
    [
      action: {
        type: string;
        data: todoItemType;
      }
    ]
  >;
};
const TasksContext = createContext<TasksContextType | undefined>(undefined);
const reducer = (
  prev: todoItemType[],
  action: { type: string; data: todoItemType }
) => {
  switch (action.type) {
    case "add_new":
      return prev.concat([
        {
          title: action.data.title,
          status: action.data.status,
          id: action.data.id,
        },
      ]);
    case "delete":
      return prev.filter((item) => item.id !== action.data.id);
    case "edit":
      const currIndex = prev.findIndex((item) => item.id === action.data.id);
      const copy = structuredClone(prev);
      copy[currIndex].title = action.data.title;
      return copy;
    case "toggle_status": {
      const currIndex = prev.findIndex((item) => item.id === action.data.id);
      const copy = structuredClone(prev);
      copy[currIndex].status = !copy[currIndex].status;
      return copy;
    }
    default:
      return prev;
  }
};
export const TaskProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const data = loadFromLocalStorage("todos");

  const [todos, dispatch] = useReducer(reducer, data || []);
  return (
    <TasksContext.Provider value={{ todos, dispatch }}>
      {children}
    </TasksContext.Provider>
  );
};

export const useTodos = () => {
  const context = useContext(TasksContext);
  if (!context) throw new Error("No context found");
  return context;
};
