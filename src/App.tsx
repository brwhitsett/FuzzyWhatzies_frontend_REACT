import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HowToRoute from "./components/HowToRoute";
import LeaderBoardRoute from "./components/LeaderBoardRoute";
import MainRoute from "./components/MainRoute";
import NewGameRoute from "./components/NewGameRoute";
import StatsRoute from "./components/StatsRoute";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<MainRoute />} />
          <Route path="/howto" element={<HowToRoute />} />
          <Route path="/game" element={<NewGameRoute />} />
          <Route path="/stats" element={<StatsRoute />} />
          <Route path="/leaderboard" element={<LeaderBoardRoute />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
