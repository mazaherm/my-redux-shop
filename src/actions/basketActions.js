// Action Types
export const ADD_TO_BASKET = 'ADD_TO_BASKET';
export const REMOVE_FROM_BASKET = 'REMOVE_FROM_BASKET';

// Action Creators
// ** add to basket
export const addToBasket = (product) => ({
  type: ADD_TO_BASKET,
  payload: {
    product,
    quantity: 1,
  },
});

// ** remove from basket
export const removeFromBasket = (product) => ({
  type: REMOVE_FROM_BASKET,
  payload: {
    product,
  }
});
