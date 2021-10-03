let initialState = {
    products: [
        
        { name: 'Clothes', productName:'Glove' ,description :'Furygan Volt Black White.',price:'$ 44.85',InventoryCount:10},
        { name: 'Electronics', productName:'rolex_OysterPerpetual', description :'Don`t watch the clock; do what it does. Keep going..',price:'$ 13,995',InventoryCount:3},
        { name: 'Food',productName:'shawrma', description :'conquer evil and then eat shawarma ..',price:'$ 2,50',InventoryCount:20}
    ],

};

const productReducer=(state = initialState, action) => {
    let { type, payload } = action;
    switch (type) {
        case 'Active':
            // let product = state.categories;
            let productitem = state.products.filter((product) =>
        product.categories === payload ? product.categories : null
      );
      return { ...state, productitem: productitem };
    default:
      return state;
  }
};
                export default productReducer;