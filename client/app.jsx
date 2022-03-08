import React from 'react';
import MainContainer from './containers/MainContainer';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div id="app">
        <CssBaseline />
        <MainContainer/>
      </div>
    </ThemeProvider>
  )
};

export default App;