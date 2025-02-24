import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  getAllUsers,
  getCartItemsForUserID,
  tryLoginForUser,
} from "../../api_calls";
import { useUserContext } from "./UserContext";
import { IUserDetails } from "../../types";
import { useCartContext } from "./CartContext";

const UserLogin = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const { loggedInUser, dispatch } = useUserContext();
  const { cart, dispatch: cartDispatch } = useCartContext();
  let navigate = useNavigate();
  const [isLoginInvalid, setIsLoginInvalid] = useState(false);
  const [isSuccessLogin, setIsSuccessLogin] = useState(false);
  const handleLogin = async () => {
    try {
      await tryLoginForUser(credentials);
      setIsSuccessLogin(true);
      setIsLoginInvalid(false);
      dispatch({
        type: "add_uname_password",
        data: { ...credentials, id: loggedInUser.id },
      });
      const users = await getAllUsers();
      const matchedUser = users.find(
        (user: IUserDetails) => user.username === credentials.username
      );

      if (matchedUser) {
        dispatch({
          type: "add_id",
          data: { ...loggedInUser, id: matchedUser.id },
        });
        const cartData = await getCartItemsForUserID(Number(matchedUser.id));
        cartDispatch({ type: "set_cart_init", cart: cartData[0] });
      }

      navigate("/");
    } catch (err: any) {
      setIsLoginInvalid(true);
      console.log(err.message);
    }
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
