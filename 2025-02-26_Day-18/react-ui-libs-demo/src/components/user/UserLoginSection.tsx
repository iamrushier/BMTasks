import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  getAllUsers,
  getCartItemsForUserID,
  tryLoginForUser,
} from "../../api/api_calls";
import { useUserContext } from "../../contexts/UserContext";
import { IUserCreds, IUserDetails } from "../../types";
import { useMutation } from "@tanstack/react-query";
import { useCartContext } from "@/contexts/AppContext";
import { Button } from "../ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

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
      <div className="flex justify-center items-center h-screen bg-background">
        <Card className="w-[400px] shadow-lg dark:bg-gray-900">
          <CardHeader>
            <h4 className="text-center text-lg font-bold">User Login</h4>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div>
                <Label htmlFor="username">Username</Label>
                <Input
                  id="username"
                  type="text"
                  placeholder="Enter username"
                  value={credentials.username}
                  onChange={(e) =>
                    setCredentials({ ...credentials, username: e.target.value })
                  }
                />
              </div>
              <div>
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter password"
                  value={credentials.password}
                  onChange={(e) =>
                    setCredentials({ ...credentials, password: e.target.value })
                  }
                />
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col space-y-3">
            <Button className="w-full" onClick={handleLogin}>
              Login
            </Button>
            <p className="text-center text-sm">{loginMessage}</p>
            <p className="text-center text-xs text-muted-foreground">
              Dummy data: <strong>johnd | m38rmF$</strong>
            </p>
          </CardFooter>
        </Card>
      </div>
    </>
  );
};

export default UserLoginSection;
