import React, {useState} from 'react';

import Drawer from '@mui/material/Drawer';
import ArticleIcon from '@mui/icons-material/Article';
import { Box, List, ListItem, ListItemIcon, ListItemText, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const endpoints = [
  "/",
  "/information"
];

const MenuDrawer = () => {
  const [drawerState, setDrawerState] = useState(false);
  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerState(open);
  };

  const pageArr = endpoints.map((endpoint,i)=>(
    <ListItem button key={i}
    // onClick={() => navigate('/map', {replace: true})}
    >
      <ListItemIcon>
        <ArticleIcon/>
      </ListItemIcon>
      <ListItemText primary={endpoint} />
    </ListItem>));

  return (
    <>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="open drawer"
        sx={{ mr: 2 }}
        onClick={toggleDrawer(true)}
      >
        <ArticleIcon />
      </IconButton>
      <Drawer
        open={drawerState}
        onClose={toggleDrawer(false)}
        onClick={toggleDrawer(false)}
      >
        <List>
          {pageArr}
        </List>
      </Drawer>
    </>
  );
};

export default MenuDrawer;