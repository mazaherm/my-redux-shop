import { combineReducers } from "redux";

import productsReducer from "./productsReducer";
import selectedProductReducer from "./selectedProductReducer";
import basketReducer from "./basketReducer";

const rootReducer = combineReducers({
  products: productsReducer,
  product: selectedProductReducer,
  basket: basketReducer, 
})

export default rootReducer;
