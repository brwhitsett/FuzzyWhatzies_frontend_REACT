import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import Header from "./components/Header";
import LeaderBoardRoute from "./components/LeaderBoardRoute";
import MainRoute from "./components/MainRoute";
import NewGameRoute from "./components/NewGameRoute";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/game" element={<NewGameRoute />} />
          <Route path="/leaderboard" element={<LeaderBoardRoute />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
