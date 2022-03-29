import { Card, Typography, IconButton } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useSelector } from "react-redux";
import {
  getCurrentEndpoint,
  getCurrentMetric,
} from "../store/currentViewSlice";
import { useTheme } from "@mui/material/styles";
import ArrowCircleRightRoundedIcon from "@mui/icons-material/ArrowCircleRightRounded";
import CustomMUITooltip from "../components/CustomMUITooltip";

const DescriptionContainer = () => {
  const theme = useTheme();
  const currentMetric = useSelector(getCurrentMetric);
  const currentEndpoint = useSelector(getCurrentEndpoint);
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

  const dataArray = [];
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
              : theme.palette.error.dark;
      }

      const unitMap = {
        millisecond: "ms",
        byte: "B",
        element: "elements",
      };

      let newNumericUnit = unitMap?.[numericUnit];

      if (numericDiff > 1000) {
        numericDiff = Math.round(numericDiff / 1000);
        if (newNumericUnit === "ms") newNumericUnit = "s";
        if (newNumericUnit === "B") newNumericUnit = "KiB";
        if (newNumericUnit === "elements") newNumericUnit = "Kelements";
      }

      if (
        data[key].results[currentEndpoint][earlyRun].scoreDisplay !==
        "notApplicable"
      ) {
        dataArray.push({
          description,
          title,
          scoreColor,
          numericDiff,
          scoreDiff,
          url,
          newNumericUnit,
        });
      }
    }
  }

  // console.log(dataArray);
  dataArray.sort((a, b) => {
    if (a.scoreDiff < b.scoreDiff) return -1;
    if (a.scoreDiff > b.scoreDiff) return 1;
    return 0;
  });

  const dataComponents = dataArray.map(
    ({
      description,
      title,
      scoreColor,
      numericDiff,
      scoreDiff,
      url,
      newNumericUnit,
    }) => {
      return (
        <CustomMUITooltip
          className="suggestion-tooltip"
          disableInteractive
          title={description}
          key={title}
        >
          <Card className={"suggestion"} sx={{ bgcolor: scoreColor }}>
            <Typography>{title}</Typography>
            <Typography>
              {newNumericUnit ? (
                <>
                  {numericDiff} <span>{newNumericUnit}</span>
                </>
              ) : (
                <>{scoreDiff}</>
              )}
            </Typography>
            <IconButton
              onClick={() => window.open(url)}
              disabled={url === null}
            >
              <ArrowCircleRightRoundedIcon />
            </IconButton>
          </Card>
        </CustomMUITooltip>
      );
    }
  );

  return <Box id='description-container'>{dataComponents}</Box>;
};

export default DescriptionContainer;
