import React from "react";
import {Box, Paper} from "@mui/material";
import Metric from "../components/Metric";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentEndpoint, changeMetric, getCurrentMetric } from "../store/currentViewSlice";
import {
  selectOverallScoreByEndpoint,
  selectRunList,
} from "../store/dataSlice.js";

const MetricContainer = () => {
  const dispatch = useDispatch();
  const currentMetric = useSelector(getCurrentMetric);
  const currentEndpoint = useSelector(getCurrentEndpoint);
  const overallScore = useSelector((state) =>
    selectOverallScoreByEndpoint(state, currentEndpoint)
  );
  const runList = useSelector(selectRunList);
  const mostRecentRun = runList[runList.length - 1];
  const mostRecentOverallScore = overallScore[mostRecentRun];

  const handleClick = (metric) => {
    dispatch(changeMetric(metric));
  };

  return (
    <div id='metric-container'>
      <h1 onClick={(_) => dispatch(changeMetric("default"))}>
        {currentEndpoint}
      </h1>
      <Paper>
        <div className="metric-container-inner">
          <Box sx={{ display: "flex", gap: 5 }}>
            <Metric
              name={"Performance"}
              value={mostRecentOverallScore.performance * 100}
              handleClick={handleClick}
              isActive={currentMetric === "Performance"}
            />
            <Metric
              name={"SEO"}
              value={mostRecentOverallScore.seo * 100}
              handleClick={handleClick}
              isActive={currentMetric === "SEO"}
            />
            <Metric
              name={"Best Practices"}
              value={mostRecentOverallScore["best-practices"] * 100}
              handleClick={handleClick}
              isActive={currentMetric === "Best Practices"}
            />
            <Metric
              name={"Accessibility"}
              value={mostRecentOverallScore.accessibility * 100}
              handleClick={handleClick}
              isActive={currentMetric === "Accessibility"}
            />
            {/* <Metric name={"PWA"} value={mostRecentOverallScore.pwa * 100} /> */}
          </Box>
        </div>
      </Paper>

      
    </div>
  );
};

export default MetricContainer;
