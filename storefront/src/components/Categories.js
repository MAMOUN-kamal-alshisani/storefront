
import React from "react";
// import "../../style/categories.scss"
import { Breadcrumbs, Link } from "@mui/material";

import { connect } from "react-redux";
import { CategoryActivate, Reset } from "../store/categories";

const Categories = (props) => {
  return (
    <section>
      <Breadcrumbs>
   
        <Link color="inherit" onClick={()=>props.CategoryActivate("Clothes")}>
        Clothes
        </Link>
        


        <Link color="inherit" onClick={()=>props.CategoryActivate("Electronics")}>
        Electronics
        </Link>
        <Link color="inherit" onClick={()=>props.CategoryActivate("Food")}>
        Food
        </Link>
      </Breadcrumbs>
    </section>
  );
};
const mapStateToProps = (state) => ({
  categories: state.categories.categories,
  active: state.categories.activeCategory,
});

const mapDispatchToProps = { CategoryActivate, Reset };

export default connect(mapStateToProps, mapDispatchToProps)(Categories);