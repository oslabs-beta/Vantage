import React, {useEffect, useLayoutEffect, useMemo} from 'react';
import MainContainer from './containers/MainContainer';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
// import { getTheme } from './store/currentViewSlice';
import { useSelector} from 'react-redux';
import './styles.scss';


const App = () => {
  // const mode = useSelector(getTheme);

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          primary: {
            main: '#947fff',
            light: '#cdc4ff',
          },
          secondary: {
            main: '#46b7ff',
            light: '#55fffe'
          },
          background: {
            default: '#131219',
            paper: '#222233',
          },
          text: {
            primary: '#fff'
          }
        }
      }),
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