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
        <h1>
          <i className="fa-solid fa-paw"></i>{" "}
          <span className="fuzzy"> Fuzzy </span>Whatzies
        </h1>
      </Link>
      {user ? (
        <div>
          <p>{user.displayName}</p>
          <button onClick={signOut}>Sign Out</button>
        </div>
      ) : (
        <div>
          <button onClick={signInWithGoogle}>Sign In</button>
        </div>
      )}
    </header>
  );
};

export default Header;
