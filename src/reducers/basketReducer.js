import * as actions from '../actions/basketActions';

export const initialState = {
  basket: [],
}

export default function basketReducer (state = initialState, action) {
  let { basket } = state
  switch (action.type) {
    case actions.ADD_TO_BASKET:
      basket.push(action.payload)
      return {
        ...state,
        basket: basket,
      };
    case actions.REMOVE_FROM_BASKET:
      return {
        ...state,
        basket: basket.filter((item) => item.product.id !== action.payload.product),
      };
    default:
      return state;
  }
}
