import React, { useState } from "react";
import { IntlProvider } from "react-intl";
import English from "../lang/en-ca.json";
import French from "../lang/fr-ca.json";

export const LangContext = React.createContext();

function LangProvider({ children }) {
  let initLocale = navigator.language;
  const getMessage = (locale) => {
    switch (locale) {
      case "fr-ca":
        return French;
      default:
        return English;
    }
  };
  let initMessage = getMessage(initLocale);

  const [locale, setLocale] = useState(initLocale);
  const [message, setMessage] = useState(initMessage);

  const switchLang = (v) => {
    let newLocale = v;
    setLocale(newLocale);
    setMessage(getMessage(newLocale));
  };
  return (
    <LangContext.Provider value={{ switchLang }}>
      <IntlProvider messages={message} locale={locale}>
        {children}
      </IntlProvider>
    </LangContext.Provider>
  );
}

export default LangProvider;
