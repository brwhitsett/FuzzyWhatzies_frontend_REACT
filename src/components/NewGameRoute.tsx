import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import "./NewGameRoute.css";
import QuestionCard from "./QuestionCard";

const NewGameRoute = () => {
  const [difficulty, setDifficulty] = useState("");
  const [speed, setSpeed] = useState("");
  const navigate = useNavigate();

  return (
    <div className="NewGameRoute">
      <Header />
      <div className="main">
        {!difficulty && (
          <>
            <h2>Select Difficulty</h2>
          </>
        )}
        {!speed && difficulty && (
          <>
            <h2>Select Speed</h2>
          </>
        )}
        {difficulty && speed && (
          <>
            <h2>Whatsies?</h2>
          </>
        )}

        <ul>
          {!difficulty && (
            <>
              <li>
                <button
                  className="game-btn"
                  onClick={() => setDifficulty("Easy")}
                >
                  Easy
                </button>
              </li>
              <p>Animal Type</p>
              <li>
                <button
                  className="game-btn"
                  onClick={() => setDifficulty("Medium")}
                >
                  Medium
                </button>
              </li>
              <p>Easy + Active Time</p>
              <li>
                <button
                  className="game-btn"
                  onClick={() => setDifficulty("Hard")}
                >
                  Hard
                </button>
              </li>
              <p>Medium + Name</p>
              <li>
                <button
                  className="game-btn"
                  onClick={() => setDifficulty("Insanus")}
                >
                  Insanus
                </button>
              </li>
              <p>Hard + Latin Name</p>
            </>
          )}
          {!speed && difficulty && (
            <>
              <li>
                <button
                  className="game-btn"
                  onClick={() => setSpeed("Unlimited")}
                >
                  Unlimited
                </button>
              </li>
              <p>No Time Limit</p>
              <li>
                <button
                  className="game-btn"
                  onClick={() => setSpeed("Tortoise")}
                >
                  Tortoise
                </button>
              </li>
              <p>45 Second Time Limit</p>
              <li>
                <button
                  className="game-btn"
                  onClick={() => setSpeed("Cheetah")}
                >
                  Cheetah
                </button>
              </li>
              <p>30 Second Time Limit</p>
              <li>
                <button
                  className="game-btn"
                  onClick={() => setSpeed("Peregrine Falcon")}
                >
                  Peregrine Falcon
                </button>
              </li>
              <p>15 Second Time Limit</p>
            </>
          )}
          {difficulty && speed && (
            <QuestionCard difficulty={difficulty} speed={speed} />
          )}
        </ul>
      </div>
    </div>
  );
};

export default NewGameRoute;
