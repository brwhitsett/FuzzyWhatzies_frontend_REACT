import axios from "axios";
import User from "../models/User";

const baseURL = process.env.REACT_APP_API_URL || "";

export const getUserData = async (): Promise<User[]> => {
  return (await axios.get(`${baseURL}/leaderboard`)).data;
};

export const sendNewUserData = async (newUser: User): Promise<User> => {
  return (await axios.post(`${baseURL}/leaderboard/`, newUser)).data;
};
