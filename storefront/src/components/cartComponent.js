
import React from "react";
import { If } from "react-if";
import { connect } from "react-redux";
import { DeleteProduct } from "../store/products";
import { Button } from "@material-ui/core";


const Cart = (props) => {
  return (
    <>
      <section className="cart-conitaner">
        <If condition={() => props.cart.length !== 0}>
          <ui>
            {props.cart.show &&
              props.cart.cart.map((el, idx) => {
                return (
                  <li key={idx}>
                    <span>{el.name}</span>
                    <Button
                      color="secondary"
                      onClick={() => {
                        props.DeleteProduct(el, idx);
                      }}
                    >
                      Delete
                    </Button>
                  </li>
                );
              })}
          </ui>
        </If>
      </section>
    </>
  );
};

const mapStateToprops = (state) => {
  return { cart: state.cart };
};
const mapDispatchToProps = { DeleteProduct };

export default connect(mapStateToprops, mapDispatchToProps)(Cart);