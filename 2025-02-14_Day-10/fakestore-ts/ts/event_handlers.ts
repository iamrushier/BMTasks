import loggedInUser from "../ts/state";
import { getProductsByCategory, getUserId, tryLoginForUser } from "./api_calls";
import { renderProducts } from "./render";
export const handleLogout = () => {
  loggedInUser.clearUser();
  window.location.href = "../index.html";
};
export const handleToggleCategories = (e: Event) => {
  const catBar = <HTMLElement>document.getElementById("category-bar");
  const target = e.target as HTMLElement;
  if (target.classList.contains("nav-link")) {
    if (!target.classList.contains("active")) {
      const activeElement = catBar.querySelector(
        ".active"
      ) as HTMLElement | null;
      if (activeElement) {
        activeElement.classList.remove("active");
      }
      target.classList.add("active");
      getProductsByCategory(target.textContent || "").then((data) => {
        renderProducts(data);
      });
    }
  }
};
export const handleCheckoutAlert = () => {
  alert(`Checkout complete`);
};
export const handleLogin = async () => {
  const usernameField = <HTMLInputElement>document.getElementById("username");
  const passwordField = <HTMLInputElement>document.getElementById("password");
  const msgDiv = <HTMLDivElement>document.querySelector(".message");
  const username = usernameField.value;
  const password = passwordField.value;
  if (username && password) {
    try {
      const res = await tryLoginForUser({ username, password });

      loggedInUser.setUser(username, password);
      getUserId(loggedInUser.details).then((id) =>
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
};
