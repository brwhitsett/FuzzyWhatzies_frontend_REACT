import "./MainRoute.css";
import AuthContext from "../context/AuthContext";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Animal from "../models/Animal";
import { getSingleAnimal } from "../services/AnimalServices";

const MainRoute = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [animal, setAnimal] = useState<Animal>();

  const getAndSetAnimal = () => {
    getSingleAnimal().then((response) => {
      setAnimal(response);
    });
  };

  useEffect(() => {
    getAndSetAnimal();
  }, []);

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
          <li>
            <button className="main-btn" onClick={() => navigate("/aboutus")}>
              About Us
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MainRoute;
