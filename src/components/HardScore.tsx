import User from "../models/User";
import "./HardScore.css";

interface Props {
  userScore: User;
}

const HardScore = ({ userScore }: Props) => {
  return (
    <li className="HardScore">
      <p>Name: {userScore.displayName}</p>
      <p>Hard Correct: {userScore.hC}</p>
      <p>Hard Questions Completed: {userScore.hT}</p>
    </li>
  );
};

export default HardScore;
