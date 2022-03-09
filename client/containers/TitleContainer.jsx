import React from 'react';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Switch from '@mui/material/Switch';
import {useDispatch, useSelector} from 'react-redux';
import {changeTheme, getTheme} from '../store/currentViewSlice';

const TitleContainer = () => {
  const dispatch = useDispatch();
  const mode = useSelector(getTheme);
  return(
    <div id="titleContainer">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Vantage
            </Typography>
            <Switch
              checked={mode === 'dark'}
              onChange={()=>dispatch(changeTheme())}
              inputProps={{ 'aria-label': 'controlled' }}
            />
            <Button color="inherit">Refresh</Button>
          </Toolbar>
        </AppBar>
      </Box>
      
    </div>
  );
};

export default TitleContainer;