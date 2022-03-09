import React from "react";
import Box from "@mui/material/Box";
import Metric from "../components/Metric";
import {useDispatch, useSelector} from 'react-redux';
import {getCurrentPage} from '../store/currentViewSlice';

//Example metric data
const metricData = [
  { name: "Performance", value: 85 },
  { name: "Accessibility", value: 99 },
  { name: "Best Practices", value: 60 },
  { name: "SEO", value: 85 },
];

const MetricContainer = () => {
  const currentPage = useSelector(getCurrentPage);
  const metricComponents = metricData.map((data,i) => <Metric {...data} key={i}/> );
  return (
    <div id='metricContainer'>
      <h1>{currentPage}</h1>
      <Box sx={{ display: 'flex', gap: 5 }}>
        {metricComponents}
      </Box>
    </div>
  );
};

export default MetricContainer;
