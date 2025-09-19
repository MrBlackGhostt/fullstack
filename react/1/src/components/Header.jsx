// Create the Header componenet here
import React from "react";
import { useState } from "react";
// import Close from "../assets/close.svg";
// import Hamburger from "../assets/hamburger.svg";
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
    </div>
  );
};

export default Header;
