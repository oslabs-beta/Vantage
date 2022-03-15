import { Description } from "@mui/icons-material";
import { Card, Tooltip, Typography, IconButton } from "@mui/material";
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
import { useTheme } from "@mui/material/styles";
import ArrowCircleRightRoundedIcon from "@mui/icons-material/ArrowCircleRightRounded";

const DescriptionContainer = () => {
  const theme = useTheme();
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
  if (data && runValueArrSort.length) {
    for (const key in data) {
      const title = data[key].title;
      const description = data[key].description;
      const url = data[key].url;
      const numericUnit = data[key]?.numericUnit;

      //Get numeric difference
      const earlyRun = runValueArrSort[0];

      let lateRun, scoreColor, numericDiff, scoreDiff;
      if (runValueArrSort[1]) {
        lateRun = runValueArrSort[1];

        numericDiff = numericUnit
          ? Math.round(
            data[key].results[currentEndpoint][lateRun].numericValue -
                data[key].results[currentEndpoint][earlyRun].numericValue
          )
          : "";

        scoreDiff = Math.round(
          (data[key].results[currentEndpoint][lateRun].score -
            data[key].results[currentEndpoint][earlyRun].score) *
            100
        );

        scoreColor =
          scoreDiff > 0
            ? theme.palette.success.dark
            : scoreDiff < 0
              ? theme.palette.error.main
              : null;

        //Only viewing one run
      } else {
        numericDiff = numericUnit
          ? Math.round(
            data[key].results[currentEndpoint][earlyRun].numericValue
          )
          : "";
        scoreDiff = Math.round(
          data[key].results[currentEndpoint][earlyRun].score * 100
        );

        scoreColor =
          scoreDiff > 90
            ? theme.palette.success.dark
            : scoreDiff > 70
              ? theme.palette.warning.dark
              : theme.palette.error.main;
      }

      const unitMap = {
        millisecond: "ms",
        byte: "B",
        element: "elements",
      };

      if (
        data[key].results[currentEndpoint][earlyRun].scoreDisplay !==
        "notApplicable"
      ) {
        dataComponents.push(
          <Tooltip title={description} key={title}>
            <Card className={"suggestion"} sx={{ bgcolor: scoreColor }}>
              <Typography>{title}</Typography>
              <Typography>
                {numericUnit ? (
                  <>
                    {numericDiff} {unitMap[numericUnit]}
                  </>
                ) : (
                  <>{scoreDiff}</>
                )}
              </Typography>
              {url && (
                <IconButton onClick={()=>window.open(url)}>
                  <ArrowCircleRightRoundedIcon />
                </IconButton>
              )}
            </Card>
          </Tooltip>
        );
      }
    }
  }

  return <Box id='description-container'>{dataComponents}</Box>;
};

export default DescriptionContainer;
