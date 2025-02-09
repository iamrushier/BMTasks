import { getAllProducts } from "./api_calls.js";
import loggedInUser from "../js/state.js";

// document.addEventListener("DOMContentLoaded", () => {
// const logoutBtn = document.querySelector(".logout");
// logoutBtn.addEventListener("click", () => {
//   loggedInUser.clearUser();
//   window.location.href = "../index.html";
// });

if (!loggedInUser.username) window.location.href = "../index.html";

const prodContainer = document.querySelector(".container");

const renderProducts = (prodData) => {
  prodContainer.innerHTML = "";
  for (const prod of prodData) {
    const prodDiv = document.createElement("div");
    prodDiv.classList =
      "card mt-4 d-flex flex-row justify-content-between align-items-center p-3";
    prodDiv.style.height = "auto";
    prodDiv.innerHTML = `<img
              src="${prod.image}"
              class="img-fluid"
              style="width: 20%; height: auto"
              alt="Product Image"
            />
             <div class="d-flex flex-row flex-grow-1" style="width: 80%;">
            <div class="card-body d-flex flex-column flex-grow-1" style="width: 30%;">
              <h5 class="card-title">${prod.title}</h5>
              <p class="card-text price">${prod.price}</p>
              <a href="#" class="btn btn-primary">Buy Now</a>
            </div>
            <div class="card-body d-flex flex-column flex-grow-1" style="width: 70%;">
              <p class="card-text description">${prod.description.slice(
                0,
                200
              )}....</p>
              <p class="card-text category">${prod.category}</p>
              <p class="card-text rating">${prod.rating.rate} stars(${
      prod.rating.count
    } ratings)</p>
              
            </div></div>`;
    prodDiv.addEventListener("click", (e) => {
      // console.log(e.target.closest(".card"));
      // To select individual product
    });
    prodContainer.appendChild(prodDiv);
  }
};

getAllProducts()
  .then((data) => {
    renderProducts(data);
  })
  .catch(() => {
    console.log("Failed to load products");
  });

// });

export default renderProducts;
