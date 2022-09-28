import React, { useState } from "react";
import { IntlProvider } from "react-intl";
import { useDispatch, useSelector } from "react-redux";
import { selectLanguage } from "../../redux/slices/languageSlice";

const Wrapper = (props) => {
  const { language } = useSelector(selectLanguage);

  console.log(language)
  return (
    <IntlProvider messages={language.lang} locale={language.language}>
      {props.children}
    </IntlProvider>
  );
};

export default Wrapper;
