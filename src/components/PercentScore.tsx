import User from "../models/User";
import "./PercentScore.css";

interface Props {
  userPercentScore: User;
}

const PercentScore = ({ userPercentScore }: Props) => {
  return (
    <li className="PercentScore">
      <p>Name: {userPercentScore.displayName}</p>
      <p>
        Percentage Answers Correct:
        {userPercentScore.tC / userPercentScore.tT
          ? `${((userPercentScore.tC / userPercentScore.tT) * 100).toFixed(0)}%`
          : "Not available, need to play the game first :("}
      </p>
    </li>
  );
};

export default PercentScore;
