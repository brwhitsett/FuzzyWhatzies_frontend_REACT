import { useState } from "react";
import "./StatsRoute.css";

const StatsRoute = () => {
  const [level, setLevel] = useState("");

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
        <option value="easy"> Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
        <option value="insanus">Insanus</option>
      </select>
    </div>
  );
};

export default StatsRoute;
