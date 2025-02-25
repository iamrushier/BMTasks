import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthorizeAdmin } from "../../contexts/AdminContext";

const AdminLogin = () => {
  const [adminUname, setAdminUname] = useState("");
  const [adminPassword, setAdminPassword] = useState("");
  const [loginMessage, setLoginMessage] = useState("");
  const { verifyAdminLogin } = useAuthorizeAdmin();
  const navigate = useNavigate();

  const verifyLogin = () => {
    if (!adminUname || !adminPassword) {
      setLoginMessage("Please enter username and password!");
      return;
    }
    if (verifyAdminLogin(adminUname, adminPassword)) {
      navigate("/admin/home");
    } else {
      setLoginMessage("Invalid username or password!");
    }
  };
  return (
    <>
      <div
        className="container card p-3 pb-0"
        style={{ width: "400px", marginTop: "150px" }}
      >
        <h4 className="text-center">Admin Login</h4>
        <div className="form-group">
          <label>Admin Username</label>
          <input
            type="text"
            className="form-control"
            value={adminUname}
            onChange={(e) => setAdminUname(e.target.value)}
            placeholder="Admin username"
            required
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
            required
          />
        </div>
        <button className="btn btn-danger w-100 mt-3" onClick={verifyLogin}>
          Login as Admin
        </button>
        <p className="text-end">
          <Link to="/login">Switch to User Login</Link>
        </p>
      </div>
      <p className="text-center text-danger">{loginMessage}</p>
    </>
  );
};

export default AdminLogin;
