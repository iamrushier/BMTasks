import { getAllUsers, tryLoginForUser, getUserId } from "./api_calls";
import { showUsers } from "./render";
import loggedInUser from "./state";
import { UserDetails } from "./types";

const loginBtn = <HTMLButtonElement>document.querySelector(".login-btn");
const msgDiv = <HTMLDivElement>document.querySelector(".message");

loginBtn.addEventListener("click", async () => {
  console.log("Submit");
  const usernameField = <HTMLInputElement>document.getElementById("username");
  const passwordField = <HTMLInputElement>document.getElementById("password");
  const username = usernameField.value;
  const password = passwordField.value;
  if (username && password) {
    try {
      const res = await tryLoginForUser({ username, password });

      loggedInUser.setUser(username, password);
      getUserId(loggedInUser).then((id) => loggedInUser.setUserId(String(id)));

      msgDiv.textContent = `Logging in as '${username}'\nToken: ${
        res.token.slice(0, 21) + "...."
      }`;
      setTimeout(() => {
        window.location.href = "pages/home.html";
      }, 1000);
    } catch (e) {
      msgDiv.textContent = "Invalid credentials";
    }
  }
});

getAllUsers().then((users: UserDetails[]) => {
  showUsers(users);
});
export { loggedInUser, getUserId };
