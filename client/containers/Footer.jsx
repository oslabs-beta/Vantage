import React from 'react';
import { useTheme } from '@mui/material/styles';
import { AppBar, Link, Typography } from '@mui/material';



const Footer = () => {
  // const theme = useTheme();
  // const footerColor = () => {
  //   if (theme.palette.mode == 'dark') return '#1e1e1e';
  //   else return theme.palette.primary.main;
  // };
  return (
    <AppBar id="footer">
      <Typography id="lh-logo-container">
        <Link href="https://developers.google.com/web/tools/lighthouse" color='inherit'>
            Powered by Lighthouse
        </Link>
      </Typography>
    </AppBar>
  );
};

export default Footer;