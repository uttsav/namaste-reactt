import { LOGO_URL } from "../utils/constants";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnName, setbtnName] = useState("Login");

  const loginClicked = () => {
    btnName === "Login" ? setbtnName("Logout") : setbtnName("Login");
  };

  const onlineStatus = useOnlineStatus();

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL}></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Online Status : {onlineStatus ? "🟢" : "🔴"}</li>
          {onlineStatus ? (
            <>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
              <li>
                <Link to="/grocery">Grocery</Link>
              </li>
              <li>Cart</li>
            </>
          ) : (
            ""
          )}
        </ul>
        <button
          className="login"
          onClick={() => {
            loginClicked();
          }}
        >
          {btnName}
        </button>
      </div>
    </div>
  );
};

export default Header;
