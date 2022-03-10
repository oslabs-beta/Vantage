import React from 'react';
import TitleContainer from './TitleContainer';
import MetricContainer from './MetricContainer';
import ChartContainer from './ChartContainer';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';


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
        </Box>
      </Container>
    </div>
  );
};

export default MainContainer;