import React, { useMemo } from "react";
import MainContainer from "./containers/MainContainer";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./styles.scss";
import Waves from "./assets/background.svg";

const App = () => {
  const theme = useMemo(() =>
    createTheme({
      palette: {
        primary: {
          main: "#881dff",
          light: "#d9b6ff",
        },
        secondary: {
          main: "#46b7ff",
          light: "#55fffe",
        },
        background: {
          default: "#131219",
          paper: "#222233",
        },
        text: {
          primary: "#efecfd",
        },
        success: {
          main: "#47ff82",
        },
        warning: {
          main: "#e9f835",
        },
        error: {
          main: "#ff4b4b",
        },
      },
    })
  );

  return (
    <ThemeProvider theme={theme}>
      <div id='app'>
        <CssBaseline />
        <MainContainer />
        <Waves id='waves' />
      </div>
    </ThemeProvider>
  );
};

export default App;
