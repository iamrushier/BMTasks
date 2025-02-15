import { getCategories, getProductsByCategory } from "./api_calls.js";
import { renderCategories, renderProducts } from "./render.js";
import loggedInUser from "./state.js";
import "./commons.js";

if (!loggedInUser.username) window.location.href = "../index.html";
document.addEventListener("DOMContentLoaded", () => {
  const catBar = document.getElementById("category-bar");
  const initCatBar = () => {
    catBar.querySelector(".active")?.classList.remove("active");
    const first_category = catBar.querySelector(".nav-link");

    first_category.classList.add("active");
    getProductsByCategory(first_category.textContent).then((data) => {
      renderProducts(data);
    });
  };
  getCategories().then((data) => {
    renderCategories(data);
    initCatBar();
  });

  catBar.addEventListener("click", (e) => {
    if (e.target.classList.contains("nav-link")) {
      if (!e.target.classList.contains("active")) {
        catBar.querySelector(".active").classList.remove("active");
        e.target.classList.add("active");
        getProductsByCategory(e.target.textContent).then((data) => {
          renderProducts(data);
        });
      }
    }
  });
});
