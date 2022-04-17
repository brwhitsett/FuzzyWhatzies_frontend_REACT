import User from "../models/User";
import "./MediumScore.css";

interface Props {
  userScore: User;
}

const MediumScore = ({ userScore }: Props) => {
  return (
    <li className="MediumScore">
      <p>Name: {userScore.displayName}</p>
      <p>Medium Correct: {userScore.mC}</p>
      <p>Medium Questions Completed: {userScore.mT}</p>
    </li>
  );
};

export default MediumScore;
