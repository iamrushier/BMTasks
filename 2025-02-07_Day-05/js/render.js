import { getProductById } from "./api_calls.js";

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
const catBar = document.getElementById("category-bar");
const renderCategories = (data) => {
  for (const category of Object.values(data)) {
    const li = document.createElement("li");
    li.className = "nav-item";
    li.innerHTML = `<button class="nav-link rounded-2">${category.toUpperCase()}</button>`;
    catBar.appendChild(li);
  }
};

const cartContainer = document.querySelector(".item-container");
const renderCartItems = async (data) => {
  cartContainer.innerHTML = "";
  const itemsCountMsg = (document.querySelector(
    ".items-count"
  ).textContent = `You have ${data[0].products.length} items in your cart`);
  for (const entry of data[0].products) {
    const quantity = entry.quantity;
    const productInfo = await getProductById(entry.productId);
    const itemBox = document.createElement("div");
    itemBox.classList = "card mb-3";
    itemBox.innerHTML = `
                  <div class="card-body">
                    <div class="d-flex justify-content-between">
                      <div class="d-flex flex-row align-items-center">
                        <div>
                          <img
                            src=${productInfo.image}
                            class="img-fluid rounded-3"
                            alt="Shopping item"
                            style="width: 65px"
                          />
                        </div>
                        <div class="ms-3">
                          <h5>${productInfo.title}</h5>
                          <!-- <p class="small mb-0">256GB, Navy Blue</p> -->
                        </div>
                      </div>
                      <div class="d-flex flex-row align-items-center">
                        <div style="width: 50px">
                          <h5 class="fw-normal mb-0">x${quantity}</h5>
                        </div>
                        <div style="width: 80px">
                          <h5 class="mb-0 item-price">$${
                            productInfo.price * quantity
                          }</h5>
                        </div>
                      </div>
                    </div>
                </div>`;
    cartContainer.appendChild(itemBox);
  }
  const itemPriceList = document.querySelectorAll(".item-price");
  const totalPrice = document.querySelector(".total-price");
  totalPrice.textContent = `$${Array.from(itemPriceList)
    .map((itemPrice) => Number(itemPrice.textContent.replace("$", "")))
    .reduce((f, s) => f + s)}`;
};
export { renderCategories, renderProducts, renderCartItems };
