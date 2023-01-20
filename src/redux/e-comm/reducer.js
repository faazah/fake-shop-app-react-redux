import { REMOVE_SELECTED_PRODUCT, SELECTED_PRODUCT, SET_PRODUCTS } from "./actionTypes";

const initState = {
    products:[],
}
export const productReducer = (state=initState, {type, payload}) =>{
    switch (type) {
        case SET_PRODUCTS:
            return {...state, products: payload}; //, products: [...products, payload]
        default:
            return state;
    }
}

export const selectedProductReducer = (state={}, {type, payload}) =>{
    switch(type){
        case SELECTED_PRODUCT: 
            return {...state, ...payload}
        case REMOVE_SELECTED_PRODUCT: 
            return {};
        default:
            return state;
    }
}