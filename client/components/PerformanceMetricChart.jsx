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
import CustomTooltip from "./CustomTooltip";
import {
  selectCommits,
  selectRunList,
  selectWebVitalData,
} from "../store/dataSlice.js";
import { getCurrentEndpoint, addRunValue } from "../store/currentViewSlice.js";
import { useSelector, useDispatch } from "react-redux";
import { useTheme } from "@mui/material/styles";

const PerformanceMetricChart = () => {
  const theme = useTheme();
  const [runA, runB] = useSelector(
    (state) => state.currentView.runValueArrSort
  );
  const dispatch = useDispatch();
  const currentEndpoint = useSelector(getCurrentEndpoint);
  const commits = useSelector(selectCommits);
  const runList = useSelector(selectRunList);
  const performanceMetricsArr = useSelector(
    (state) => state.currentView.performanceMetricsArr
  );

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

  const valueType = performanceMetricsArr.length > 1 ? "score" : "numericValue";

  // Score/metric for each metric
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

  //Only add unit if 1 web vital is selected
  const unit =
    performanceMetricsArr.length > 1
      ? ""
      : webVitalUnits[performanceMetricsArr[0]];

  const handleClick = (data) => {
    if (data) {
      dispatch(addRunValue(data.activePayload[0].payload.name));
    }
  };

  const lineColorObj = {
    FCP: theme.palette.primary.light,
    SI: theme.palette.primary.main,
    LCP: theme.palette.primary.dark,
    TTI: theme.palette.secondary.light,
    TBT: theme.palette.secondary.main,
    CLS: theme.palette.secondary.dark,
  };

  const lineComponents = performanceMetricsArr.map((curr, i) => (
    <Line
      key={i}
      type='monotone'
      dataKey={curr}
      stroke={lineColorObj[curr]}
      strokeWidth={2}
      dot={false}
    />
  ));

  return (
    <LineChart
      className='all-charts'
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
    >
      <CartesianGrid strokeDasharray='10 5' stroke='#847a91' />
      <XAxis dataKey={"name"} tick={false} stroke='#ede1fc'>
        <Label value='Commits' style={{ fill: "#ede1fc" }} />
      </XAxis>
      {performanceMetricsArr.length === 1 ? (
        <YAxis stroke='#ede1fc'>
          <Label
            value={webVitalUnits[performanceMetricsArr[0]]}
            style={{ fill: "#ede1fc" }}
            angle={-90}
            position='insideLeft'
          />
        </YAxis>
      ) : (
        <YAxis stroke='#ede1fc' domain={[0, 100]} />
      )}
      <Tooltip
        content={
          <CustomTooltip commits={commits} unit={unit} runList={runList} />
        }
      />
      <Legend />
      {lineComponents}
      {runB && (
        <ReferenceArea
          x1={runA}
          x2={runB}
          fill={theme.palette.primary.dark}
          opacity='0.3'
        />
      )}
      <ReferenceLine
        x={runA}
        stroke={theme.palette.primary.dark}
        strokeWidth={2}
      />
      <ReferenceLine
        x={runB}
        stroke={theme.palette.primary.dark}
        strokeWidth={2}
      />
    </LineChart>
  );
};

export default PerformanceMetricChart;
