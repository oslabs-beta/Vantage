import React from 'react';
import DropDownMenu from '../components/DropDownMenu';
import MenuTest from '../components/MenuTest';
import {Button, AppBar, Box, Toolbar} from '@mui/material/';
import Typography from '@mui/material/Typography';
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
            <DropDownMenu/>
            <MenuTest />
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