import { createSlice } from "@reduxjs/toolkit";

import sampleData from "./sampleData";
const data =
  process.env.NODE_ENV === "production"
    ? { ...window.__VANTAGE_JSON__ }
    : sampleData;
// : null;

export const dataSlice = createSlice({
  name: "data",
  initialState: data,
});

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
