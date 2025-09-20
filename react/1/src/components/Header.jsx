// Create the Header componenet here
import React from "react";
import { useState } from "react";
// import Close from "../assets/close.svg";
// import Hamburger from "../assets/hamburger.svg";i
import { Link } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
const Header = () => {
  const [show, setShow] = useState(false);

  const handleIconClose = () => {
    setShow((prev) => !prev);
  };
  return (
    <div className="header">
      <div>
        <img src="./vite.svg" />
      </div>
      <div onClick={handleIconClose}>
        {show ? <GiHamburgerMenu /> : <IoMdClose />}
      </div>
      <nav
        style={{
          display: show ? "flex" : "none",
          flexDirection: "column",
          gap: 8,
        }}
        // className={}
      >
        <span>Add Links here!</span>
        <Link to="/text">Go Text</Link>
        <Link to="/no">Go Numer</Link>
        <Link to="/time">Go Time</Link>
      </nav>
    </div>
  );
};

export default Header;
