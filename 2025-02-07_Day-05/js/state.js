import { getAllUsers } from "../js/api_calls.js";
const loggedInUser = {
  username: sessionStorage.getItem("username") || "",
  password: sessionStorage.getItem("password") || "",

  setUser(username, password) {
    this.username = username;
    this.password = password;
    sessionStorage.setItem("username", username);
    sessionStorage.setItem("password", password);
    this.setUserId();
  },

  clearUser() {
    this.username = "";
    this.password = "";
    sessionStorage.removeItem("username");
    sessionStorage.removeItem("password");
  },
  async setUserId() {
    try {
      const users = await getAllUsers();
      const matchedUser = users.find((user) => user.username === this.username);
      if (matchedUser) {
        this.id = matchedUser.id;
        sessionStorage.setItem("id", matchedUser.id);
      }
    } catch (e) {
      console.log("Failed to fetch ID");
    }
  },
};
export default loggedInUser;
