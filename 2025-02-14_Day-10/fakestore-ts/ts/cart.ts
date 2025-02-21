import loggedInUser from "../ts/state";
import { getUserId, getCartItemsForUserID } from "./api_calls";
import { handleCheckoutAlert, handleLogout } from "./event_handlers";
import { renderCartItems } from "./render";
if (!loggedInUser.details.username) window.location.href = "../index.html";

const logoutBtn = <HTMLButtonElement>document.querySelector(".logout");
const checkoutBtn = <HTMLButtonElement>document.querySelector(".checkout-btn");
logoutBtn.addEventListener("click", handleLogout);
checkoutBtn.addEventListener("click", handleCheckoutAlert);

getUserId(loggedInUser.details)
  .then((id) => {
    const strID = String(id);
    loggedInUser.setUserId(strID);
    sessionStorage.setItem("id", strID);
    getCartItemsForUserID(Number(id)).then((data) => {
      renderCartItems(data);
    });
  })
  .catch((err) => console.log("Failed to get ID"));
