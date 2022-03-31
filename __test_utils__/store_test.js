import { configureStore } from "@reduxjs/toolkit";
import currentViewReducer from "../client/store/currentViewSlice";

// Test version of data Slice
import dataReducer from "./dataSlice_test";

export default configureStore({
  reducer: {
    data: dataReducer,
    currentView: currentViewReducer,
  },
});
