import React, {useEffect, useLayoutEffect, useMemo} from 'react';
import MainContainer from './containers/MainContainer';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { getTheme } from './store/currentViewSlice';
import { useSelector} from 'react-redux';


const App = () => {
  const mode = useSelector(getTheme);

  useEffect(()=>{
    console.log('this is a test');
    console.log('vantage_json', window.__VANTAGE_JSON__);
  },[]);

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );

  return (
    <ThemeProvider theme={theme}>
      <div id="app">
        <CssBaseline />
        <MainContainer/>
      </div>
    </ThemeProvider>
  );
};

export default App;