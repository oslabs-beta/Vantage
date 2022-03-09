import { configureStore } from '@reduxjs/toolkit';
import dataReducer from './dataSlice';
import currentViewReducer from './currentViewSlice';

export default configureStore({
  reducer: {
    data: dataReducer,
    currentView: currentViewReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});