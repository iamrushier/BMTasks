import { getCategories, getProductsByCategory } from "./api_calls";
import { renderCategories, renderProducts } from "./render";
import loggedInUser from "./state";
import "./commons";

if (!loggedInUser.username) window.location.href = "../index.html";
document.addEventListener("DOMContentLoaded", () => {
  const catBar = <HTMLElement>document.getElementById("category-bar");
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

  catBar.addEventListener("click", (e: Event) => {
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
  });
});
