import { Paper, Stack, Tooltip } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import PerformanceMetricChart from "../components/PerformanceMetricChart";
import {
  getCurrentMetric,
  selectPerformanceMetrics,
  changeSelectorSwitch,
} from "../store/currentViewSlice";
import CompareArrowsRoundedIcon from "@mui/icons-material/CompareArrowsRounded";
import CommitRoundedIcon from "@mui/icons-material/CommitRounded";

import PerformanceMetrics from "./PerformanceMetrics";
import OverallMetricChart from "../components/OverallMetricChart";
import CustomMUITooltip from "../components/CustomMUITooltip";
import CustomMUISwitch from "../components/CustomMUISwitch";

const ChartContainer = () => {
  const dispatch = useDispatch();
  const currentMetric = useSelector(getCurrentMetric);
  const perfMetricsSelected = useSelector(selectPerformanceMetrics);
  const selectorSwitch = useSelector(state=>state.currentView.selectorSwitch);

  const perfMetricsSelectedArr = Object.values(perfMetricsSelected);
  const isPerfMetricSelected = perfMetricsSelectedArr.every((v) => v === false);

  return (
    <Paper id='chart-container' sx={{ boxShadow: 3 }}>
      {currentMetric === "Performance" && <PerformanceMetrics />}
      {(isPerfMetricSelected || currentMetric !== "Performance") && (
        <OverallMetricChart />
      )}
      {!isPerfMetricSelected && currentMetric === "Performance" && (
        <PerformanceMetricChart />
      )}
      {currentMetric !== "default" && (
        <Stack
          direction='row'
          spacing={1}
          alignItems='center'
          id='range-switch'
        >
          <CommitRoundedIcon />
          <CustomMUITooltip
            disableInteractive
            title='Change between viewing a range or specific commit'
          >
            <CustomMUISwitch
              id="range-switch-click"
              onChange={(_) => dispatch(changeSelectorSwitch())}
              checked={selectorSwitch}
            />
          </CustomMUITooltip>
          <CompareArrowsRoundedIcon />
        </Stack>
      )}
    </Paper>
  );
};

export default ChartContainer;
