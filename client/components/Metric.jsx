import React from "react";
import { CircularProgress, Typography, Box } from "@mui/material";
import { useDispatch } from "react-redux";
import { changeMetric } from "../store/currentViewSlice";

const Metric = (props) => {
  const dispatch = useDispatch();
  const color =
    props.value > 90 ? "success" : props.value > 70 ? "warning" : "error";
  return (
    <Box
      onClick={(_) => dispatch(changeMetric(props.name))}
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
          variant='determinate'
          color={color}
          {...props}
          size={80}
          thickness={6}
        />
        <Typography
          component='div'
          color='text.primary'
          sx={{
            fontSize: 30,
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
          {`${Math.round(props.value)}`}
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
          {props.name}
        </Typography>
      </Box>
    </Box>
  );
};

export default Metric;
