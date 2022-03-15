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
  addRunValue
} from "../store/currentViewSlice.js";
import { useSelector, useDispatch } from "react-redux";

const PerformanceMetricChart = () => {
  const [runA, runB] = useSelector(
    (state) => state.currentView.runValueArrSort
  );
  const dispatch = useDispatch();
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
  const perfMetricsSelectedArr = Object.entries(perfMetricsSelected).reduce(
    (acc, curr) => (curr[1] ? [...acc, curr[0]] : acc),
    []
  );
  const valueType =
    perfMetricsSelectedArr.length > 1 ? "score" : "numericValue";

  const data = runList.map((cur, i) => {
    const multiple = valueType === "score" ? 100 : 1;
    return {
      name: cur,
      FCP: Math.round(fcpData[cur][valueType] * multiple),
      TTI: Math.round(ttiData[cur][valueType] * multiple),
      SI: Math.round(siData[cur][valueType] * multiple),
      TBT: Math.round(tbtData[cur][valueType] * multiple),
      LCP: Math.round(lcpData[cur][valueType] * multiple),
      CLS: Math.round(clsData[cur][valueType] * multiple),
    };
  });

  const webVitalUnits = {
    FCP: "ms",
    TTI: "ms",
    SI: "ms",
    TBT: "ms",
    LCP: "ms",
    CLS: "",
  };

  const unit =
    perfMetricsSelectedArr.length > 1
      ? ""
      : webVitalUnits[perfMetricsSelectedArr[0]];

  const handleClick = (data) => {
    if (data) {
      dispatch(addRunValue(data.activePayload[0].payload.name));
    }
  };

  const lineComponents = perfMetricsSelectedArr.map((curr, i) => (
    <Line
      key={i}
      type='monotone'
      dataKey={curr}
      stroke='#8884d8'
      strokeWidth={2}
    />
  ));

  return (
    <LineChart
      onClick={handleClick}
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
      //added filter to linechart
      filter="url(#shadow)"
    >
      <defs>
        <filter id="shadow" height="200%">
          <feDropShadow dx="0" dy="10" stdDeviation="10" floodColor="purple"/>
        </filter>
      </defs>
      <CartesianGrid strokeDasharray='3 3' />
      <XAxis dataKey={"name"} style={{ opacity: 0 }}>
        <Label value='Commits' style={{ fill: "gray" }} />
      </XAxis>
      <YAxis />
      <Tooltip
        content={
          <CustomTooltip commits={commits} unit={unit} runList={runList} />
        }
      />
      <Legend />
      {lineComponents}
      {runB && <ReferenceArea x1={runA} x2={runB} />}
    </LineChart>
  );
};

export default PerformanceMetricChart;
