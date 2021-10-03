import { connect } from "react-redux";
import React from "react";
import {ActivedCategories, reset} from '../store/categories'
// import { Button } from "@mui/material";
import { Breadcrumbs, Link } from "@mui/material";
const categories = props => {
    return (
        <section>
            <Breadcrumbs>
       
            <Link color="inherit" onClick={()=>props.ActivedCategories("Clothes")}>
            Clothes
        </Link>
        <Link color="inherit" onClick={()=>props.ActivedCategories("FOOD")}>
          FOOD
        </Link>
        <Link color="inherit" onClick={()=>props.ActivedCategories("ELECTRONICS")}>
          ELECTRONICS
        </Link>
      </Breadcrumbs>
        </section>
    )
};
const mapStateToProps = (state) => ({
    categories: state.categories.categories,
    active: state.categories.ActiveCategory,
  });
  
  const mapDispatchToProps = { ActivedCategories, reset };
  
  export default connect(mapStateToProps, mapDispatchToProps)(categories);


  
