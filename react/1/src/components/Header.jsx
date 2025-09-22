// Create the Header componenet here
import React from "react";
import { useState, useContext } from "react";
// import Close from "../assets/close.svg";
// import Hamburger from "../assets/hamburger.svg";i
import LanguageContext from "../context/index.js";
// import { lang } from "../translations/index.js";
import { Link } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import LanguageDropdown from "./LanguageDropdown";
import { FormattedMessage } from "react-intl";
// import { lang } from "../translations";

const Header = () => {
  const [show, setShow] = useState(false);
  const context = useContext(LanguageContext);
  const { language } = context;
  // const { language, setLanguage } = context;
  console.log("Header", language);
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
        <Link to="/text" activeclassname="active">
          <FormattedMessage id="goText" />
        </Link>

        <Link to="/no">
          <FormattedMessage id="goNumber" />
        </Link>
        <Link to="/time">
          <FormattedMessage id="goTime" />
        </Link>
      </nav>
      <LanguageDropdown />
    </div>
  );
};

export default Header;
