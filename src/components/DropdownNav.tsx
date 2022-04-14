import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Difficulty from "../models/Difficulty";
import "./DropdownNav.css";

interface Props {
  gameDifficulty: Difficulty;
}

const DropdownNav = () => {
  const [level, setLevel] = useState("");

  return (
    <div className="Dropdown">
      {}
      <select
        name="difficulty-dropdown"
        id="difficulty-dropdown"
        onChange={(e) => setLevel(e.target.value)}
        value={level}
      >
        <option value="" disabled selected hidden>
          Difficulty
        </option>
        <option value="easy"> Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
        <option value="insanus">Insanus</option>
      </select>
    </div>
  );
};

export default DropdownNav;
