import loggedInUser from "../js/state.js";
import {
  getUserId,
  getProductById,
  getCartItemsForUserID,
} from "./api_calls.js";
import { renderCartItems } from "./render.js";

import "./commons.js";
// Temporary
// loggedInUser.setUser("snyder", "f238&@*$"); // 7
// loggedInUser.setUser("hopkins", "William56$hj"); // id:8
// loggedInUser.setUser("mor_2314", "83r5^_"); //2
// snyder f238&@*$
// mor_2314 83r5^_
if (!loggedInUser.username) window.location.href = "../index.html";

getUserId(loggedInUser)
  .then((id) => {
    loggedInUser.setUserId(id);
    console.log(loggedInUser);
    sessionStorage.setItem("id", JSON.stringify(id));
    getCartItemsForUserID(id).then((data) => {
      console.log(data);
      renderCartItems(data);
    });
  })
  .catch((err) => console.log("Failed to get ID"));
