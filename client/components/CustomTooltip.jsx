import { Card } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const CustomTooltip = ({ active, payload, commits }) => {
  if (active && payload && payload.length) {
    const activeTime = payload[0].payload.name;
    const dateFormatted = new Date(activeTime).toLocaleString();

    // console.log(payload);
    const payloadComponents = payload.map((cur, i) => {
      return (
        <p
          key={i}
          style={{ color: cur.stroke }}
        >{`${cur.name} : ${cur.value}`}</p>
      );
    });

    return (
      <Card className='custom-tooltip' variant='outlined' sx={{ px: 1 }}>
        <p className='time-tooltip'>{dateFormatted}</p>
        {payloadComponents}
        <p className='commits-tooltip'>{commits[activeTime]}</p>
      </Card>
    );
  }

  return null;
};

export default CustomTooltip;
