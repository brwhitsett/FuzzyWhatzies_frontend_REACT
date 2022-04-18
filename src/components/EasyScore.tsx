import User from "../models/User";
import "./EasyScore.css";

interface Props {
  userScore: User;
}

const EasyScore = ({ userScore }: Props) => {
  return (
    <li className="EasyScore">
      <p>Name: {userScore.displayName}</p>
      <p>Easy Correct: {userScore.eC}</p>
      <p>Easy Questions Completed: {userScore.eT}</p>
    </li>
  );
};

export default EasyScore;
