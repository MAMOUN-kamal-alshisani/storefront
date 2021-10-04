
let initialState = {
    Cart: [],
    show: false,
    counter: 0,
  };
  
  const CartReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {

      case "ADD":
        const products = state.Cart.map((product) => product.name);
        if (!products.includes(payload.name)) {
          let counter = state.counter + 1;
          return { Cart: [...state.Cart, payload], show: true, counter: counter };
        }
        return { Cart: state.Cart, show: true, counter: state.counter };

      default:
        return state;
    }
  };
  
  export default CartReducer;
let jone =require('./categories')
let mamoun =require('./categories')
