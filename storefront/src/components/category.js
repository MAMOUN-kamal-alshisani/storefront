
  
  // import React from "react";
  // import { connect } from "react-redux";
  
  // const ActiveCategory = (props) => {
  //   return <h1>{props.ActiveCategory}</h1>;
  // };
  
  // const mapStateToProps = (state) => ({
  //   ActiveCategory: state.categories.ActiveCategory,
  // });
  
  // export default connect(mapStateToProps)(ActiveCategory);



  import React from "react";
import { connect } from "react-redux";

const ActiveCategory = (props) => {
  return <h1>{props.ActiveCategory}</h1>;
};

// const mapStateToProps = (state) => ({
//   ActiveCategory: state.categories.activeCategory,
// });

const mapStateToProps = (state) => (console.log("category",state))
export default connect(mapStateToProps)(ActiveCategory);