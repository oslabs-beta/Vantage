import React, {useEffect, useLayoutEffect, useMemo} from 'react';
import MainContainer from './containers/MainContainer';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { getTheme } from './store/currentViewSlice';
import { useSelector} from 'react-redux';
import './styles.scss';


const App1 = () => {
  const mode = useSelector(getTheme);

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === 'light'
            ? {
              // palette values for light mode
              primary: {
                main: '#4b2271',
                light: '#bab9d4',
              },
              secondary: {
                main: '#283885',
              },
              background: {
                default: '#bab9d4',
                paper: '#ededf5',
              },
            }
            : {
              // palette values for dark mode
              // primary: {
              //   main: '#fff',
              //   light: '#121212',
              // },
              // background: {
              //   default: '#121212',
              //   paper: '#121212',
              // },
              // text: {
              //   primary: '#fff',
              //   secondary: '#fff',
              // },
            }),
          
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

export default App1;