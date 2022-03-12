import React from 'react';
import { useTheme } from '@mui/material/styles';



const Footer = () => {
  const theme = useTheme();
  const footerColor = () => {
    if (theme.palette.mode == 'dark') return '#1e1e1e';
    else return theme.palette.primary.main;
  };
  return (
    <div id="footer"
      style= {{backgroundColor: `${footerColor()}`}}
    >
      <div id="lh-logo-container">
        <a href="https://developers.google.com/web/tools/lighthouse">
            Powered by Lighthouse
        </a>
      </div>
    </div>
  );
};

export default Footer;