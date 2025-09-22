import { useState } from "react";
import LanguageContext from "./index.js";
import { IntlProvider } from "react-intl";
import { lang } from "../translations/index.js";
const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");
  const { en, fr, hi } = lang;
  const messages = { en, hi, fr };
  return (
    <IntlProvider
      defaultLocale="en"
      locale={language}
      messages={messages[language]}>
      <LanguageContext.Provider value={{ language, setLanguage }}>
        {children}
      </LanguageContext.Provider>
    </IntlProvider>
  );
};

export default LanguageProvider;
// function MyProvider

// export const langContext = LanguageContext;
