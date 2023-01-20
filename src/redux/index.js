import { combineReducers } from "redux";
import { productReducer, selectedProductReducer } from "./e-comm/reducer";

export const rootReducer = combineReducers({
    allProducts: productReducer,
    product: selectedProductReducer,
})