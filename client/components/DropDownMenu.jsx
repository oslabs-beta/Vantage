import * as React from 'react';
import {Menu, MenuItem, IconButton, Box} from '@mui/material';
import ArticleIcon from '@mui/icons-material/Article';
import { useDispatch, useSelector } from "react-redux";
import { changeEndpoint } from "../store/currentViewSlice";
import {selectEndpoints} from '../store/dataSlice';

export default function DropDownMenu() {
  const endpoints = useSelector(selectEndpoints);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const dispatch = useDispatch();

  const open = !!anchorEl;

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
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
    <Box sx={{width: "138px", display: "flex", justifyContent: "flex-end"}}>
      <IconButton
        size="large"
        color="inherit"
        aria-label="menu"
        sx={{ mt: 0, right: 0, display: "relative" }}
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <ArticleIcon/>
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