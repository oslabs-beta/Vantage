import React from 'react';
import TitleContainer from './TitleContainer';
import MetricContainer from './MetricContainer';
import ChartContainer from './ChartContainer';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import DescriptionContainer from './DescriptionContainer';
import Footer from './Footer';


const MainContainer = () => {
  return(
    <div id="mainContainer">
      <TitleContainer/>
      <Container maxWidth="md">
        <Box
          id ="mainBox" 
          sx={{ height: '100vh' }}>
          
          <MetricContainer/>
          <ChartContainer/>
          <DescriptionContainer/>
        </Box>
      </Container>
      <Footer/>
    </div>
  );
};

export default MainContainer;