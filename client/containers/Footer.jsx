import React from 'react';
import { useTheme } from '@mui/material/styles';
import { AppBar, Link, Typography } from '@mui/material';



const Footer = () => {
  const theme = useTheme();
  return (
    <AppBar id="footer" sx={{backgroundColor: theme.palette.background.paper}}>
      <Typography id="lh-logo-container">
        <Link href="https://developers.google.com/web/tools/lighthouse" color='inherit'>
            Powered by Lighthouse
        </Link>
      </Typography>
    </AppBar>
  );
};

export default Footer;