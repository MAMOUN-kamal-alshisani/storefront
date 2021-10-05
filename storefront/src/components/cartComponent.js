// import React from "react";
// import { connect } from "react-redux";
// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemText from '@material-ui/core/ListItemText';

// function AddToCart(props) {  
//     function handleList() {
//       let temp = [];
//       props.cart.map((element) => {
//         if (temp.includes(element)) {
//           temp.forEach(item => {
//             if (item.name === element.name) {
//               item.inCart += 1;
//             }
//           })
//         } else {
//           element.inCart = 1;
//           temp.push(element)
//         }
//       })
  
//       let list = temp.map((element, idx) => {
//         return (<ListItem key={idx} button>
//           <ListItemText primary={`${element.name} - Quantity: ${element.inCart}`} />
//         </ListItem>)
//       })
//       return list;
//     }
//     return (
//       <div>
//         <List component="nav" aria-label="secondary mailbox folders" style={{ zIndex: '3', position: 'absolute', right: '1%' }}>
//           {handleList()}
//         </List>
//       </div>
//     )
// }
  
// function mapStateToProps(state) {
//     return state;
// }
  
// export default connect(mapStateToProps)(AddToCart);







import React from "react";
import { If } from "react-if";
import { connect } from "react-redux";
import { DeleteProduct } from "../store/products";
import { Button } from "@material-ui/core";
// import "../../style/simplecart.scss";

const Cart = (props) => {
  return (
    <>
      <section className="simplecart-conitaner">
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