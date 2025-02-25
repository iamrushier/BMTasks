import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  getAllUsers,
  getCartItemsForUserID,
  tryLoginForUser,
} from "../../api/api_calls";
import { useUserContext } from "../../contexts/UserContext";
import { IUserCreds, IUserDetails } from "../../types";
import { useCartContext } from "../../contexts/UserCartContext";
import { useMutation } from "@tanstack/react-query";

const UserLoginSection = () => {
  let navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const { loggedInUser, dispatch } = useUserContext();
  const { dispatch: cartDispatch } = useCartContext();
  const [loginMessage, setLoginMessage] = useState("");
  const mutation = useMutation({
    mutationFn: async (credentials: Partial<IUserCreds>) => {
      return await tryLoginForUser(credentials);
    },
    onSuccess: async (data) => {
      setLoginMessage(
        `Logging in as ${credentials.username} with token: ${
          data.token.slice(0, 15) + "...."
        }`
      );
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
    },
    onError: (err) => {
      setLoginMessage("Invalid username or password!");
      console.log(err.message);
    },
  });

  const handleLogin = async () => {
    if (!credentials.username || !credentials.password) {
      setLoginMessage("Please enter username and password!");
      return;
    }
    mutation.mutate(credentials);
  };

  return (
    <>
      <div
        className="container card p-3 pb-0"
        style={{ width: "400px", marginTop: "150px" }}
      >
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
        <p className="text-end">
          <Link to="/admin/login">Switch to Admin Login</Link>
        </p>
      </div>
      <p className="text-center">{loginMessage}</p>
      <p className="text-center">Dummy data: johnd | m38rmF$</p>
    </>
  );
};

export default UserLoginSection;
