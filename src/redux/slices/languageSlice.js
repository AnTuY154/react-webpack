import { createSlice } from "@reduxjs/toolkit";
import English from "../../languages/en.json";
import Vietnamese from "../../languages/vn.json";

const initialState = {
  language: "en",
  lang: English,
};

export const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    changeLanguage: (state, action) => {
      console.log(`i'm change to ${action.payload}`);
    },
    changeLanguageSuccess: (state, action) => {
      console.log(`i'm change to ${action.payload} success`);
      state.language = action.payload.language;
      if (action.payload.language === "en") {
        state.lang = English;
      } else {
        state.lang = Vietnamese;
      }
    },
  },
});

export const { changeLanguage, changeLanguageSuccess } = languageSlice.actions;

export const selectLanguage = (state) => state;

export default languageSlice.reducer;
