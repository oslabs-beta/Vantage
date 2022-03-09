import React from 'react';
import TitleContainer from './TitleContainer';
import MetricContainer from './MetricContainer';
import ChartContainer from './ChartContainer';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';


const MainContainer = () => {
  return(
    <div id="mainContainer">
      <Container maxWidth="md">
        <Box sx={{ height: '100vh' }}>
          <TitleContainer/>
          <MetricContainer/>
          <ChartContainer/>
        </Box>
      </Container>
    </div>
  );
};

export default MainContainer;