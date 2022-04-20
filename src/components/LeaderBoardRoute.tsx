import { useContext, useEffect, useState } from "react";
import User from "../models/User";
import "./LeaderBoardRoute.css";
import { getUserData } from "../services/UserServices";
import Score from "./Score";
import PercentScore from "./PercentScore";
import Header from "./Header";
import AuthContext from "../context/AuthContext";
import MediumScore from "./MediumScore";
import HardScore from "./HardScore";
import InsanusScore from "./InsanusScore";
import EasyScore from "./EasyScore";
import { displayPartsToString } from "typescript";
const LeaderBoardRoute = () => {
  const [userScores, setUserScores] = useState<User[]>([]);
  const { user } = useContext(AuthContext);
  const [userPercentScores, setUserPercentScores] = useState<User[]>([]);
  const [level, setLevel] = useState("");

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
      <div className="main">
        <select
          className="difficulty-dropdown"
          name="difficulty-dropdown"
          id="difficulty-dropdown"
          onChange={(e) => setLevel(e.target.value)}
          value={level}
        >
          <option value="" disabled selected hidden>
            Difficulty
          </option>
          <option value="Easy"> Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
          <option value="Insanus">Insanus</option>
          <option value="Total">Total</option>
        </select>
        <div className="difficultyandscores-container">
          <div className="percentData-container">
            <ol className="percent-data">
              <h2 className="lifetime-percent">Lifetime % Correct</h2>
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

          {level === "" ? (
            <>
              <ol className="questions-data">
                <>
                  <h2 className="lifetime-correct">
                    Lifetime Total Questions Correct
                  </h2>
                </>
                {userScores
                  .sort((a, b) => {
                    return a.tC - b.tC;
                  })
                  .map((userScore) => <Score userScore={userScore} />)
                  .reverse()}
              </ol>
            </>
          ) : (
            <>
              <ol className="questions-data">
                {user && level === "Easy" && (
                  <>
                    <h2 className="lifetime-correct">
                      Lifetime Easy Questions Correct
                    </h2>
                    {userScores
                      .sort((a, b) => {
                        return a.eC - b.eC;
                      })
                      .map((userScore) => <EasyScore userScore={userScore} />)
                      .reverse()}
                  </>
                )}

                <>
                  {user && level === "Medium" && (
                    <>
                      <h2 className="lifetime-correct">
                        Lifetime Medium Questions Correct
                      </h2>
                      {userScores
                        .sort((a, b) => {
                          return a.mC - b.mC;
                        })
                        .map((userScore) => (
                          <MediumScore userScore={userScore} />
                        ))
                        .reverse()}
                    </>
                  )}
                </>
                <>
                  {user && level === "Hard" && (
                    <>
                      <h2 className="lifetime-correct">
                        Lifetime Hard Questions Correct
                      </h2>
                      {userScores
                        .sort((a, b) => {
                          return a.hC - b.hC;
                        })
                        .map((userScore) => <HardScore userScore={userScore} />)
                        .reverse()}
                    </>
                  )}
                </>
                <>
                  {user && level === "Insanus" && (
                    <>
                      {" "}
                      <h2 className="lifetime-correct">
                        Lifetime Insanus Questions Correct
                      </h2>
                      {userScores
                        .sort((a, b) => {
                          return a.iC - b.iC;
                        })
                        .map((userScore) => (
                          <InsanusScore userScore={userScore} />
                        ))
                        .reverse()}
                    </>
                  )}
                </>
                <>
                  {user && level === "Total" && (
                    <>
                      <h2 className="lifetime-correct">
                        Lifetime Total Questions Correct
                      </h2>
                      {userScores
                        .sort((a, b) => {
                          return a.tC - b.tC;
                        })
                        .map((userScore) => <Score userScore={userScore} />)
                        .reverse()}
                    </>
                  )}
                </>
              </ol>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default LeaderBoardRoute;
