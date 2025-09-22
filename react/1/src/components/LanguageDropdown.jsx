import React, { useContext } from "react";
import LanguageContext from "../context";

const LanguageDropdown = () => {
  const { setLanguage } = useContext(LanguageContext);
  return (
    <select onChange={(e) => setLanguage(e.target.value)}>
      <option value="en">English</option>
      <option value="hi">हिंदी</option>
      <option value="fr">Français</option>
    </select>
  );
};

export default LanguageDropdown;
