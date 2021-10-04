export const AddProduct = (product) => {
    return {
        type: "ADD",
        payload: product,
    }
};


export const DeleteProduct = (product) => {
    return {
        type: 'DeleteProduct',
        payload: product,
    }
};



export const inventory = (product) => {
    return {
      type: "ADDProduct",
      payload: product,
    };
  };

  export const Cart = (status) => {
    return {
      type: "SHOW",
      payload: status,
    };
  };