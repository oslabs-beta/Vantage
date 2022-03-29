import React from "react";
import { CircularProgress, Typography, Box } from "@mui/material";
import CustomMUITooltip from "./CustomMUITooltip";

const Metric = ({ name, value, handleClick, size, isActive, description }) => {
  const color = value > 90 ? "success" : value > 70 ? "warning" : "error";

  const activeClass = isActive ? "active-metric" : "";

  return (
    <CustomMUITooltip
      className='suggestion-tooltip'
      disableInteractive
      title={description}
      placement='top'
    >
      <Box
        className='metric'
        onClick={(_) => handleClick(name)}
        sx={{
          position: "relative",
          display: "inline-flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
        }}
      >
        <Box
          className={activeClass}
          id='metricCircle'
          sx={{
            position: "relative",
            display: "flex",
            alignContent: "center",
            justifyContent: "center",
            paddingTop: "5px",
            backgroundColor: "background.default",
            width: size + 10 + "px",
            height: size + 10 + "px",
          }}
        >
          <CircularProgress
            variant='determinate'
            color={color}
            value={value}
            size={size}
            thickness={size / 35}
          />
          <Typography
            component='div'
            color='text.primary'
            sx={{
              fontSize: size / 2.6,
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              position: "absolute",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {`${Math.round(value)}`}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography component='div' color='text.primary'>
            {name}
          </Typography>
        </Box>
      </Box>
    </CustomMUITooltip>
  );
};

Metric.defaultProps = {
  size: 70,
  isActive: false,
  description: "",
};

export default Metric;
