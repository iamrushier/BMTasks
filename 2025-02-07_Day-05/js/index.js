import { getAllUsers, tryLoginForUser } from "./api_calls.js";
import loggedInUser from "./state.js";

document.addEventListener("DOMContentLoaded", () => {
  console.log("Loaded index");
  const userContainer = document.querySelector(".users-container");
  const loginBtn = document.querySelector(".login-btn");
  const msgDiv = document.querySelector(".message");

  loginBtn.addEventListener("click", async () => {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    if (username && password) {
      // console.log("Not blank", username, password);
      try {
        const res = await tryLoginForUser({ username, password });

        loggedInUser.setUser(username, password);
        getUserId(loggedInUser).then((id) => loggedInUser.setUserId(id));

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

  const showUsers = (users) => {
    for (const user of users) {
      const userCardDiv = document.createElement("div");
      userCardDiv.classList = "card mb-3";
      userCardDiv.innerHTML = `<div class="card-body d-flex justify-content-between">
            <p class="card-text mb-0">Username: ${user.username}</p>
            <p class="card-text mb-0">Password: ${user.password}</p>
          </div>`;
      userContainer.appendChild(userCardDiv);
    }
  };
  getAllUsers().then((users) => {
    showUsers(users);
  });
  // const tryLogin=
});
export default loggedInUser;
