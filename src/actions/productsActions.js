import axios from "axios";

// Action Types
export const GET_PRODUCTS = 'GET_PRODUCTS';
export const GET_PRODUCTS_SUCCESS = 'GET_PRODUCTS_SUCCESS';
export const GET_PRODUCTS_FAILURE = 'GET_PRODUCTS_FAILURE';

// Action Creators
export const getProducts = () => ({
  type: GET_PRODUCTS,
});

export const getProductsSuccess = (products) => ({
  type: GET_PRODUCTS_SUCCESS,
  payload: products,
});

export const getProductsFailure = () => ({
  type: GET_PRODUCTS_FAILURE,
});

// Combine Actions with thunk

export function fetchProducts() {
  return async (dispatch) => {
    dispatch(getProducts())

    try {
      const response = 
        await axios.get('https://fakestoreapi.com/products')
        .then((products) => products.data)

      dispatch(getProductsSuccess(response))
    } catch (erorr) {
      dispatch(getProductsFailure())
    } 
  }
}
