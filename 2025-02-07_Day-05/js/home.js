import loggedInUser from "../js/state.js";
console.log("Home.js loaded");
if (!loggedInUser.username) {
  window.location.href = "../index.html";
} else {
  console.log("Welcome, " + loggedInUser.username);
}
