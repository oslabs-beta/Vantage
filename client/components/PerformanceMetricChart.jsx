import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
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

  const data = runList.map((cur, i) => {
    return {
      name: cur,
      FCP: fcpData[cur].score * 100,
      TTI: ttiData[cur].score * 100,
      SI: siData[cur].score * 100,
      TBT: tbtData[cur].score * 100,
      LCP: lcpData[cur].score * 100,
      CLS: clsData[cur].score * 100,
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
      <XAxis dataKey='name' />
      <YAxis />
      <Tooltip />
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
