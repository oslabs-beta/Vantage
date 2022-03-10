import React from "react";
import { CircularProgress, Typography, Box } from "@mui/material";

const Metric = ({ name, value, handleClick, size, isActive }) => {
  const color = value > 90 ? "success" : value > 70 ? "warning" : "error";

  const activeClass = isActive ? "active-metric" : "";

  return (
    <Box
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
      <Box sx={{ position: "relative", display: "inline-flex" }}>
        <CircularProgress
          className={activeClass}
          variant='determinate'
          color={color}
          value={value}
          size={size}
          thickness={3 + size / 30}
          // sx={isActive && activeStyle}
          
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
  );
};

Metric.defaultProps = {
  size: 70,
  isActive: false,
};

export default Metric;
