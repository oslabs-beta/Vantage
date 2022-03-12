import { Description } from "@mui/icons-material";
import { Card, Tooltip, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCurrentEndpoint,
  changeMetric,
  getCurrentMetric,
} from "../store/currentViewSlice";
import {
  selectOverallScoreByEndpoint,
  selectRunList,
} from "../store/dataSlice.js";

const DescriptionContainer = () => {
  const currentMetric = useSelector(getCurrentMetric);
  const currentEndpoint = useSelector(getCurrentEndpoint);
  const runList = useSelector(selectRunList);
  const metricMap = {
    SEO: "seo",
    "Best Practices": "best-practices",
    Performance: "performance",
    Accessibility: "accessibility",
  };
  const data = useSelector((state) => state.data[metricMap[currentMetric]]);
  const runValueArrSort = useSelector(
    (state) => state.currentView.runValueArrSort
  );

  const dataComponents = [];
  if (data) {
    for (const key in data) {
      const title = data[key].title;
      // const description = data[key].description;

      const scoreComponents = [];
      if (!runValueArrSort.length) {
        const dateFormat = new Date(runList[0]).toLocaleString();
        scoreComponents.push(
          <Typography key={dateFormat}>
            {dateFormat} {data[key].results[currentEndpoint][runList[0]].score}
          </Typography>
        );
      } else {
        runValueArrSort.map((cur, i) => {
          const dateFormat = new Date(cur).toLocaleString();
          scoreComponents.push(
            <Typography key={i}>
              {dateFormat} {data[key].results[currentEndpoint][cur].score}
            </Typography>
          );
        });
      }

      dataComponents.push(
        <Tooltip title={title} key={title}>
          <Card>
            <Typography>{title}</Typography>
            <Box id="score-components">{scoreComponents}</Box>
          </Card>
        </Tooltip>
      );
    }
  }

  return <Box id='description-container'>{dataComponents}</Box>;
};

export default DescriptionContainer;
