import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Label,
} from "recharts";
import CustomTooltip from "./CustomTooltip";
import {
  selectOverallScoreByEndpoint,
  selectCommits,
  selectRunList,
  selectWebVitalData,
} from "../store/dataSlice.js";
import {
  getCurrentEndpoint,
  getCurrentMetric,
  selectPerformanceMetrics,
} from "../store/currentViewSlice.js";
import { useSelector } from "react-redux";

const PerformanceMetricChart = () => {
  const currentEndpoint = useSelector(getCurrentEndpoint);
  const commits = useSelector(selectCommits);
  const runList = useSelector(selectRunList);
  const perfMetricsSelected = useSelector(selectPerformanceMetrics);

  const fcpData = useSelector((state) =>
    selectWebVitalData(state, "first-contentful-paint", currentEndpoint)
  );
  const ttiData = useSelector((state) =>
    selectWebVitalData(state, "interactive", currentEndpoint)
  );
  const siData = useSelector((state) =>
    selectWebVitalData(state, "speed-index", currentEndpoint)
  );
  const tbtData = useSelector((state) =>
    selectWebVitalData(state, "total-blocking-time", currentEndpoint)
  );
  const lcpData = useSelector((state) =>
    selectWebVitalData(state, "largest-contentful-paint", currentEndpoint)
  );
  const clsData = useSelector((state) =>
    selectWebVitalData(state, "cumulative-layout-shift", currentEndpoint)
  );

  // Show actual units if only one performance metric is selected
  const perfMetricsSelectedArr = Object.values(perfMetricsSelected).filter(
    (v) => !!v
  );
  const valueType =
    perfMetricsSelectedArr.length > 1 ? "score" : "numericValue";

  const data = runList.map((cur, i) => {
    const mult = valueType === "score" ? 100 : 1;
    return {
      name: cur,
      FCP: fcpData[cur][valueType] * mult,
      TTI: ttiData[cur][valueType] * mult,
      SI: siData[cur][valueType] * mult,
      TBT: tbtData[cur][valueType] * mult,
      LCP: lcpData[cur][valueType] * mult,
      CLS: clsData[cur][valueType] * mult,
    };
  });

  return (
    <LineChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray='3 3' />
      <XAxis dataKey={" "}>
        <Label value='Commits' style={{ fill: "gray" }} />
      </XAxis>
      <YAxis />
      <Tooltip content={<CustomTooltip commits={commits} />} />
      <Legend />
      {perfMetricsSelected.FCP && (
        <Line type='monotone' dataKey='FCP' stroke='#8884d8' />
      )}
      {perfMetricsSelected.TTI && (
        <Line type='monotone' dataKey='TTI' stroke='#8884d8' />
      )}
      {perfMetricsSelected.SI && (
        <Line type='monotone' dataKey='SI' stroke='#8884d8' />
      )}
      {perfMetricsSelected.TBT && (
        <Line type='monotone' dataKey='TBT' stroke='#8884d8' />
      )}
      {perfMetricsSelected.LCP && (
        <Line type='monotone' dataKey='LCP' stroke='#8884d8' />
      )}
      {perfMetricsSelected.CLS && (
        <Line type='monotone' dataKey='CLS' stroke='#8884d8' />
      )}
    </LineChart>
  );
};

export default PerformanceMetricChart;
