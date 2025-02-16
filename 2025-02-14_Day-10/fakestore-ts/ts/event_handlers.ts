import loggedInUser from "../ts/state";
import { getProductsByCategory } from "./api_calls";
import { renderProducts } from "./render";
export const logoutUser = () => {
  loggedInUser.clearUser();
  window.location.href = "../index.html";
};
export const toggleCategories = (e: Event) => {
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
export const checkoutAlert = () => {
  alert(`Checkout complete`);
};
