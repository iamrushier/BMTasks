import { NavLink, useNavigate } from "react-router-dom";
import { useAuthorizeAdmin } from "./AdminContext";

const AdminNavbar = () => {
  const { isAuthorizedAdmin, verifyAdminLogin } = useAuthorizeAdmin();
  const navigate = useNavigate();
  return (
    <nav className="nav nav-pills gap-2 p-2 border border-danger d-flex w-100 align-items-center">
      <div className="d-flex gap-2">
        <NavLink
          to="/admin/home"
          className={({ isActive }) =>
            isActive
              ? "nav-link active rounded-2 home-btn bg-danger text-white"
              : "nav-link rounded-2 home-btn text-danger"
          }
        >
          Products
        </NavLink>
        <NavLink
          to="/admin/add_new"
          className={({ isActive }) =>
            isActive
              ? "nav-link active rounded-2 home-btn bg-danger text-white"
              : "nav-link rounded-2 home-btn text-danger"
          }
        >
          Add new
        </NavLink>
      </div>
      <button
        className="btn btn-link logout ms-auto text-danger"
        onClick={() => {
          verifyAdminLogin("", "");
          navigate("/admin/login");
        }}
      >
        {isAuthorizedAdmin ? "Logout" : "Login"}
      </button>
    </nav>
  );
};

export default AdminNavbar;
