import loggedInUser from "../js/state.js";
import { getAllUsers, getProductById } from "./api_calls.js";
import { getCartItemsForUserID } from "./api_calls.js";
// Temporary
// loggedInUser.setUser("snyder", "f238&@*$"); // 7
loggedInUser.setUser("hopkins", "William56$hj"); // id:8
// loggedInUser.setUser("mor_2314", "83r5^_"); //2
// snyder f238&@*$
// mor_2314 83r5^_
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
                          <h5>$${productInfo.title}</h5>
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
async function getUserId(loggedInUser) {
  try {
    const users = await getAllUsers();
    const matchedUser = users.find(
      (user) => user.username === loggedInUser.username
    );

    if (matchedUser) {
      return matchedUser.id;
      // sessionStorage.setItem("id", matchedUser.id);
    }
  } catch (e) {
    console.log("Failed to fetch ID", e);
  }
}
getUserId(loggedInUser)
  .then((id) => {
    loggedInUser.setUserId(id);
    console.log(loggedInUser);
    sessionStorage.setItem("id", JSON.stringify(id));
    // document.querySelector(".container").textContent =
    //   JSON.stringify(loggedInUser);
    getCartItemsForUserID(id).then((data) => {
      console.log(data);
      renderCartItems(data);
    });
  })
  .catch((err) => console.log("Failed to get ID"));
