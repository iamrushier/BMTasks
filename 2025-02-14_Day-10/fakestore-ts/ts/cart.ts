import loggedInUser from "../ts/state";
import { getUserId, getProductById, getCartItemsForUserID } from "./api_calls";
import { renderCartItems } from "./render";
import "./commons";
if (!loggedInUser.username) window.location.href = "../index.html";

getUserId(loggedInUser)
  .then((id) => {
    const strID = String(id);
    loggedInUser.setUserId(strID);
    sessionStorage.setItem("id", strID);
    getCartItemsForUserID(Number(id)).then((data) => {
      renderCartItems(data);
    });
  })
  .catch((err) => console.log("Failed to get ID"));

const checkoutBtn = <HTMLButtonElement>document.querySelector(".checkout-btn");
checkoutBtn.addEventListener("click", () => {
  console.log("Checkout complete");
});
