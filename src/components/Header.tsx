import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import { signInWithGoogle, signOut } from "../firebaseConfig";
import { getSingleUserData, sendNewUserData } from "../services/UserServices";
import "./Header.css";

const Header = () => {
  const { user } = useContext(AuthContext);

  const checkUser = getSingleUserData(user?.uid!);

  //   useEffect(() => {
  //     console.log(checkUser);
  // if(checkUser
  //    !== user?.uid!)
  //we need to find a way to get UID from checkUser object.
  //     sendNewUserData(user?.uid!);
  //     console.log(user?.uid!);
  //   }, [user]);

  return (
    <header className="Header">
      <Link to="/">
        <h1>Fuzzie Whatsies</h1>
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
