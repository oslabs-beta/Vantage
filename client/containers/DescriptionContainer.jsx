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
  if (data && runValueArrSort.length === 2) {
    for (const key in data) {
      const title = data[key].title;
      const description = data[key].description;
      const numericUnit = data[key]?.numericUnit;

      //Get numeric difference
      const earlyRun = runValueArrSort[0];
      const earlyDateFormat = new Date(earlyRun).toLocaleString();
      const lateRun = runValueArrSort[1];
      const lateDateFormat = new Date(lateRun).toLocaleString();

      const numericDiff = numericUnit
        ? Math.round(
          data[key].results[currentEndpoint][lateRun].numericValue -
              data[key].results[currentEndpoint][earlyRun].numericValue
        )
        : "";

      const scoreDiff =
        data[key].results[currentEndpoint][lateRun].score -
        data[key].results[currentEndpoint][earlyRun].score;

      // console.log(title, scoreDiff);
      console.log(
        title,
        data[key].results[currentEndpoint][lateRun].score,
        data[key].results[currentEndpoint][earlyRun].score
      );

      const scoreColor =
        scoreDiff > 0
          ? "success.main"
          : scoreDiff < 0
            ? "error.main"
            : "";

      const unitMap = {
        millisecond: "ms",
        byte: "B",
        element: "elements",
      };

      if (
        data[key].results[currentEndpoint][lateRun].scoreDisplay !==
        "notApplicable"
      ) {
        dataComponents.push(
          <Tooltip title={description} key={title}>
            <Card className={"suggestion"} sx={{ bgcolor: scoreColor }}>
              <Typography>{title}</Typography>
              <Typography>
                {numericDiff} {unitMap[numericUnit]}
              </Typography>
            </Card>
          </Tooltip>
        );
      }
    }
  }

  return <Box id='description-container'>{dataComponents}</Box>;
};

export default DescriptionContainer;
