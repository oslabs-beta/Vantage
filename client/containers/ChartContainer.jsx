import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import MetricChart from '../components/MetricChart';
import {getCurrentMetric} from '../store/currentViewSlice';
import {selectWebVitals} from '../store/dataSlice';

const ChartContainer = () => {
  const webVitals = useSelector(selectWebVitals);
  const currentMetric = useSelector(getCurrentMetric);
  
  return (
    <>
      <h1>{currentMetric}</h1>
      <MetricChart />
    </>
  );
};

export default ChartContainer;