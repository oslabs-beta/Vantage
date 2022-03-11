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
  AreaChart,
  Area
} from "recharts";
import {
  selectOverallScoreByEndpoint,
  selectCommits,
  selectRunList,
} from "../store/dataSlice.js";
import { getCurrentEndpoint, getCurrentMetric } from "../store/currentViewSlice.js";
import { useSelector } from "react-redux";
import CustomTooltip from "./CustomTooltip.jsx";

const OverallMetricChart = () => {
  const currentEndpoint = useSelector(getCurrentEndpoint);
  const commits = useSelector(selectCommits);
  const overallScore = useSelector((state) =>
    selectOverallScoreByEndpoint(state, currentEndpoint)
  );
  const runList = useSelector(selectRunList);
  const currentMetric = useSelector(getCurrentMetric);

  const data = runList.map((cur, i) => {
    const curData = overallScore[cur];
    return {
      name: cur,
      SEO: curData.seo * 100,
      "Best Practices": curData["best-practices"] * 100,
      Performance: curData.performance * 100,
      Accessibility: curData.accessibility * 100,
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
        <Label value="Commits" style={{fill: 'gray'}} />
      </XAxis>
      <YAxis />
      <Tooltip content={<CustomTooltip commits={commits} />}/>
      <Legend />
      {(currentMetric === 'default' || currentMetric === 'SEO') &&
        <Line type='monotone' dataKey='SEO' stroke='#8884d8' /> }
      {(currentMetric === 'default' || currentMetric === 'Best Practices') &&
      <Line type='monotone' dataKey='Best Practices' stroke='#82ca9d' />}
      {(currentMetric === 'default' || currentMetric === 'Performance') &&
      <Line type='monotone' dataKey='Performance' stroke='#ff0000' />}
      {(currentMetric === 'default' || currentMetric === 'Accessibility') &&
      <Line type='monotone' dataKey='Accessibility' stroke='#FFA500' />}
    </LineChart>
  );
};

export default OverallMetricChart;
