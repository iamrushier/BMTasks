import axios from "axios";
import { AuthToken, IUserCreds, IUserDetails } from "./types";
const fakeStoreAPI = axios.create({ baseURL: "https://fakestoreapi.com" });

export const tryLoginForUser = async ({
  username,
  password,
}: Partial<IUserCreds>): Promise<AuthToken> => {
  const res = await fakeStoreAPI.post("/auth/login", { username, password });
  return res.data;
};

export const getAllUsers = async (): Promise<IUserDetails[]> => {
  const res = await fakeStoreAPI.get("/users");
  return res.data;
};

export async function getIdOfLoggedInUser(
  loggedInUser: IUserCreds
): Promise<number | undefined> {
  try {
    const users = await getAllUsers();
    const matchedUser = users.find(
      (user: IUserDetails) => user.username === loggedInUser.username
    );

    if (matchedUser) {
      return Number(matchedUser.id);
    }
  } catch (e) {
    console.log("Failed to fetch ID", e);
  }
}
