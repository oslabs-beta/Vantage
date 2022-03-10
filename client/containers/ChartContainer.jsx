import { Box } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import PerformanceMetricChart from "../components/PerformanceMetricChart";
import {
  getCurrentMetric,
  selectPerformanceMetrics,
} from "../store/currentViewSlice";
import { selectWebVitals } from "../store/dataSlice";
import PerformanceMetrics from "./PerformanceMetrics";
import OverallMetricChart from "../components/OverallMetricChart";

const ChartContainer = () => {
  const webVitals = useSelector(selectWebVitals);
  const currentMetric = useSelector(getCurrentMetric);
  const perfMetricsSelected = useSelector(selectPerformanceMetrics);

  const perfMetricsSelectedArr = Object.values(perfMetricsSelected);
  const isPerfMetricSelected = perfMetricsSelectedArr.every((v) => v === false);

  return (
    <>
      <h1>{currentMetric}</h1>
      <Box sx={{ display: "flex" }}>
        {currentMetric === "Performance" && <PerformanceMetrics />}
        {isPerfMetricSelected &&
          <OverallMetricChart />}
        {!isPerfMetricSelected &&
          <PerformanceMetricChart />}
      </Box>
    </>
  );
};

export default ChartContainer;
