import React from "react";
import TitleContainer from "./TitleContainer";
import MetricContainer from "./MetricContainer";
import ChartContainer from "./ChartContainer";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import DescriptionContainer from "./DescriptionContainer";
import Footer from "./Footer";
// import Waves from '../components/Waves';

const MainContainer = () => {
  return (
    <div id='mainContainer'>
      <TitleContainer />
      <Box id='mainBox' style={{}}>
        <Box id='contentContainer' sx={{ width: "lg" }}>
          <MetricContainer />
          <ChartContainer />
          <DescriptionContainer />
        </Box>
        <Footer />
      </Box>
    </div>
  );
};

export default MainContainer;
