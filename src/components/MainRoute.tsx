import "./MainRoute.css";
import AuthContext from "../context/AuthContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

const MainRoute = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <div className="MainRoute">
      <div className="main-section">
        {user ? (
          <h2>Welcome Back, {user?.displayName}!</h2>
        ) : (
          <h2>Sign In to Play!</h2>
        )}
        <ul>
          <li>
            <button className="main-btn" onClick={() => navigate("/game")}>
              New Game
            </button>
          </li>
          <li>
            <button className="main-btn" onClick={() => navigate("/howto")}>
              How To Play
            </button>
          </li>
          <li>
            <button
              className="main-btn"
              onClick={() => navigate("/leaderboard")}
            >
              Leaderboard
            </button>
          </li>
          <li>
            <button className="main-btn" onClick={() => navigate("/stats")}>
              Stats
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MainRoute;
