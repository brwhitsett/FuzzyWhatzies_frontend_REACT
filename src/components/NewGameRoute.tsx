import { useState } from "react";
import "./NewGameRoute.css";
import QuestionCard from "./QuestionCard";

const NewGameRoute = () => {
  const [difficulty, setDifficulty] = useState("");
  const [speed, setSpeed] = useState("");

  return (
    <div className="NewGameRoute">
      <ul>
        {!difficulty && (
          <>
            <h2>Select Difficulty</h2>
            <li>
              <button onClick={() => setDifficulty("easy")}>Easy</button>
            </li>
            <p>Animal Type</p>
            <li>
              <button onClick={() => setDifficulty("medium")}>Medium</button>
            </li>
            <p>Easy + Active Time</p>
            <li>
              <button onClick={() => setDifficulty("hard")}>Hard</button>
            </li>
            <p>Medium + Name</p>
            <li>
              <button onClick={() => setDifficulty("insanus")}>Insanus</button>
            </li>
            <p>Hard + Latin Name</p>
          </>
        )}
        {!speed && difficulty && (
          <>
            <h2>Select Speed</h2>
            <li>
              <button onClick={() => setSpeed("unlimited")}>Unlimited</button>
            </li>
            <p>No Time Limit</p>
            <li>
              <button onClick={() => setSpeed("tortise")}>Tortise</button>
            </li>
            <p>45 Second Time Limit</p>
            <li>
              <button onClick={() => setSpeed("Cheetah")}>Cheetah</button>
            </li>
            <p>30 Second Time Limit</p>
            <li>
              <button onClick={() => setSpeed("falcon")}>
                Peregrine Falcon
              </button>
            </li>
            <p>15 Second Time Limit</p>
          </>
        )}
      </ul>
      {difficulty && speed && <QuestionCard />}
    </div>
  );
};

export default NewGameRoute;
