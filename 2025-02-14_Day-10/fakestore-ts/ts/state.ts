const loggedInUser = {
  username: sessionStorage.getItem("username") || "",
  password: sessionStorage.getItem("password") || "",
  id: sessionStorage.getItem("id") ?? "",
  setUser(username: string, password: string) {
    this.username = username;
    this.password = password;
    sessionStorage.setItem("username", username);
    sessionStorage.setItem("password", password);
    sessionStorage.setItem("id", "");
  },
  setUserId(id: string) {
    this.id = id;
    sessionStorage.setItem("id", JSON.stringify(id));
  },
  clearUser() {
    this.username = "";
    this.password = "";
    this.id = "";
    sessionStorage.removeItem("username");
    sessionStorage.removeItem("password");
    sessionStorage.removeItem("id");
  },
};
// loggedInUser.clearUser();
// getUserId(loggedInUser).then((id) => loggedInUser.setUserId(id));

export default loggedInUser;
