import { Card } from "@mui/material";
import React from "react";

const CustomTooltip = ({ active, payload, commits, unit }) => {
  if (active && payload && payload.length) {
    const activeTime = payload[0].payload.name;
    const dateFormatted = new Date(activeTime).toLocaleString();

    const payloadComponents = payload.map((cur, i) => {
      return (
        <p
          key={i}
          style={{ color: cur.stroke }}
        >{`${cur.name} : ${Math.round(cur.value)} ${unit}`}</p>
      );
    });

    return (
      <Card className='custom-tooltip' variant='outlined' sx={{ px: 1 }}>
        <p className='time-tooltip'>{dateFormatted}</p>
        <p className='commits-tooltip'>{commits[activeTime]}</p>
        {payloadComponents}
      </Card>
    );
  }

  return null;
};

CustomTooltip.defaultProps = {
  unit: ""
};

export default CustomTooltip;
