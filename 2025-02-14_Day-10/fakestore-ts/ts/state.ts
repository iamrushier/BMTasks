import { IUserCreds } from "./types";

const loggedInUser = {
  details: <IUserCreds>(
    JSON.parse(sessionStorage.getItem("loggedInUser") || "{}")
  ) ?? {
    id: "",
    username: "",
    password: "",
  },
  setUser(username: string, password: string) {
    this.details.username = username;
    this.details.password = password;
    sessionStorage.setItem("loggedInUser", JSON.stringify(this.details));
  },
  setUserId(id: string) {
    this.details.id = id;
    sessionStorage.setItem("loggedInUser", JSON.stringify(this.details));
  },
  clearUser() {
    this.details = { username: "", password: "", id: "" };
    sessionStorage.removeItem("loggedInUser");
  },
};

export default loggedInUser;
