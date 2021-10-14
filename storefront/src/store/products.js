let initialState = {
    products: [
        
        { name:'Glove' , category: 'Clothes',description :'Furygan Volt Black White.',price:'$44.85',InventoryCount:10, img:'https://tse4.mm.bing.net/th?id=OIP.O6lqUZMT_aCt4AU9WPtkDQHaN_&pid=Api&P=0&w=300&h=300'},
        { name:'rolex_OysterPerpetual',    category: 'Electronics', description :'Don`t watch the clock; do what it does. Keep going..',price:'$ 13,995',InventoryCount:3,img:'https://tse2.mm.bing.net/th?id=OIP.VBSehJZ6FITfLfNRG2i33gHaEC&pid=Api&P=0&w=305&h=167'},
        { name:'shawrma', category: 'Food', description :'conquer evil and then eat shawarma ..',price:'$2,50',InventoryCount:20,img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShw347y2WVXXG177XtEDf_kMLYj9xjy6e76g&usqp=CAU'},

        { name:'jacket' , category: 'Clothes',description :'Parkas Heavy Wool Men Winter Jacket.',price:'$107.76',InventoryCount:5, img:'https://ae01.alicdn.com/kf/HTB1BQzVPFXXXXalXFXXq6xXFXXXh/2018-New-Arrival-Top-Quality-Men-Warm-Parkas-Heavy-Wool-Men-Winter-Jacket-Men-2-in.jpg'},
        { name:'laptop Intel',    category: 'Electronics', description :'17" HD+ Anti-Glare Screen, 11th Gen Intel Core i5-1135G7, Intel Iris Xe Graphics, 32 GB RAM, 2 TB HDD, Long Battery Life, Webcam, Mics, Win10, Silver + Oydisen Cloth',price:'$899.99',InventoryCount:2,img:'https://m.media-amazon.com/images/I/71vvGR8LOxS._AC_SL1500_.jpg'},
        { name:'wagyu beef', category: 'Food', description :'the best beef in the world ! ..',price:'$ 30,50',InventoryCount:10,img:'https://blogs.lonemountainwagyu.com/hubfs/LMW%20-%20RECIPES%20-%20WEB%20(44%20of%2097)%20(1).jpg#keepProtocol'},
 




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
      case "VIEW":
        let data = payload;
        localStorage.setItem("item",JSON.stringify(data));
        return  data ;
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


export const productDetails = (data) => {
  return {
    type: "VIEW",
    payload: data,
  };
};


export default ProductsReducer;
