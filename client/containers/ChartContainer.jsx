import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import MetricChart from '../components/MetricChart';
import {getCurrentMetric} from '../store/currentViewSlice';
import {getWebVitals} from '../store/dataSlice';

const ChartContainer = () => {
  const webVitals = useSelector(getWebVitals);
  const currentMetric = useSelector(getCurrentMetric);
  // console.log(webVitals);
  
  return (
    <>
      <h1>{currentMetric}</h1>
      <MetricChart />
    </>
  );
};

export default ChartContainer;