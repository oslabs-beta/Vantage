import { createSlice } from "@reduxjs/toolkit";

export const currentViewSlice = createSlice({
  name: "currentView",
  initialState: {
    // theme: window.matchMedia('(prefers-color-scheme: dark)').matches ? "dark" : "light",
    theme: "light",
    currentMetric: "default",
  },
  reducers: {
    changeTheme: (state) => {
      state.theme = state.theme === "light" ? "dark" : "light";
    },
    changeMetric: (state, action) => {
      const regex = /Performance|Accessibility|Best Practices|SEO|default/;
      if (regex.test(action.payload)) state.currentMetric = action.payload;
      else throw "changeMetric payload incorrect";
    },
  },
});

export const { changeTheme, changeMetric } = currentViewSlice.actions;

export const getTheme = (state) => state.currentView.theme;
export const getCurrentMetric = (state) => state.currentView.currentMetric;

export default currentViewSlice.reducer;
