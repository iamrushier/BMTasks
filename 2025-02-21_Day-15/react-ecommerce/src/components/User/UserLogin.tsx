import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { tryLoginForUser } from "../../api_calls";

const UserLogin = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  let navigate = useNavigate();
  const [isLoginInvalid, setIsLoginInvalid] = useState(false);
  const [isSuccessLogin, setIsSuccessLogin] = useState(false);
  const handleLogin = () => {
    tryLoginForUser(credentials)
      .then((res) => {
        setIsSuccessLogin(true);
        setIsLoginInvalid(false);
        setTimeout(() => {
          navigate("/home");
        }, 1500);
        console.log(res);
      })
      .catch((err) => {
        setIsLoginInvalid(true);
        console.log(err.message);
      });
  };
  return (
    <div className="container card p-3 " style={{ width: "400px" }}>
      <h4 className="text-center">User Login</h4>
      <div className="form-group">
        <label htmlFor="user-name">Username</label>
        <input
          type="text"
          className="form-control"
          id="username"
          value={credentials.username}
          placeholder="Enter username"
          onChange={(e) =>
            setCredentials({ ...credentials, username: e.target.value })
          }
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="text"
          className="form-control"
          id="password"
          placeholder="Password"
          value={credentials.password}
          onChange={(e) =>
            setCredentials({ ...credentials, password: e.target.value })
          }
        />
      </div>
      <button className="btn btn-primary w-100 mt-3" onClick={handleLogin}>
        Login
      </button>
      {isSuccessLogin ? <p>Logging in...</p> : ""}
      {isLoginInvalid ? <p>Invalid credentials</p> : ""}
      {/* <Link to="/home" className="btn btn-primary w-100 mt-3">
        Login
      </Link> */}
      <p className="text-center mt-3">
        <Link to="/admin/login">Switch to Admin Login</Link>
      </p>
    </div>
  );
};

export default UserLogin;
