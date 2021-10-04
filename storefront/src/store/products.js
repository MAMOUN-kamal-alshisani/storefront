let initialState = {
    products: [
        
        { category: 'Clothes', name:'Glove' ,description :'Furygan Volt Black White.',price:'$ 44.85',InventoryCount:10},
        { category: 'Electronics', name:'rolex_OysterPerpetual', description :'Don`t watch the clock; do what it does. Keep going..',price:'$ 13,995',InventoryCount:3},
        { category: 'Food',name:'shawrma', description :'conquer evil and then eat shawarma ..',price:'$ 2,50',InventoryCount:20}
    ],

};

const productReducer=(state = initialState, action) => {
    let { type, payload } = action;
    switch (type) {
        case 'Active':
            // let product = state.categories;
            let productitem = state.products.filter((product) =>
        product.category === payload ? product.category : null
      );
      return { ...state, productitem: productitem };
      
      case 'AddProduct':
          state.products = state.products.map(product=>{

            if(product.productName ===payload.productName){
                if(product.InventoryCount > 0){
                    product.InventoryCount  += -1;
                }
                return product;
            }
            return product;
          })
   
      return {...state};

      case 'DeleteProduct':
          state.products =state.products.map(product=>{

           
            if(product.productName ===payload.productName){
                if(product.InventoryCount > 0){
                    product.InventoryCount  += +1;
                }
                return product;
            }
            return product;
          })
    default:
      return {...state};
        //   })
  }
};
                export default productReducer;