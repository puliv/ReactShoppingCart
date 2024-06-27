export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const INCREMENT_COUNT = "INCREMENT_COUNT";
export const DECREMENT_COUNT = "DECREMENT_COUNT";

export const addToCart = (product) => ({
  type: ADD_TO_CART,
  payload: product,
});

export const removeFromCart = (productId) => ({
  type: REMOVE_FROM_CART,
  payload: { id: productId },
});

export const incrementCount = (productId) => ({
  type: INCREMENT_COUNT,
  payload: { id: productId },
});

export const decrementCount = (productId) => ({
  type: DECREMENT_COUNT,
  payload: { id: productId },
});
