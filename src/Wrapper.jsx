import React, { useState } from 'react';
import { IntlProvider } from 'react-intl';
import English from './languages/en.json';
import Polish from './languages/pl.json';

export const Context = React.createContext();
let local = localStorage.getItem('lang') || 'en';

let lang;
if (local === 'en') lang = English;
else lang = Polish;

const Wrapper = (props) => {
  const [locale, setLocale] = useState(local);
  const [messanges, setMessenges] = useState(lang);

  function selectLang(e) {
    localStorage.setItem('lang', e.value);
    setLocale(e.value);
    e.value === 'en' ? setMessenges(English) : setMessenges(Polish);
  }
  function getLang() {
    return localStorage.getItem('lang') || 'en';
  }

  return (
    <Context.Provider value={{ selectLang, locale, getLang }}>
      <IntlProvider messages={messanges} locale={locale}>
        {props.children}
      </IntlProvider>
    </Context.Provider>
  );
};

export default Wrapper;
