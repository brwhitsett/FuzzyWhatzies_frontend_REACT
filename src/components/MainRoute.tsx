import "./MainRoute.css";
import AuthContext from "../context/AuthContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const MainRoute = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <div className="MainRoute">
      {user ? (
        <h2>Welcome Back, {user?.displayName}!</h2>
      ) : (
        <h2>Sign In to Play!</h2>
      )}
      <ul>
        <li>
          <button onClick={() => navigate("/game")}>New Game</button>
        </li>
        <li>
          <button onClick={() => navigate("/howto")}>How To Play</button>
        </li>
        <li>
          <button onClick={() => navigate("/leaderboard")}>Leaderboard</button>
        </li>
        <li>
          <button onClick={() => navigate("/stats")}>Stats</button>
        </li>
      </ul>
    </div>
  );
};

export default MainRoute;
