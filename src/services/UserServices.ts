import axios from "axios";
import User from "../models/User";
import UserUpdate from "../models/UserUpdate";

const baseURL = process.env.REACT_APP_API_URL || "";

export const getUserData = async (): Promise<User[]> => {
  return (await axios.get(`${baseURL}/leaderboard`)).data;
};

<<<<<<< HEAD
export const sendNewUserData = async (newUser: User): Promise<User> => {
  return (await axios.post(`${baseURL}/leaderboard/`, newUser)).data;
=======
export const getSingleUserData = async (uid: string): Promise<User> => {
  return (await axios.get(`${baseURL}/leaderboard/${encodeURIComponent(uid)}`))
    .data;
};

export const sendNewUserData = async (
  uid: string,
  displayName: string
): Promise<User> => {
  return (
    await axios.post(
      `${baseURL}/leaderboard/${encodeURIComponent(uid)}`,
      displayName
    )
  ).data;
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
>>>>>>> 4acd2c5ff6d6346b310c335d03d1cd1b103772ed
};
