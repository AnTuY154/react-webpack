import React from "react";
import { IntlProvider } from "react-intl";
import { useSelector } from "react-redux";
import { selectLanguage } from "../../redux/slices/languageSlice";

const Wrapper = (props) => {
  const { language } = useSelector(selectLanguage);
  return (
    <IntlProvider messages={language.lang} locale={language.language}>
      {props.children}
    </IntlProvider>
  );
};

export default Wrapper;
