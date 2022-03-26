import React, { useEffect } from "react";
import DropDownMenu from "../components/DropDownMenu";
import { AppBar, Box, Toolbar } from "@mui/material/";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import {
  getCurrentEndpoint,
  changeMetric,
  resetRunValue,
} from "../store/currentViewSlice";
import { selectRunList } from "../store/dataSlice";
import Logo from "../assets/vantage-logo.svg";

const TitleContainer = () => {
  const dispatch = useDispatch();
  const currentEndpoint = useSelector(getCurrentEndpoint);
  const runList = useSelector(selectRunList);

  const handleClick = () => {
    dispatch(changeMetric("default"));
    dispatch(resetRunValue(runList[runList.length - 1]));
  };

  // Set the selected run to the latest initially
  useEffect(() => {
    dispatch(resetRunValue(runList[runList.length - 1]));
  }, []);

  return (
    <div id='titleContainer'>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position='static'>
          <Toolbar id='nav-bar'>
            <a
              href='https://www.vantagenext.com/'
              style={{
                display: "flex",
                alignItems: "center",
                textDecoration: "none",
              }}
            >
              <Logo style={{ height: "50px" }} />
              <Typography
                color='text.primary'
                variant='h6'
                component='div'
                marginLeft='20px'
                sx={{ flexGrow: 1 }}
              >
                Vantage
              </Typography>
            </a>

            <Box
              sx={{ display: "flex", cursor: "pointer" }}
              onClick={handleClick}
            >
              <Typography
                variant='h6'
                component='div'
                color='text.primary'
                sx={{ px: 1 }}
              >
                Current Endpoint:
              </Typography>

              <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
                {currentEndpoint}
              </Typography>
            </Box>
            <DropDownMenu />
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

export default TitleContainer;
