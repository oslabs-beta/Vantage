import { createSlice } from "@reduxjs/toolkit";
import sampleData from './sampleData';

export const dataSlice = createSlice({
  name: "data",
  initialState: sampleData,
});

export const selectWebVitals = (state) => state.data["web-vitals"];
export const selectRunList = (state) => state.data["run-list"];
export const selectEndpoints = (state) => state.data.endpoints;
export const selectCommits = (state) => state.data.commits;

export const selectOverallScoreByEndpoint = (state, endpoint) =>
  state.data["overall-scores"][endpoint];

export const selectMostRecentWebVital = (state, webVital, endpoint) => {
  const runList = state.data["run-list"];
  const score =
    state.data["web-vitals"][webVital].results[endpoint][
      runList[runList.length - 1]
    ].score;
  const title = state.data["web-vitals"][webVital].title;
  const description = state.data["web-vitals"][webVital].description;
  return { score, title, description };
};

export const selectWebVitalData = (state, webVital, endpoint) =>
  state.data["web-vitals"][webVital].results[endpoint];

export default dataSlice.reducer;
