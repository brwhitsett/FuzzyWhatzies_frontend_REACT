import axios from "axios";
import Session from "../models/Session";

const baseURL: string = process.env.REACT_APP_SESSION_API_URL || "";

export const getSessionData = async (): Promise<Session[]> => {
  return (await axios.get(baseURL)).data;
};

// export const getRecentSessions = async (req, res): Promise<Session[]> =>{
//   const {uid, difficulty} = req.body;
//   return (await axios.get(`${baseURL}/session`))
// }

export const sendNewSessionData = async (
  newSession: Session
): Promise<Session> => {
  return (await axios.post(baseURL, newSession)).data;
};
