
let initialState = {
  cart: [],
  show: false,
 itemNumber: 0,
};

const CartReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD":
      const products = state.cart.map((product) => product.name);
      
        let counters = state.itemNumber + 1;
        return { cart: [...state.cart, payload], show: true, itemNumber: counters };
      
  
    case "Delete":
      const product = state.cart.filter((product,idx) => {
        return idx !== payload.idx;
      });
      let itemNumber = state.itemNumber - 1;
      return { cart: product, show:state.show, itemNumber: itemNumber };

      case "SHOW":
        return {cart:state.cart,show:payload,itemNumber:state.itemNumber}
    default:
      return state;
  }
};






export const showCart = (status) => {
  return {
    type: "SHOW",
    payload: status,
  };
};

export const inventory = (product) => {
  return {
    type: "AddProduct",
    payload: product,
  };
};

export const GetTheCart = (data) => {
  return {
    type: "GETCART",
    payload: data,
  };
};


export default CartReducer;