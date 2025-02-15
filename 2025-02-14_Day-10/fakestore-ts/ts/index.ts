import { getAllUsers, tryLoginForUser, getUserId } from "./api_calls";
import loggedInUser from "./state";
import { UserDetails } from "./types";

document.addEventListener("DOMContentLoaded", () => {
  console.log("Loaded index");
  const userContainer = <HTMLDivElement>(
    document.querySelector(".users-container")
  );
  const loginBtn = <HTMLButtonElement>document.querySelector(".login-btn");
  const msgDiv = <HTMLDivElement>document.querySelector(".message");

  loginBtn.addEventListener("click", async () => {
    const usernameField = <HTMLInputElement>document.getElementById("username");
    const passwordField = <HTMLInputElement>document.getElementById("password");
    const username = usernameField.value;
    const password = passwordField.value;
    if (username && password) {
      try {
        const res = await tryLoginForUser({ username, password });

        loggedInUser.setUser(username, password);
        getUserId(loggedInUser).then((id) =>
          loggedInUser.setUserId(String(id))
        );

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

  const showUsers = (users: UserDetails[]) => {
    for (const user of users) {
      const userCardDiv = <HTMLDivElement>document.createElement("div");
      userCardDiv.classList.add("card", "mb-3");
      userCardDiv.innerHTML = `<div class="card-body d-flex justify-content-between">
            <p class="card-text mb-0">Username: ${user.username}</p>
            <p class="card-text mb-0">Password: ${user.password}</p>
          </div>`;
      userContainer.appendChild(userCardDiv);
    }
  };
  getAllUsers().then((users: UserDetails[]) => {
    showUsers(users);
  });
});
export { loggedInUser, getUserId };
