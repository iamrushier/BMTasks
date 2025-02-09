import { getProductById } from "./api_calls.js";

const prodContainer = document.querySelector(".container");

const renderProducts = (prodData) => {
  prodContainer.innerHTML = "";
  for (const prod of prodData) {
    const prodDiv = document.createElement("div");
    prodDiv.classList =
      "card mt-4 d-flex flex-row justify-content-between w-75 mx-auto p-3";
    prodDiv.style.height = "auto";
    prodDiv.setAttribute("data-id", prod.id);
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
      const productId = prodDiv.getAttribute("data-id");
      window.location.href = `../pages/product.html?id=${productId}`;
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
  // cartContainer.classList.add("");
  const itemsCountMsg = (document.querySelector(
    ".items-count"
  ).textContent = `You have ${data[0].products.length} items in your cart`);
  for (const entry of data[0].products) {
    const quantity = entry.quantity;
    const productInfo = await getProductById(entry.productId);
    const itemBox = document.createElement("div");
    itemBox.classList = "card mb-3";
    itemBox.setAttribute("product-id", productInfo.id);
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
                          <h6>($${productInfo.price})</h6>
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
    itemBox.addEventListener("click", () => {
      window.location.href = `../pages/product.html?id=${productInfo.id}`;
    });
    cartContainer.appendChild(itemBox);
  }
  const itemPriceList = document.querySelectorAll(".item-price");
  const totalPrice = document.querySelector(".total-price");
  totalPrice.textContent = `$${Array.from(itemPriceList)
    .map((itemPrice) => Number(itemPrice.textContent.replace("$", "")))
    .reduce((f, s) => f + s)}`;
};

const productDetails = document.querySelector(".product-details");

const renderProductDetails = (data) => {
  productDetails.innerHTML = "";
  const container = document.createElement("div");
  container.classList = "card p-3 w-75  mx-auto";
  container.innerHTML = `<div class="row">
          <div class="col-md-4">
            <img
              id="product-image"
              src="${data.image}"
              class="img-fluid"
              alt="Product Image"
            />
          </div>
          <div class="col-md-8">
            <h3 id="product-title">
              ${data.title}
            </h3>
            <p class="text-muted" id="product-category">${
              data.category[0].toUpperCase() + data.category.slice(1)
            }</p>
            <h4 class="text-primary">
              $<span id="product-price">${data.price}</span>
            </h4>
            <p id="product-description">
              ${data.description}</p>
            <p>
              <strong>Rating:</strong> <span id="product-rating">${
                data.rating.rate
              }</span> ⭐
              (<span id="product-rating-count">${
                data.rating.count
              }</span> reviews)
            </p>
            <button class="btn btn-success add-cart-btn">Add to Cart</button>
          </div>
        </div>`;
  productDetails.appendChild(container);
};
export {
  renderCategories,
  renderProducts,
  renderCartItems,
  renderProductDetails,
};
