import { Box, Paper } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import PerformanceMetricChart from "../components/PerformanceMetricChart";
import {
  getCurrentMetric,
  selectPerformanceMetrics,
} from "../store/currentViewSlice";

import PerformanceMetrics from "./PerformanceMetrics";
import OverallMetricChart from "../components/OverallMetricChart";

const ChartContainer = () => {
  const currentMetric = useSelector(getCurrentMetric);
  const perfMetricsSelected = useSelector(selectPerformanceMetrics);

  const perfMetricsSelectedArr = Object.values(perfMetricsSelected);
  const isPerfMetricSelected = perfMetricsSelectedArr.every((v) => v === false);

  return (
    <>
      {/* <h1>{currentMetric}</h1> */}
      <Paper id='chart-container' sx={{ boxShadow: 3 }}>
        {currentMetric === "Performance" && <PerformanceMetrics />}
        {(isPerfMetricSelected || currentMetric !== "Performance") && (
          <OverallMetricChart />
        )}
        {!isPerfMetricSelected && currentMetric === "Performance" && (
          <PerformanceMetricChart />
        )}
      </Paper>
    </>
  );
};

export default ChartContainer;
