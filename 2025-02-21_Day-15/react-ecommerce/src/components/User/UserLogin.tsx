import { Link } from "react-router-dom";

const UserLogin = () => {
  return (
    <div className="container card p-3 " style={{ width: "400px" }}>
      <h4 className="text-center">User Login</h4>
      <div className="form-group">
        <label htmlFor="user-name">Username</label>
        <input
          type="text"
          className="form-control"
          id="username"
          placeholder="Enter username"
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="text"
          className="form-control"
          id="password"
          placeholder="Password"
        />
      </div>
      <button className="btn btn-primary w-100 mt-3">Login</button>
      <p className="text-center mt-3">
        <Link to="/admin/login">Switch to Admin Login</Link>
      </p>
    </div>
  );
};

export default UserLogin;
