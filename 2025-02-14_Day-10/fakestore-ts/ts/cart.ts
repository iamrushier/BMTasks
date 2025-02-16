import loggedInUser from "../ts/state";
import { getUserId, getProductById, getCartItemsForUserID } from "./api_calls";
import { checkoutAlert, logoutUser } from "./event_handlers";
import { renderCartItems } from "./render";
if (!loggedInUser.username) window.location.href = "../index.html";

const logoutBtn = <HTMLButtonElement>document.querySelector(".logout");
const checkoutBtn = <HTMLButtonElement>document.querySelector(".checkout-btn");
logoutBtn.addEventListener("click", logoutUser);
checkoutBtn.addEventListener("click", checkoutAlert);

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
