import { useEffect, useState } from "react";
import User from "../models/User";
import "./LeaderBoardRoute.css";
import { getUserData } from "../services/UserServices";
import Score from "./Score";
const LeaderBoardRoute = () => {
  const [userData, setUserData] = useState<User[]>([]);

  const getAndSetUserData = async () => {
    getUserData().then((response) => {
      setUserData(response);
      console.log(response);
    });
  };

  useEffect(() => {
    getAndSetUserData();
    console.log(getAndSetUserData());
  }, []);

  return (
    <div className="LeaderBoardRoute">
      {/* figure out how to put back to main in header specifically for leaderboardroute */}

      <h2>Lifetime Total Questions Correct</h2>
      <div>
        <ol>
          <li>
            <p>Brittany</p>
            <p>675 questions correct</p>
          </li>
          <li>
            TODO make these dynamic and pull list items from collection in
            database
          </li>
          <li>
            <Score />
          </li>
        </ol>
      </div>
      <h2>Lifetime % Correct</h2>
      <div>
        <ol>
          <li>TODO make these dynamic pull in from leaderboard</li>
        </ol>
      </div>
    </div>
  );
};

export default LeaderBoardRoute;
