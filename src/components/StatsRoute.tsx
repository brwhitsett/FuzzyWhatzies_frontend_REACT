import { useContext, useEffect, useState } from "react";
import AuthContext from "../context/AuthContext";
import Session from "../models/Session";
import { getSessionData } from "../services/SessionServices";
import "./StatsRoute.css";

const StatsRoute = () => {
  const [level, setLevel] = useState("");
  const [userSessions, setUserSessions] = useState<Session[]>([]);
  const { user } = useContext(AuthContext);

  const getAndSetUserSessions = async () => {
    getSessionData().then((response) => {
      setUserSessions(response);
    });
  };

  useEffect(() => {
    getAndSetUserSessions().then(() => {});
  }, []);

  return (
    <div className="StatsRoute">
      <select
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
      <h2>Sessions</h2>
      {user ? (
        <ol>
          {level === "Total" || level === ""
            ? user &&
              userSessions
                .map(
                  (userSession) =>
                    user.displayName === userSession.displayName && (
                      <li>
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
                .reverse()
            : user &&
              userSessions
                .map(
                  (userSession) =>
                    user.displayName === userSession.displayName &&
                    userSession.difficulty === level && (
                      <li>
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
      {console.log(userSessions)}
    </div>
  );
};

export default StatsRoute;
