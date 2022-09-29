import React from "react";
import { selectLanguage, changeLanguage } from "../redux/slices/languageSlice";
import { useDispatch, useSelector } from "react-redux";
import { useIntl } from "react-intl";

export function Hello() {
  const intl = useIntl();
  const dispatch = useDispatch();
  const { language } = useSelector(selectLanguage);

  const handleChangeLanguage = () => {
    dispatch(
      changeLanguage({
        language: "vn",
      })
    );
  };

  return (
    <div>
      <p>{language.language}</p>
      <p>{intl.formatMessage({ id: "hello" })}</p>
      <button onClick={handleChangeLanguage}>Click me</button>
    </div>
  );
}
