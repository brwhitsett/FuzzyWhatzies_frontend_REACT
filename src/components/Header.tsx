import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import { signInWithGoogle, signOut } from "../firebaseConfig";
import { getSingleUserData, sendNewUserData } from "../services/UserServices";
import "./Header.css";

const Header = () => {
  const { user } = useContext(AuthContext);

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
      <Link className="header-link" to="/">
        <div className="title-border">
          <h1>
            <div className="circle">
              <i className="fa-solid fa-paw"></i>
            </div>
            <div className="fuzzy-whatzies">
              <p className="fuzzy"> Fuzzy </p>
              <p className="whatzies"> WHATZIES </p>
            </div>
          </h1>
        </div>
      </Link>
      <div className="google">
        {user ? (
          <div>
            <p className="username">{user.displayName}</p>
            <button className="google-btn" onClick={signOut}>
              Sign Out
            </button>
          </div>
        ) : (
          <div>
            <button className="google-btn" onClick={signInWithGoogle}>
              Sign In
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
