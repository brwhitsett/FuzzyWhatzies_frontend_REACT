// import {
//   BrowserRouter as Router,
//   Navigate,
//   Route,
//   Routes,
// } from "react-router-dom";

import { useEffect } from "react";
import { getSessionData, sendNewSessionData } from "./services/SessionServices";
import { getUserData, sendNewUserData } from "./services/UserServices";

function App() {
  useEffect(() => {
    // sendNewSessionData({
    //   uid: "string",
    //   name: "Dusan",
    //   difficulty: "Easy",
    //   speed: 5,
    //   correct: 5,
    //   incorrect: 5,
    //   total: 10,
    // }).then((response) => {
    //   console.log(response);
    // });
    sendNewUserData({
      uid: "string",
      name: "string",
      eC: 0,
      eI: 0,
      eT: 0,
      mC: 0,
      mI: 0,
      mT: 0,
      hC: 0,
      hI: 0,
      hT: 0,
      iC: 0,
      iI: 0,
      iT: 0,
      tT: 0,
      tC: 0,
      tI: 0,
    });
  }, []);
  return <div className="App">{console.log("hey")};</div>;
}

export default App;
