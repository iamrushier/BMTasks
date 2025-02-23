import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAllUsers, tryLoginForUser } from "../../api_calls";
import { useUserContext } from "./UserContext";
import { IUserDetails } from "../../types";

const UserLogin = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const { loggedInUser, dispatch } = useUserContext();

  let navigate = useNavigate();
  const [isLoginInvalid, setIsLoginInvalid] = useState(false);
  const [isSuccessLogin, setIsSuccessLogin] = useState(false);
  const handleLogin = () => {
    tryLoginForUser(credentials)
      .then(() => {
        setIsSuccessLogin(true);
        setIsLoginInvalid(false);
        dispatch({
          type: "add_uname_password",
          data: { ...credentials, id: loggedInUser.id },
        });
      })
      .then(async () => {
        try {
          const users = await getAllUsers();
          const matchedUser = users.find(
            (user: IUserDetails) => user.username === loggedInUser.username
          );

          if (matchedUser) {
            dispatch({
              type: "add_id",
              data: { ...loggedInUser, id: matchedUser.id },
            });
          }
        } catch (e) {
          console.log("Failed to fetch ID", e);
        }
      })
      .then(() => {
        navigate("/home");
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
