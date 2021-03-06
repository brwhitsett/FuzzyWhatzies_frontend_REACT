import { useNavigate } from "react-router-dom";
import Header from "./Header";
import "./HowToRoute.css";

const HowToRoute = () => {
  return (
    <div className="HowToRoute">
      <div className="main">
        <h2 className="how-to">How to Play:</h2>
        <h3>The Goal:</h3>
        <p className="howto-text">
          We'll show you a Fuzzy (or not so Fuzzy) Whatzie. Answer all of the
          categories within the selected time limit to score points.
        </p>
        <h3>Difficulty:</h3>
        <p className="howto-text">
          Choose which categories to complete within the selected time frame.
        </p>
        <h3>Speed:</h3>
        <p className="howto-text">
          Go at your own pace in the unlimited mode or crank up the speed to
          really challenge yourself!
        </p>
      </div>
    </div>
  );
};

export default HowToRoute;
