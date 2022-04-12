import { useEffect, useState } from "react";
import User from "../models/User";
import "./LeaderBoardRoute.css";
import { getUserData } from "../services/UserServices";
import Score from "./Score";
import PercentScore from "./PercentScore";
const LeaderBoardRoute = () => {
  const [userScores, setUserScores] = useState<User[]>([]);
  const [userPercentScores, setUserPercentScores] = useState<User[]>([]);

  const getAndSetUserScores = async () => {
    getUserData().then((response) => {
      setUserScores(response);
      console.log(response);
    });
  };

  const getAndSetUserPercentScores = async () => {
    getUserData().then((response) => {
      setUserPercentScores(response);
    });
  };

  useEffect(() => {
    getAndSetUserScores().then(() => {});
    console.log(getAndSetUserScores());
    getAndSetUserPercentScores().then(() => {});
  }, []);

  return (
    <div className="LeaderBoardRoute">
      {/* figure out how to put back to main in header specifically for leaderboardroute */}

      <h2>Lifetime Total Questions Correct</h2>
      <div>
        <ul>
          {userScores.map((userScore) => (
            <Score userScore={userScore} />
          ))}
        </ul>
      </div>
      <h2>Lifetime % Correct</h2>
      <div>
        <ul>
          {userPercentScores.map((userPercentScore) => (
            <PercentScore userPercentScore={userPercentScore} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LeaderBoardRoute;
