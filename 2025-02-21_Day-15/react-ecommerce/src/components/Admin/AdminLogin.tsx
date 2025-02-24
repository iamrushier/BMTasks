import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthorizeAdmin } from "./AdminContext";

const AdminLogin = () => {
  const [adminUname, setAdminUname] = useState("");
  const [adminPassword, setAdminPassword] = useState("");
  const { verifyAdminLogin } = useAuthorizeAdmin();
  const navigate = useNavigate();

  const verifyLogin = () => {
    if (verifyAdminLogin(adminUname, adminPassword)) {
      navigate("/admin/home");
    }
  };
  return (
    <div className="container card p-3" style={{ width: "400px" }}>
      <h4 className="text-center">Admin Login</h4>
      <div className="form-group">
        <label>Admin Username</label>
        <input
          type="text"
          className="form-control"
          value={adminUname}
          onChange={(e) => setAdminUname(e.target.value)}
          placeholder="Admin username"
        />
      </div>
      <div className="form-group">
        <label>Password</label>
        <input
          type="text"
          value={adminPassword}
          onChange={(e) => setAdminPassword(e.target.value)}
          className="form-control"
          placeholder="Admin password"
        />
      </div>
      <button className="btn btn-danger w-100 mt-3" onClick={verifyLogin}>
        Login as Admin
      </button>
      <p className="text-center mt-3">
        <Link to="/login">Switch to User Login</Link>
      </p>
    </div>
  );
};

export default AdminLogin;
