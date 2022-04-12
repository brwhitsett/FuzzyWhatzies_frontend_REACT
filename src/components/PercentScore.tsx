import User from "../models/User";
import "./PercentScore.css";

interface Props {
  userPercentScore: User;
}

const PercentScore = ({ userPercentScore }: Props) => {
  return (
    <li className="PercentScore">
      <p>{userPercentScore.displayName}</p>
      <p>{userPercentScore.tC / userPercentScore.tT}</p>
    </li>
  );
};

export default PercentScore;
