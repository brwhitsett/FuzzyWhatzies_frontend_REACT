import { useContext } from "react";
import User from "../models/User";
import "./Score.css";

interface Props {
  userScore: User;
}

const Score = ({ userScore }: Props) => {
  return (
    <li className="Score">
      <p>Name: {userScore.displayName}</p>
      <p>Total Correct: {userScore.tC}</p>
      <p>Total Questions Completed: {userScore.tT}</p>
    </li>
  );
};

export default Score;
