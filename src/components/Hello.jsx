import React, { useEffect } from "react";
import Test from "../svgFile/test.svg";
import { selectLanguage, changeLanguage } from "../redux/slices/languageSlice";
import { useDispatch, useSelector } from "react-redux";
import {FormattedMessage, useIntl} from "react-intl";

export function Hello(props) {
  const  intl = useIntl();
  const dispatch = useDispatch();
  const { language } = useSelector(selectLanguage);

  const handleChangeLanguage = () => {
    dispatch(changeLanguage({
      language: 'vn'
    }));

  };

  return (
    <div>
      <p>{language.language}</p>
      <p>{intl.formatMessage({id: 'hello'})}</p>
      <button onClick={handleChangeLanguage}>Click me</button>
    </div>
  );
}
