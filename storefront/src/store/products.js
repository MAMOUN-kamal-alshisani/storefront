let initialState = {
    products: [
        
        { name:'Glove' , category: 'Clothes',description :'Furygan Volt Black White.',price:'$ 44.85',InventoryCount:10, img:'https://tse4.mm.bing.net/th?id=OIP.O6lqUZMT_aCt4AU9WPtkDQHaN_&pid=Api&P=0&w=300&h=300'},
        { name:'rolex_OysterPerpetual',    category: 'Electronics', description :'Don`t watch the clock; do what it does. Keep going..',price:'$ 13,995',InventoryCount:3,img:'https://tse2.mm.bing.net/th?id=OIP.VBSehJZ6FITfLfNRG2i33gHaEC&pid=Api&P=0&w=305&h=167'},
        { name:'shawrma', category: 'Food', description :'conquer evil and then eat shawarma ..',price:'$ 2,50',InventoryCount:20,img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShw347y2WVXXG177XtEDf_kMLYj9xjy6e76g&usqp=CAU'}
    ],
    ActiveProduct:[],
};

const ProductsReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "ACTIVE":
      let prodect = state.products.filter((product) =>
        product.category === payload ? product.category : null
      );
      return { ...state, prodect: prodect };

    case "AddProduct":
      state.products = state.products.map((product) => {
        if (product.name === payload.name) {
          if (product.InventoryCount > 0) {
            product.InventoryCount = product.InventoryCount - 1;
          }
          return product;
        }
        return product;
      });
      return { ...state };

    case "Delete":
      state.products = state.products.map((product) => {
        if (product.name === payload.product.name) {
          product.InventoryCount = product.InventoryCount + 1;

          return product;
        }
        return product;
      });
      return { ...state };
    default:
      return state;
  }
};



export const AddProduct = (product) => {
  console.log(product);
  return {
    type: "Add",
    payload: product,
  };
};

export const DeleteProduct = (product, idx) => {
  return {
    type: "Delete",
    payload: { product: product, idx: idx },
  };
};





export default ProductsReducer;
