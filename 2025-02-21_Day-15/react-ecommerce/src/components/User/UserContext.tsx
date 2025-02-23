import { createContext, ReactNode, useContext, useReducer } from "react";
import { IUserCreds } from "../../types";
export type UserContextType = {
  loggedInUser: IUserCreds;
  dispatch: React.ActionDispatch<[action: { type: string; data: IUserCreds }]>;
};

const initialCreds: IUserCreds = {
  id: "",
  username: "",
  password: "",
};

const UserContext = createContext<UserContextType | undefined>(undefined);

const reducer = (
  prev: IUserCreds,
  action: { type: string; data: IUserCreds }
) => {
  switch (action.type) {
    case "add_uname_password":
      return {
        ...prev,
        username: action.data.username,
        password: action.data.password,
      };
    case "add_id":
      return { ...prev, id: action.data.id };
    case "logout":
      return { id: "", username: "", password: "" };
  }
  return prev;
};

export const UserContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [loggedInUser, dispatch] = useReducer(reducer, initialCreds);
  return (
    <UserContext.Provider value={{ loggedInUser, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) throw new Error("No context found");
  return context;
};
