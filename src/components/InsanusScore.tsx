import User from "../models/User";
import "./InsanusScore.css";

interface Props {
  userScore: User;
}

const InsanusScore = ({ userScore }: Props) => {
  return (
    <li className="InsanusScore">
      <p>Name: {userScore.displayName}</p>
      <p>Insanus Correct: {userScore.iC}</p>
      <p>Insanus Questions Completed: {userScore.iT}</p>
    </li>
  );
};

export default InsanusScore;
