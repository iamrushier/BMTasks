import { createContext, ReactNode, useContext, useState } from "react";
import { IAdminContextType } from "../types";

const adminCreds = { username: "admin", password: "admin" };

const AdminContext = createContext<IAdminContextType | undefined>(undefined);

export const AdminProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const verifyAdminLogin = (uname: string, passwd: string) => {
    if (adminCreds.username === uname && adminCreds.password === passwd) {
      setIsAuthorizedAdmin(true);
      return true;
    }
    return false;
  };
  const [isAuthorizedAdmin, setIsAuthorizedAdmin] = useState(false);
  return (
    <AdminContext.Provider value={{ isAuthorizedAdmin, verifyAdminLogin }}>
      {children}
    </AdminContext.Provider>
  );
};

export const useAuthorizeAdmin = () => {
  const context = useContext(AdminContext);
  if (!context) throw new Error("No Admin context");
  return context;
};
