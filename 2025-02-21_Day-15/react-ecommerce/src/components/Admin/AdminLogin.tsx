import { Link } from "react-router-dom";

const AdminLogin = () => {
  return (
    <div className="container card p-3" style={{ width: "400px" }}>
      <h4 className="text-center">Admin Login</h4>
      <div className="form-group">
        <label>Admin Username</label>
        <input
          type="text"
          className="form-control"
          placeholder="Admin username"
        />
      </div>
      <div className="form-group">
        <label>Password</label>
        <input
          type="text"
          className="form-control"
          placeholder="Admin password"
        />
      </div>
      <button className="btn btn-danger w-100 mt-3">Login as Admin</button>
      <p className="text-center mt-3">
        <Link to="/login">Switch to User Login</Link>
      </p>
    </div>
  );
};

export default AdminLogin;
