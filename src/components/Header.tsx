import { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import { signInWithGoogle, signOut } from "../firebaseConfig";
import { getSingleUserData, sendNewUserData } from "../services/UserServices";
import "./Header.css";

const Header = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      getSingleUserData(user?.uid!).then((response) => {
        if (!response) {
          sendNewUserData(user?.uid!, user?.displayName!).then(() => {});
        }
      });
    }
  }, [user]);

  return (
    <header className="Header">
      <div className="google">
        {user ? (
          <button className="google-btn head-btn" onClick={signOut}>
            Sign Out
          </button>
        ) : (
          <button className="google-btn head-btn" onClick={signInWithGoogle}>
            Sign In
          </button>
        )}
        <button className="back-btn head-btn" onClick={() => navigate("/")}>
          Back
        </button>
      </div>
      <Link className="header-link" to="/">
        <div className="header-container">
          <div className="circle">
            <i className="fa-solid fa-paw"></i>
          </div>

          <div className="fuzzy-whatzies">
            <h1 className="fuzzy"> Fuzzy </h1>
            <h1 className="whatzies"> WHATZIES </h1>
          </div>
        </div>
      </Link>
    </header>
  );
};

export default Header;
