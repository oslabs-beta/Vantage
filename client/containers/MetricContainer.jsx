import React from "react";
import Box from "@mui/material/Box";
import Metric from "../components/Metric";
import {useDispatch, useSelector} from 'react-redux';
import {getCurrentEndpoint} from '../store/currentViewSlice';
import {selectOverallScoreByEndpoint, selectRunList} from '../store/dataSlice.js';

//Example metric data
const metricData = [
  { name: "Performance", value: 85 },
  { name: "Accessibility", value: 99 },
  { name: "Best Practices", value: 60 },
  { name: "SEO", value: 85 },
];

const MetricContainer = () => {
  const currentEndpoint = useSelector(getCurrentEndpoint);
  const overallScore = useSelector(state=>selectOverallScoreByEndpoint(state,currentEndpoint));
  const runList = useSelector(selectRunList);
  const mostRecentRun = runList[runList.length - 1];
  const mostRecentOverallScore = overallScore[mostRecentRun];

  const metricComponents = metricData.map((data,i) => <Metric {...data} key={i}/> );
  return (
    <div id='metricContainer'>
      <h1>{currentEndpoint}</h1>
      <Box sx={{ display: 'flex', gap: 5 }}>
        <Metric name={"Performance"} value={mostRecentOverallScore.performance * 100} />
        <Metric name={"SEO"} value={mostRecentOverallScore.seo * 100} />
        <Metric name={"Best Practices"} value={mostRecentOverallScore["best-practices"] * 100} />
        <Metric name={"Accessibility"} value={mostRecentOverallScore.accessibility * 100} />
        {/* <Metric name={"PWA"} value={mostRecentOverallScore.pwa * 100} /> */}
      </Box>
    </div>
  );
};

export default MetricContainer;
