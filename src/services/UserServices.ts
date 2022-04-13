import axios from "axios";
import User from "../models/User";
import UserUpdate from "../models/UserUpdate";

const baseURL = process.env.REACT_APP_LEADERBOARD_API_URL || "";

export const getUserData = async (): Promise<User[]> => {
  return (await axios.get(baseURL)).data;
};

export const getSingleUserData = async (uid: string): Promise<User> => {
  return (await axios.get(`${baseURL}/${encodeURIComponent(uid)}`)).data;
};

export const sendNewUserData = async (
  uid: string,
  displayName: string
): Promise<User> => {
  return (
    await axios.post(baseURL, {
      uid,
      eC: 0,
      eI: 0,
      eT: 0,
      mC: 0,
      mI: 0,
      mT: 0,
      hC: 0,
      hI: 0,
      hT: 0,
      iC: 0,
      iI: 0,
      iT: 0,
      tT: 0,
      tC: 0,
      tI: 0,
      displayName,
    })
  ).data;
};

export const updateUserData = async (
  uid: string,
  userUpdate: UserUpdate
): Promise<User> => {
  return (await axios.put(`${baseURL}/${encodeURIComponent(uid)}`, userUpdate))
    .data;
};
