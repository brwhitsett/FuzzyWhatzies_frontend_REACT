import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import Session from "../models/Session";
import User from "../models/User";
import { getSessionData } from "../services/SessionServices";
import Header from "./Header";
import { getSingleUserData } from "../services/UserServices";
import "./StatsRoute.css";

const StatsRoute = () => {
  const navigate = useNavigate();
  const [level, setLevel] = useState("");
  const [userSessions, setUserSessions] = useState<Session[]>([]);
  const [userScore, setUserScore] = useState<User>();
  const { user } = useContext(AuthContext);

  const getAndSetUserSessions = async () => {
    getSessionData().then((response) => {
      setUserSessions(response);
    });
  };

  const getAndSetUserScore = async () => {
    getSingleUserData(user?.uid!).then((response) => {
      setUserScore(response);
      console.log(response);
    });
  };

  useEffect(() => {
    getAndSetUserSessions().then(() => {});
    getAndSetUserScore().then(() => {});
  }, []);

  return (
    <div className="StatsRoute">
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

      {user ? (
        level === "" || level === "Total" ? (
          <>
            <h2 className="game-history"> Total Game History</h2>
            <div className="gamehistory-area">
              <p>Total Questions: {userScore?.tT!} </p>
              <p>Question Correct: {userScore?.tC!} </p>
              <p>
                Percentage Correct:{" "}
                {`${((userScore?.tC! / userScore?.tT!) * 100).toFixed(0)}%`}{" "}
              </p>
            </div>
          </>
        ) : level === "Easy" ? (
          <>
            <h2 className="game-history"> Easy Game History</h2>
            <div className="gamehistory-area">
              <p>Total Questions: {userScore?.eT!} </p>
              <p>Question Correct: {userScore?.eC!} </p>
              <p>
                Percentage Correct:{" "}
                {`${((userScore?.eC! / userScore?.eT!) * 100).toFixed(0)}%`}
              </p>
            </div>
          </>
        ) : level === "Medium" ? (
          <>
            <h2 className="game-history"> Medium Game History</h2>
            <div className="gamehistory-area">
              <p>Total Questions: {userScore?.mT!} </p>
              <p>Question Correct: {userScore?.mC!} </p>
              <p>
                Percentage Correct:{" "}
                {`${((userScore?.mC! / userScore?.mT!) * 100).toFixed(0)}%`}{" "}
              </p>
            </div>
          </>
        ) : level === "Hard" ? (
          <>
            <h2 className="game-history"> Hard Game History</h2>
            <div className="gamehistory-area">
              <p>Total Questions: {userScore?.hT!} </p>
              <p>Question Correct: {userScore?.hC!} </p>
              <p>
                Percentage Correct:{" "}
                {`${((userScore?.hC! / userScore?.hT!) * 100).toFixed(0)}%`}
              </p>
            </div>
          </>
        ) : (
          level === "Insanus" && (
            <>
              <h2 className="game-history"> Insanus Game History</h2>
              <div className="gamehistory-area">
                <p>Total Questions: {userScore?.iT!} </p>
                <p>Question Correct: {userScore?.iC!} </p>
                <p>
                  Percentage Correct:{" "}
                  {`${((userScore?.iC! / userScore?.iT!) * 100).toFixed(0)}%`}{" "}
                </p>
              </div>
            </>
          )
        )
      ) : (
        <p>Sign In To See Your Game History</p>
      )}
      <div className="session-area">
        {level === "" ? (
          <h2 className="sessions">Last 3 Sessions</h2>
        ) : (
          <h2 className="sessions">Sessions</h2>
        )}

        {user ? (
          <ol className="orderedlist-container">
            {level === ""
              ? userSessions
                  .map(
                    (userSession) =>
                      user.displayName === userSession.displayName && (
                        <li className="session-list">
                          <p>Name: {userSession.displayName}</p>
                          <p>Difficulty: {userSession.difficulty}</p>
                          <p>Speed: {userSession.speed}</p>
                          <p>Correct: {userSession.correct}</p>

                          <p>
                            Percent Correct:
                            {`${(
                              (userSession.correct / userSession.total) *
                              100
                            ).toFixed(0)}%`}
                          </p>
                        </li>
                      )
                  )
                  .slice(0, 3)
                  .reverse()
              : userSessions
                  .map(
                    (userSession) =>
                      user.displayName === userSession.displayName &&
                      (userSession.difficulty === level ||
                        level === "Total") && (
                        <li className="session-list">
                          <p>Name: {userSession.displayName}</p>
                          <p>Difficulty: {userSession.difficulty}</p>
                          <p>Speed: {userSession.speed}</p>
                          <p>Correct: {userSession.correct}</p>
                          <p>
                            Percent Correct:
                            {`${(
                              (userSession.correct / userSession.total) *
                              100
                            ).toFixed(0)}%`}
                          </p>
                        </li>
                      )
                  )
                  .reverse()}
          </ol>
        ) : (
          <h3>Sign In To See Your Session Info</h3>
        )}
      </div>
      {console.log(userSessions)}
    </div>
  );
};

export default StatsRoute;
