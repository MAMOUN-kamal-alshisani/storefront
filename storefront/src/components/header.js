import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/material/Menu';
import { useSelector } from "react-redux";


export default function Header(props) {
  const state = useSelector((state) => state);
  return (
      <>
     
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
           OUR STORE
          </Typography>
          <Button color="inherit">Cart</Button>
          {/* <Button color="inherit">Cart ({state.cart.count})</Button> */}
        </Toolbar>
      </AppBar>
    </Box>
    </>
  );
}