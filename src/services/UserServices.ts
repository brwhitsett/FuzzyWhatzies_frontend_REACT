import axios from "axios";
import User from "../models/User";
import UserUpdate from "../models/UserUpdate";

const baseURL = process.env.REACT_APP_API_URL || "";

export const getUserData = async (): Promise<User[]> => {
  return (await axios.get(`${baseURL}/leaderboard`)).data;
};

export const getSingleUserData = async (uid: string): Promise<User> => {
  return await axios.get(`${baseURL}/leaderboard/${uid}`);
};

export const sendNewUserData = async (uid: string): Promise<User> => {
  return (await axios.post(`${baseURL}/leaderboard/${encodeURIComponent(uid)}`))
    .data;
};

export const updateUserData = async (
  uid: string,
  userUpdate: UserUpdate
): Promise<User> => {
  return (
    await axios.put(
      `${baseURL}/leaderboard/${encodeURIComponent(uid)}`,
      userUpdate
    )
  ).data;
};
