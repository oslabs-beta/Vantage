import React, { useEffect, useState } from "react";
import Metric from "../components/Metric";
import { useDispatch, useSelector } from "react-redux";
import {
  getCurrentEndpoint,
  changeMetric,
  changePerformanceMetrics,
  selectPerformanceMetrics,
} from "../store/currentViewSlice";
import {
  selectOverallScoreByEndpoint,
  selectMostRecentWebVital,
} from "../store/dataSlice.js";
import { Box, Grid } from "@mui/material";

const PerformanceMetrics = () => {
  const dispatch = useDispatch();

  const currentPerfMetrics = useSelector(selectPerformanceMetrics);

  const currentEndpoint = useSelector(getCurrentEndpoint);
  const fcp = useSelector((state) =>
    selectMostRecentWebVital(state, "first-contentful-paint", currentEndpoint)
  );
  const tti = useSelector((state) =>
    selectMostRecentWebVital(state, "interactive", currentEndpoint)
  );
  const si = useSelector((state) =>
    selectMostRecentWebVital(state, "speed-index", currentEndpoint)
  );
  const tbt = useSelector((state) =>
    selectMostRecentWebVital(state, "total-blocking-time", currentEndpoint)
  );
  const lcp = useSelector((state) =>
    selectMostRecentWebVital(state, "largest-contentful-paint", currentEndpoint)
  );
  const cls = useSelector((state) =>
    selectMostRecentWebVital(state, "cumulative-layout-shift", currentEndpoint)
  );

  const handleClick = (metric) => {
    dispatch(changePerformanceMetrics(metric));
  };

  const data = [
    {name:"FCP", value: fcp.score * 100},
    {name:"TTI", value: tti.score * 100},
    {name:"SI", value: si.score * 100},
    {name:"TBT", value: tbt.score * 100},
    {name:"LCP", value: lcp.score * 100},
    {name:"CLS", value: cls.score * 100},
  ];

  const metricsArr = data.map((cur)=>(
    <Metric
      key={cur.name}
      name={cur.name}
      value={cur.value}
      size={50}
      handleClick={handleClick}
      isActive={currentPerfMetrics[cur.name]}
    />)
  );

  return (
    <Box id='performance-metrics'>
      {metricsArr}
    </Box>
  );
};

export default PerformanceMetrics;
