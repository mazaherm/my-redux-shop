// Action Types
export const ADD_TO_BASKET = 'ADD_TO_BASKET';

// Action Creators
// ** add to basket
export const addToBasket = (product) => ({
  type: ADD_TO_BASKET,
  payload: {
    product,
    quantity: 1,
  },
});

