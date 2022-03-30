import { createSlice } from "@reduxjs/toolkit";
 
//manages what the user is viewing
export const currentViewSlice = createSlice({
  name: "currentView",
  initialState: {
    currentMetric: "default",
    currentEndpoint: "/",
    //initialize performance metrics as not selected
    performanceMetrics: {
      FCP: false,
      SI: false,
      LCP: false,
      TTI: false,
      TBT: false,
      CLS: false,
    },
    //initialize selected commit points as empty
    runValueArr: [],
    runValueArrSort: [],
    selectorSwitch: false,
  },
  reducers: {
    //changes which metric the user is viewing
    changeMetric: (state, action) => {
      const regex = /Performance|Accessibility|Best Practices|SEO|default/;
      if (regex.test(action.payload)) state.currentMetric = action.payload;
      else throw "changeMetric payload incorrect";
    },
    //changes which endpoint the user is viewing
    changeEndpoint: (state, action) => {
      state.currentEndpoint = action.payload;
    },
    //changes which metric the user is viewing
    changePerformanceMetrics: (state, action) => {
      state.performanceMetrics[action.payload] =
        !state.performanceMetrics[action.payload];
    },
    //adds a selected commit to the run value array
    addRunValue: (state, action) => {
      if (state.currentMetric !== "default") {
        //check if range mode is selected
        if (state.selectorSwitch && state.runValueArr[1] !== action.payload) {
          const run = action.payload;
          if (state.runValueArr.length >= 2) state.runValueArr.shift();
          if (run !== state.runValueArr[0]) state.runValueArr.push(run);
          //sort the selected commits to keep track of which was first selected
          state.runValueArrSort = state.runValueArr.slice().sort();
        } else if(!state.selectorSwitch) {
          state.runValueArr = state.runValueArrSort = [action.payload];
        }
      }
    },
    //clears run value array
    resetRunValue: (state, action) => {
      state.runValueArr = state.runValueArrSort = [action.payload];
    },
    //toggle between single and range view
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

export const getCurrentMetric = (state) => state.currentView.currentMetric;
export const getCurrentEndpoint = (state) => state.currentView.currentEndpoint;
export const selectPerformanceMetrics = (state) =>
  state.currentView.performanceMetrics;

export default currentViewSlice.reducer;
