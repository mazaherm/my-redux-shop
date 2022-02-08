import * as actions from '../actions/productsActions';

export const initialState = {
  products: [],
  loading: false,
  hasErrors: false,
};

export default function productsReducer (state = initialState, action) {
  switch (action.type) {
    case actions.GET_PRODUCTS:
      return { ...state, loading: true };
    case actions.GET_PRODUCTS_SUCCESS:
      return { loading: false, hasErrors: false, products: action.payload };
    case actions.GET_PRODUCTS_FAILURE:
      return { ...state, loading: false, hasErrors: true };
    default:
      return state;
  }
}
