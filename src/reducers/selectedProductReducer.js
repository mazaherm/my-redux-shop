import * as actions from '../actions/selectedProductActions';

export const initialState = {
  product: [],
  loading: false,
  hasErrors: false,
}

export default function selectedProductReducer (state = initialState, action) {
  switch (action.type) {
    case actions.GET_SELECTED_PRODUCT:
      return { ...state, loading: true };
    case actions.GET_SELECTED_PRODUCT_SUCCESS:
      return { loading: false, hasErrors: false, product: action.payload };
    case actions.GET_SELECTED_PRODUCT_FAILURE:
      return { ...state, loading: false, hasErrors: true };
    default:
      return state;
  }
}
