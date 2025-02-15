import loggedInUser from "../js/state.js";
const logoutBtn = document.querySelector(".logout");
logoutBtn.addEventListener("click", () => {
  loggedInUser.clearUser();
  window.location.href = "../index.html";
});
