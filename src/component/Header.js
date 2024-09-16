import { LOGO_URL } from "../utils/constants";
import { useState, useEffect } from "react";

const Header = () => {
  const [btnName, setbtnName] = useState("Login");

  const loginClicked = () => {
    btnName === "Login" ? setbtnName("Logout") : setbtnName("Login");
  };

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL}></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
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
