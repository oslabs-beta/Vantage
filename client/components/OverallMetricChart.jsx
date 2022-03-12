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
  ReferenceArea,
  ReferenceLine,
} from "recharts";
import {
  selectOverallScoreByEndpoint,
  selectCommits,
  selectRunList,
} from "../store/dataSlice.js";
import {
  getCurrentEndpoint,
  getCurrentMetric,
  addRunValue,
} from "../store/currentViewSlice.js";
import { useSelector, useDispatch } from "react-redux";
import CustomTooltip from "./CustomTooltip.jsx";

const OverallMetricChart = () => {
  const [runA, runB] = useSelector(
    (state) => state.currentView.runValueArrSort
  );
  const dispatch = useDispatch();
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

  console.log(data);

  const sw = 3;

  const handleClick = (data) => {
    if (data) {
      console.log(data);
      dispatch(addRunValue(data.activePayload[0].payload.name));
    }
  };

  return (
    <LineChart
      onClick={handleClick}
      id='performance-chart'
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
      <XAxis dataKey={"name"} style={{ opacity: 0 }}>
        <Label value='Commits' style={{ fill: "gray" }} />
      </XAxis>
      <YAxis />
      <Tooltip content={<CustomTooltip commits={commits} />} />
      <Legend />
      {(currentMetric === "default" || currentMetric === "SEO") && (
        <Line type='monotone' dataKey='SEO' stroke='#8884d8' strokeWidth={sw} />
      )}
      {(currentMetric === "default" || currentMetric === "Best Practices") && (
        <Line
          type='monotone'
          dataKey='Best Practices'
          stroke='#82ca9d'
          strokeWidth={sw}
        />
      )}
      {(currentMetric === "default" || currentMetric === "Performance") && (
        <Line
          type='monotone'
          dataKey='Performance'
          stroke='#ff0000'
          strokeWidth={sw}
        />
      )}
      {(currentMetric === "default" || currentMetric === "Accessibility") && (
        <Line
          type='monotone'
          dataKey='Accessibility'
          stroke='#FFA500'
          strokeWidth={sw}
        />
      )}
      {runB && <ReferenceArea x1={runA} x2={runB} />}
      {/* <ReferenceLine x={runA} stroke="green" /> */}
    </LineChart>
  );
};

export default OverallMetricChart;
