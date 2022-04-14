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
        <ol>
          {userScores
            .sort((a, b) => {
              return a.tC - b.tC;
            })
            .map((userScore) => <Score userScore={userScore} />)
            .reverse()}
        </ol>
      </div>
      <h2>Lifetime % Correct</h2>
      <div>
        <ol>
          {userPercentScores
            .sort((a, b) => {
              return a.tC / a.tT - b.tC / b.tT;
            })
            .map((userPercentScore) => (
              <PercentScore userPercentScore={userPercentScore} />
            ))
            .reverse()}
        </ol>
      </div>
    </div>
  );
};

export default LeaderBoardRoute;
