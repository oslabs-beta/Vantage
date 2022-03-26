import { createSlice } from "@reduxjs/toolkit";
 

export const currentViewSlice = createSlice({
  name: "currentView",
  initialState: {
    theme: "dark",
    currentMetric: "default",
    currentEndpoint: "/",
    performanceMetrics: {
      FCP: false,
      SI: false,
      LCP: false,
      TTI: false,
      TBT: false,
      CLS: false,
    },
    runValueArr: [],
    runValueArrSort: [],
    selectorSwitch: false,
  },
  reducers: {
    changeMetric: (state, action) => {
      const regex = /Performance|Accessibility|Best Practices|SEO|default/;
      if (regex.test(action.payload)) state.currentMetric = action.payload;
      else throw "changeMetric payload incorrect";
    },
    changeEndpoint: (state, action) => {
      state.currentEndpoint = action.payload;
    },
    changePerformanceMetrics: (state, action) => {
      state.performanceMetrics[action.payload] =
        !state.performanceMetrics[action.payload];
    },
    addRunValue: (state, action) => {
      if (state.currentMetric !== "default") {
        //range mode
        if (state.selectorSwitch && state.runValueArr[1] !== action.payload) {
          const run = action.payload;
          if (state.runValueArr.length >= 2) state.runValueArr.shift();
          if (run !== state.runValueArr[0]) state.runValueArr.push(run);
          state.runValueArrSort = state.runValueArr.slice().sort();
        } else if(!state.selectorSwitch) {
          state.runValueArr = state.runValueArrSort = [action.payload];
        }
      }
    },
    resetRunValue: (state, action) => {
      state.runValueArr = state.runValueArrSort = [action.payload];
    },
    changeSelectorSwitch: (state) => {
      state.selectorSwitch = !state.selectorSwitch;
      if (state.runValueArr.length >= 2 && !state.selectorSwitch) {
        state.runValueArr.shift();
        state.runValueArrSort = state.runValueArr;
      }
    },
  },
});

export const {
  changeTheme,
  changeMetric,
  changeEndpoint,
  changePerformanceMetrics,
  addRunValue,
  resetRunValue,
  changeSelectorSwitch,
} = currentViewSlice.actions;

// export const getTheme = (state) => state.currentView.theme;
export const getCurrentMetric = (state) => state.currentView.currentMetric;
export const getCurrentEndpoint = (state) => state.currentView.currentEndpoint;
export const selectPerformanceMetrics = (state) =>
  state.currentView.performanceMetrics;

export default currentViewSlice.reducer;
