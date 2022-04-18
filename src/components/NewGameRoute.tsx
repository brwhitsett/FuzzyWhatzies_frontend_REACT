import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Animal from "../models/Animal";
import { getSingleAnimal } from "../services/AnimalServices";
import "./NewGameRoute.css";
import QuestionCard from "./QuestionCard";

const NewGameRoute = () => {
  const [difficulty, setDifficulty] = useState("");
  const [speed, setSpeed] = useState("");
  const [animal, setAnimal] = useState<Animal>();
  const navigate = useNavigate();

  const getAndSetAnimal = () => {
    getSingleAnimal().then((response) => {
      setAnimal(response);
    });
  };

  useEffect(() => {
    getAndSetAnimal();
  }, [difficulty]);

  return (
    <div className="NewGameRoute">
      <Header />
      <div className="new-game-div">
        {!speed ?? (
          <img
            className="desktop-img"
            src={animal?.image_link}
            alt={animal?.diet}
          />
        )}
        <ul>
          {!difficulty && (
            <>
              <h3>Select Difficulty</h3>
            </>
          )}
          {!speed && difficulty && (
            <>
              <h3>Select Speed</h3>
            </>
          )}
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
