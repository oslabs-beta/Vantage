import React from 'react';
import TitleContainer from './TitleContainer';
import MetricContainer from './MetricContainer';
import ChartContainer from './ChartContainer';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import DescriptionContainer from './DescriptionContainer';
import Footer from './Footer';
// import Waves from '../components/Waves';


const MainContainer = () => {
  return(
    <div id="mainContainer">
      <TitleContainer/>
      <Box id ="mainBox">
        <Box id='contentContainer'
          sx={{width:'lg'}}
        >
          <MetricContainer/>
          <ChartContainer/>
          <DescriptionContainer/>
        </Box>
        <Box style={{width:'100%',bottom:'0',height:'40px'}}>
          {/* <Waves/> */}
          <Footer />
        </Box>
      </Box>
    </div>
  );
};

export default MainContainer;