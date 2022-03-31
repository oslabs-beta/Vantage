import React from "react";
import Metric from "../components/Metric";
import { useDispatch, useSelector } from "react-redux";
import {
  getCurrentEndpoint,
  changePerformanceMetrics,
} from "../store/currentViewSlice";
import { selectMostRecentWebVital } from "../store/dataSlice.js";
import { Box } from "@mui/material";

const PerformanceMetrics = () => {
  const dispatch = useDispatch();
  const performanceMetricsArr = useSelector(
    (state) => state.currentView.performanceMetricsArr
  );

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
    { name: "FCP", value: fcp.score * 100, description: fcp.title },
    { name: "TTI", value: tti.score * 100, description: tti.title },
    { name: "SI", value: si.score * 100, description: si.title },
    { name: "TBT", value: tbt.score * 100, description: tbt.title },
    { name: "LCP", value: lcp.score * 100, description: lcp.title },
    { name: "CLS", value: cls.score * 100, description: cls.title },
  ];

  const metricsArr = data.map((cur) => (
    <Metric
      key={cur.name}
      name={cur.name}
      value={cur.value}
      size={50}
      handleClick={handleClick}
      isActive={performanceMetricsArr.includes(cur.name)}
      description={cur.description}
    />
  ));

  return <Box id='performance-metrics'>{metricsArr}</Box>;
};

export default PerformanceMetrics;
