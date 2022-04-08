import axios from "axios";
import Session from "../models/Session";

const baseURL: string = process.env.REACT_APP_API_URL || "";

export const getSessionData = async (): Promise<Session> => {
  return (await axios.get(baseURL)).data;
};
