import { combineReducers, createStore,applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import CategoriesReducer from "./categories";
import ProductsReducer from "./products";
import CartReducer from "./cart";
import thunk from 'redux-thunk';

let reducers = combineReducers({categories: CategoriesReducer, products: ProductsReducer, cart: CartReducer,
});

const store = () => {
  return createStore(reducers, composeWithDevTools());
};

export default store();