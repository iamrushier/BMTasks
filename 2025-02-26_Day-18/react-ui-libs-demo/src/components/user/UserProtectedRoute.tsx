import { Navigate, Outlet } from "react-router-dom";
import { useUserContext } from "../../contexts/UserContext";

const UserProtectedRoute = () => {
  const { loggedInUser } = useUserContext();
  return <>{loggedInUser.id ? <Outlet /> : <Navigate to="/login" />}</>;
};

export default UserProtectedRoute;
