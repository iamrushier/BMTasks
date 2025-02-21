import { getAllUsers, getUserId } from "./api_calls";
import { handleLogin } from "./event_handlers";
import { showUsers } from "./render";
import { IUserDetails } from "./types";

const loginBtn = <HTMLButtonElement>document.querySelector(".login-btn");
loginBtn.addEventListener("click", handleLogin);

getAllUsers().then((users: IUserDetails[]) => {
  showUsers(users);
});
export { getUserId };
