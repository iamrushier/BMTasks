// const loggedInUser = { username: null, password: null };
const loggedInUser = {
  username: sessionStorage.getItem("username") || "",
  password: sessionStorage.getItem("password") || "",

  setUser(username, password) {
    this.username = username;
    this.password = password;
    sessionStorage.setItem("username", username);
    sessionStorage.setItem("password", password);
  },

  clearUser() {
    this.username = "";
    this.password = "";
    sessionStorage.removeItem("username");
    sessionStorage.removeItem("password");
  },
};
export default loggedInUser;
