import { createSlice } from '@reduxjs/toolkit';
import sampleData from './sampleData';
//"run-list", "endpoints", "commits", "web-vitals", "binary", "numeric", "informative", "notApplicable"

const data = process.env.NODE_ENV === 'production' 
  ? {...window.__VANTAGE_JSON__} 
  : sampleData;

export const dataSlice = createSlice({
  name: 'data',
  initialState: data,
  reducers: {
    increment: state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    }
  }
});

export const { increment, decrement, incrementByAmount } = dataSlice.actions;
export const getWebVitals = (state) => state.data["web-vitals"];

export default dataSlice.reducer;