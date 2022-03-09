import * as React from 'react';
import Button from '@mui/material/Button';
import {Menu, MenuItem, IconButton, Box} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ClickAwayListener from '@mui/base/ClickAwayListener';
import { useDispatch } from "react-redux";
import { changePage } from "../store/currentViewSlice";


//Example page list
const pages = [
  { name: "Page 1"},
  { name: "Page 2"},
  { name: "Page 3"},
  { name: "Page 4"},
];

export default function DropDownMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const dispatch = useDispatch();

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (pageName) => {
    setAnchorEl(null);
  };
  const selectPage = (pageName) => {
    dispatch(changePage(pageName));
    setAnchorEl(null);
  };
  const pageList = pages.map((el,i) =>
    <MenuItem key={i} onClick={(_) => selectPage(el.name)}>{el.name}</MenuItem>
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
        {pageList}
      </Menu>
    </Box>
  );
}