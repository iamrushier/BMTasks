import { getCategories, getProductsByCategory } from "./api_calls.js";
import renderProducts from "./home.js";

document.addEventListener("DOMContentLoaded", () => {
  console.log("Categories loaded");
  const catBar = document.getElementById("category-bar");
  const renderCategories = (data) => {
    console.log("data:", data);
    for (const category of Object.values(data)) {
      const li = document.createElement("li");
      li.className = "nav-item";
      li.innerHTML = `<button class="nav-link rounded-2">${category.toUpperCase()}</button>`;
      catBar.appendChild(li);
    }
    catBar.querySelector(".active")?.classList.remove("active");
    const first_category = catBar.querySelector(".nav-link");

    first_category.classList.add("active");
    getProductsByCategory(first_category.textContent).then((data) => {
      renderProducts(data);
    });
  };
  getCategories().then((data) => {
    renderCategories(data);
  });

  catBar.addEventListener("click", (e) => {
    if (e.target.classList.contains("nav-link")) {
      if (!e.target.classList.contains("active")) {
        catBar.querySelector(".active").classList.remove("active");
        e.target.classList.add("active");
        console.log("Runs?", e.target.textContent);
        getProductsByCategory(e.target.textContent).then((data) => {
          renderProducts(data);
        });
      }
    }
  });
});
