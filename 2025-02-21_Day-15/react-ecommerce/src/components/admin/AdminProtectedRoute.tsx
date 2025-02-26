import { useAuthorizeAdmin } from "../../contexts/AdminContext";
import { Navigate, Outlet } from "react-router-dom";

const AdminProtectedRoute = () => {
  const { isAuthorizedAdmin } = useAuthorizeAdmin();
  return <>{isAuthorizedAdmin ? <Outlet /> : <Navigate to="/admin/login" />}</>;
};

export default AdminProtectedRoute;
