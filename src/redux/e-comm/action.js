import fakestoreapi from "../../apis/fakeStoreApi";
import { FETCH_PRODUCTS, REMOVE_SELECTED_PRODUCT, SELECTED_PRODUCT, SET_PRODUCTS } from "./actionTypes"

export const fetchProducts = () => async (dispatch) => {
    const response = await fakestoreapi.get("/products");
    dispatch({type: FETCH_PRODUCTS, payload: response.data})
    
}

export const fetchProductById = (id) => async (dispatch) => {
    const response = await fakestoreapi.get(`/products/${id}`);
    dispatch({type: SELECTED_PRODUCT, payload: response.data})
    
}

export const setProducts = (products) =>{
 return {
    type: SET_PRODUCTS,
    payload: products,
 }
}

export const selectedProduct = (product) =>{
    return ({
        type: SELECTED_PRODUCT,
        payload: product,
    })
}

export const removeSelectedProduct = () =>{
    return ({
        type: REMOVE_SELECTED_PRODUCT,
    })
}