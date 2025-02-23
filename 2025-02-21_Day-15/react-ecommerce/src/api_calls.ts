import axios from "axios";
import { AuthToken, IUserCreds } from "./types";
const fakeStoreAPI = axios.create({ baseURL: "https://fakestoreapi.com" });

export const tryLoginForUser = async ({
  username,
  password,
}: Partial<IUserCreds>): Promise<AuthToken> => {
  const res = await fakeStoreAPI.post("/auth/login", { username, password });
  return res.data;
};
