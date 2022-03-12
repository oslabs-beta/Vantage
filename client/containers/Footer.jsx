import React from 'react';
import { useTheme } from '@mui/material/styles';



const Footer = () => {
  const theme = useTheme();
  return (
    <div id="footer"
      style= {{backgroundColor: `${theme.palette.primary.main}`}}
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