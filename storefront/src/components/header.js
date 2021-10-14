


import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import { useSelector } from "react-redux";
import { connect } from "react-redux";
import {showCart} from '../store/cart'
function Header(props) {
  const state = useSelector((state) => state);
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="default">
          <Toolbar>
     
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Store Front
            </Typography>
            <Button color="inherit" onClick={()=>props.showCart(!props.cart.show)}>Cart ({state.cart.itemNumber})</Button>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}


const mapStateToprops = (state) => {
  return { cart: state.cart };
};

const mapDispatchToProps = { showCart };
export default connect(mapStateToprops,mapDispatchToProps)(Header);