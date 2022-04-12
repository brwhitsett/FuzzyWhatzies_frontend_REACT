import { useContext } from "react";
import User from "../models/User";
import "./Score.css";

interface Props {
  userScore: User;
}

const Score = ({ userScore }: Props) => {
  return (
    <li className="Score">
      <p>{userScore.displayName}</p>
      <p>{userScore.tC}</p>
      <p>{userScore.tT}</p>
    </li>
  );
};

export default Score;
