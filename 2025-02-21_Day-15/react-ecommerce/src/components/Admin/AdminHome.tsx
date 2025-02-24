import { useAuthorizeAdmin } from "./AdminContext";

const AdminHome = () => {
  const { isAuthorizedAdmin } = useAuthorizeAdmin();
  console.log(isAuthorizedAdmin);
  return <div>AdminHome - Authorized?{isAuthorizedAdmin}</div>;
};

export default AdminHome;
