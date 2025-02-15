import loggedInUser from "../ts/state";
const logoutBtn = <HTMLButtonElement>document.querySelector(".logout");
logoutBtn.addEventListener("click", () => {
  loggedInUser.clearUser();
  window.location.href = "../index.html";
});
