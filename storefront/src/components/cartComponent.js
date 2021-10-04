import React from "react";
import { If } from "react-if";
import { connect } from "react-redux";
import { DeleteProduct } from "../store/actions";
import Button from '@mui/material/Button';
// import "../../style/simplecart.scss";

const Carts = (props) => {
  return (
    <>
      <section className="simplecart-conitaner">
        <If condition={() => props.Cart.length !== 0}>
          <ul>
            {props.Cart.map((el, idx) => {
              return (
                <li key={idx}>
                  {/* <span>{el.name}</span> */}
                  <Button
                    color="secondary"
                    onClick={() => {
                      props.DeleteProduct(el);
                    }}
                  >
                    Delete
                  </Button>
                </li>
              );
            })}
          </ul>
        </If>
      </section>
    </>
  );
};

const mapStateToprops = (state) => {
  return { Cart: state.Cart };
};
const mapDispatchToProps = { DeleteProduct };

export default connect(mapStateToprops, mapDispatchToProps)(Carts);