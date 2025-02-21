import { getCategories, getProductsByCategory } from "./api_calls";
import { handleLogout, handleToggleCategories } from "./event_handlers";
import { renderCategories, renderProducts } from "./render";
import loggedInUser from "./state";

if (!loggedInUser.details.username) window.location.href = "../index.html";

const logoutBtn = <HTMLButtonElement>document.querySelector(".logout");
const catBar = <HTMLElement>document.getElementById("category-bar");

logoutBtn.addEventListener("click", handleLogout);
catBar.addEventListener("click", handleToggleCategories);

const initCatBar = () => {
  catBar.querySelector(".active")?.classList.remove("active");
  const first_category = <HTMLElement>catBar.querySelector(".nav-link");

  first_category.classList.add("active");
  getProductsByCategory(first_category.textContent || "").then((data) => {
    renderProducts(data);
  });
};
getCategories().then((data: string[]) => {
  renderCategories(data);
  initCatBar();
});
