import { createSlice } from '@reduxjs/toolkit';

export const currentViewSlice = createSlice({
  name: 'currentView',
  initialState: {
    theme: 'light',
    metric: 'default'
  },
  reducers: {
    changeTheme: state => {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
    },
    changeMetric: (state, action) => {
      const regex = /performance|accessibility|best-practices|seo|default/;
      if(regex.test(action.payload)) state.metric = action.payload;
      else throw('changeMetric payload incorrect');
    }
  }
});

export const { changeTheme, changeMetric } = currentViewSlice.actions;

export const getTheme = (state) => state.currentView.theme;

export default currentViewSlice.reducer;