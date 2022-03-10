import { createSlice } from "@reduxjs/toolkit";
import sampleData from "./sampleData";
//"run-list", "endpoints", "commits", "web-vitals", "binary", "numeric", "informative", "notApplicable"

const data =
  process.env.NODE_ENV === "production"
    ? { ...window.__VANTAGE_JSON__ }
    : sampleData;

export const dataSlice = createSlice({
  name: "data",
  initialState: data,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = dataSlice.actions;

export const selectWebVitals = (state) => state.data["web-vitals"];
export const selectRunList = (state) => state.data["run-list"];
export const selectEndpoints = (state) => state.data.endpoints;
export const selectCommits = (state) => state.data.commits;
export const selectOverallScoreByEndpoint = (state, endpoint) =>
  state.data["overall-scores"][endpoint];

export const selectMostRecentWebVital = (state, webVital, endpoint) => {
  const runList = state.data["run-list"];
  return state.data["web-vitals"][webVital].results[endpoint][
    runList[runList.length - 1]
  ];
};

export const selectWebVitalData = (state, webVital, endpoint) =>
  state.data["web-vitals"][webVital].results[endpoint];

export default dataSlice.reducer;
