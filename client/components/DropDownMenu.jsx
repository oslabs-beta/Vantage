import * as React from 'react';
// import Button from '@mui/material/Button';
import {Menu, MenuItem, IconButton, Box} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
// import ClickAwayListener from '@mui/base/ClickAwayListener';
import { useDispatch, useSelector } from "react-redux";
import { changeEndpoint } from "../store/currentViewSlice";
import {selectEndpoints} from '../store/dataSlice';


//Example Endpoint list
// const Endpoints = [
//   { name: "Endpoint 1"},
//   { name: "Endpoint 2"},
//   { name: "Endpoint 3"},
//   { name: "Endpoint 4"},
// ];

export default function DropDownMenu() {
  const endpoints = useSelector(selectEndpoints);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const dispatch = useDispatch();

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const selectEndpoint = (endpointName) => {
    dispatch(changeEndpoint(endpointName));
    setAnchorEl(null);
  };
  const endpointList = endpoints.map((el,i) =>
    <MenuItem key={i} onClick={(_) => selectEndpoint(el)}>{el}</MenuItem>
  );
  
  return (
    <Box >
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >  
        {endpointList}
      </Menu>
    </Box>
  );
}