import axios from "axios";

// Action Types
export const GET_SELECTED_PRODUCT = 'GET_SELECTED_PRODUCT';
export const GET_SELECTED_PRODUCT_SUCCESS = 'GET_SELECTED_PRODUCT_SUCCESS';
export const GET_SELECTED_PRODUCT_FAILURE = 'GET_SELECTED_PRODUCT_FAILURE';

// Action Creators
export const getSelectedProduct = () => ({
  type: GET_SELECTED_PRODUCT,
});

export const getSelectedProductSuccess = (product) => ({
  type: GET_SELECTED_PRODUCT_SUCCESS,
  payload: product,
});

export const getSelectedProductFailure = () => ({
  type: GET_SELECTED_PRODUCT_FAILURE,
});

// Combine Actions with thunk

export function fetchSelectedProduct(id) {
  return async (dispatch) => {
    dispatch(getSelectedProduct())

    try {
      const response = 
        await axios.get(`https://fakestoreapi.com/products/${id}`)
        .then((product) => product.data)
      
      dispatch(getSelectedProductSuccess(response))
    } catch (error) {
      dispatch(getSelectedProductFailure)
      console.error('ERROR: ', error);
    }
  }
}
