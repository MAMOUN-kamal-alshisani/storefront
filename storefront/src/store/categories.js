let initialState = {
    categories: [
        
        { name: 'Clothes', displayedName:'clothes' ,description :'You can quickly convey a number of things about your characters based on the clothing they wear.'},
        { name: 'Electronics', displayedName:'electronics', description :'Electronics comprises the physics, engineering, technology and applications that deal with the emission, flow and control of electrons in vacuum and matter.'},
        { name: 'Food', displayedName:'food', description :'If more of us valued food and cheer and song above hoarded gold, it would be a merrier world.'}
    ],
    activeCategory: "",
}

 
const categoriesReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ACTIVE":
      let categories = state.categories;
      let active = payload;
     

      return { categories, activeCategory: active,};

    case "RESET":
      return initialState;
    default:
      return state;
  }
};

export const CategoryActivate = (name) => {
  return {
    type: "ACTIVE",
    payload: name,
  };
};

export const Reset = () => {
  return {
    type: "RESET",
  };
};






export default categoriesReducer;
// here will add the reducer
// a reducer will take the old state and return the new state
// also a reducer will an action as a second paramter.

// we pass as default state value the initialState, this will be used
// the first time we run the app, since the state will be undefined.
// const categoriesReducer= (state = initialState, action) => {
//     let { type, payload } = action;

//     switch (type) {
//         case 'Active':
//             // let categories = state.categories;
//             let Active = state.categories.map(categories => {
//                 if (categories.name === payload) {
//                     return { categories, ActiveCategories: Active }
//                 }
//                 return categories;
//             });
           
            
//         case 'RESET':
//             return initialState;
//         default:
//             return state;
//     };
// }
