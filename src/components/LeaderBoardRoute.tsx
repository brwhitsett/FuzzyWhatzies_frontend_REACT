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
      <Header />
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
      <h2>Lifetime Total Questions Correct</h2>

      <ol>
        {user && level === "Easy"
          ? userScores
              .sort((a, b) => {
                return a.eC - b.eC;
              })
              .map((userScore) => <EasyScore userScore={userScore} />)
              .reverse()
          : <h2 className="easy-prompt">Sign In</h2> &&
            "total-prompt" &&
            !"medium-prompt" &&
            !"hard-prompt" &&
            !"insanus-prompt"}
      </ol>

      <ol>
        {user && level === "Medium" ? (
          userScores
            .sort((a, b) => {
              return a.mC - b.mC;
            })
            .map((userScore) => <MediumScore userScore={userScore} />)
            .reverse()
        ) : (
          <h2 className="medium-prompt">Sign In</h2>
        )}
      </ol>

      <ol>
        {user && level === "Hard" ? (
          userScores
            .sort((a, b) => {
              return a.hC - b.hC;
            })
            .map((userScore) => <HardScore userScore={userScore} />)
            .reverse()
        ) : (
          <h2 className="hard-prompt">Sign In</h2>
        )}
      </ol>

      <ol>
        {user && level === "Insanus" ? (
          userScores
            .sort((a, b) => {
              return a.iC - b.iC;
            })
            .map((userScore) => <InsanusScore userScore={userScore} />)
            .reverse()
        ) : (
          <h2 className="insanus-prompt">Sign In</h2>
        )}
      </ol>

      <ol>
        {user && level === "Total" ? (
          userScores
            .sort((a, b) => {
              return a.tC - b.tC;
            })
            .map((userScore) => <Score userScore={userScore} />)
            .reverse()
        ) : (
          <h2 className="total-prompt">Sign In</h2>
        )}
      </ol>

      <h2>Lifetime % Correct</h2>
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
  );
};

export default LeaderBoardRoute;
