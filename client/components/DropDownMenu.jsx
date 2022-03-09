import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
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
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const dispatch = useDispatch();
  const handleClose = (pageName) => {
    dispatch(changePage(pageName))
    setAnchorEl(null);
  };
  const pageList = pages.map((el,i) =>
    <MenuItem key={i} onClick={(_) => handleClose(el.name)}>{el.name}</MenuItem>
  );
  

  return (
    <div>
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
    </div>
  );
}