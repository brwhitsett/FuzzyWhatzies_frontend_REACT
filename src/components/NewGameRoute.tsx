import { useState } from "react";
import "./NewGameRoute.css";

const NewGameRoute = () => {
  const [difficulty, setDifficulty] = useState("");
  const [speed, setSpeed] = useState("");

  return (
    <div className="NewGameRoute">
      <h2>New Game</h2>
      <ul>
        {/* {Start of speed buttons} */}

        {console.log(speed)}
        {console.log(difficulty)}
        {!difficulty && (
          <>
            <li>
              <button onClick={() => setDifficulty("easy")}>Easy</button>
            </li>
            <p>Type</p>
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
            {" "}
            <li>
              <button onClick={() => setSpeed("unlimited")}>Unlimited</button>
            </li>
            <p>Type</p>
            <li>
              <button onClick={() => setSpeed("tortise")}>Tortise</button>
            </li>
            <p>Easy + Active Time</p>
            <li>
              <button onClick={() => setSpeed("Cheetah")}>Cheetah</button>
            </li>
            <p>Medium + Name</p>
            <li>
              <button onClick={() => setSpeed("falcon")}>
                Peregrine Falcon
              </button>
            </li>
            <p>Hard + Latin Name</p>
          </>
        )}
      </ul>
    </div>
  );
};

export default NewGameRoute;
