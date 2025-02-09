import { getCategories, getProductsByCategory } from "./api_calls.js";
import renderProducts from "./home.js";

document.addEventListener("DOMContentLoaded", () => {
  console.log("Categories loaded");
  const catBar = document.getElementById("category-bar");
  // const prodContainer = document.querySelector(".container");

  // const renderProducts = (prodData) => {
  //   prodContainer.innerHTML = "";
  //   for (const prod of prodData) {
  //     const prodDiv = document.createElement("div");
  //     prodDiv.classList =
  //       "card mt-4 d-flex flex-row justify-content-between align-items-center p-3";
  //     prodDiv.style.height = "auto";
  //     prodDiv.innerHTML = `<img
  //             src="${prod.image}"
  //             class="img-fluid"
  //             style="width: 20%; height: auto"
  //             alt="Product Image"
  //           />
  //            <div class="d-flex flex-row flex-grow-1" style="width: 80%;">
  //           <div class="card-body d-flex flex-column flex-grow-1" style="width: 30%;">
  //             <h5 class="card-title">${prod.title}</h5>
  //             <p class="card-text price">${prod.price}</p>
  //             <a href="#" class="btn btn-primary">Buy Now</a>
  //           </div>
  //           <div class="card-body d-flex flex-column flex-grow-1" style="width: 70%;">
  //             <p class="card-text description">${prod.description.slice(
  //               0,
  //               200
  //             )}....</p>
  //             <p class="card-text category">${prod.category}</p>
  //             <p class="card-text rating">${prod.rating.rate} stars(${
  //       prod.rating.count
  //     } ratings)</p>

  //           </div></div>`;
  //     prodDiv.addEventListener("click", (e) => {
  //       console.log(e.target.closest(".card"));
  //     });
  //     prodContainer.appendChild(prodDiv);
  //   }
  // };
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
    // console.log(.textContent);
  };
  getCategories().then((data) => {
    renderCategories(data);
    // const first_category = data[0];
    // catBar.children[0].classList.add("active");
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

  // console.log(catBar.querySelector(".nav-item").textContent);
  // catBar.children[0].classList.add("active");
  // getProductsByCategory(catBar.children[0].textContent).then((data) => {
  //   renderProducts(data);
  // });
});
