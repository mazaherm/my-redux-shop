import * as actions from '../actions/basketActions';

export const initialState = {
  basket: [],
  loading: true,
}

export default function basketReducer (state = initialState, action) {
  let { basket } = state
  switch (action.type) {
    case actions.ADD_TO_BASKET:
      basket.push(action.payload)
      return {
        ...state,
        loading: false,
        basket: basket,
      };
    default:
      return state;
  }
}
