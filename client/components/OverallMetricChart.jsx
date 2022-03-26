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
import { useTheme } from "@mui/material/styles";

const OverallMetricChart = () => {
  const theme = useTheme();

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

  // Data for chart
  const data = runList.map((cur) => {
    const curData = overallScore[cur];
    return {
      name: cur,
      SEO: curData.seo * 100,
      "Best Practices": curData["best-practices"] * 100,
      Performance: curData.performance * 100,
      Accessibility: curData.accessibility * 100,
    };
  });

  const sw = 2; //stroke width

  const handleClick = (data) => {
    if (data) {
      dispatch(addRunValue(data.activePayload[0].payload.name));
    }
  };

  const lineComponents = [
    { name: "Performance", color: theme.palette.primary.main },
    { name: "SEO", color: theme.palette.primary.light },
    { name: "Best Practices", color: theme.palette.secondary.main },
    { name: "Accessibility", color: theme.palette.secondary.light },
  ].map(({ name, color }) => (
    <React.Fragment key={name}>
      {(currentMetric === "default" || currentMetric === name) && (
        <Line
          type='monotone'
          dataKey={name}
          stroke={color}
          strokeWidth={sw}
          dot={false}
        />
      )}
    </React.Fragment>
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
      <YAxis stroke='#ede1fc' /*domain={['dataMin', 'dataMax']}*/ />
      <Tooltip content={<CustomTooltip commits={commits} />} />
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
        strokeWidth={sw}
      />
      <ReferenceLine
        x={runB}
        stroke={theme.palette.primary.dark}
        strokeWidth={sw}
      />
    </LineChart>
  );
};

export default OverallMetricChart;
