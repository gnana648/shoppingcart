 
import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CLEAR_CART,
  CHECK_OUT
} from './actionstypes.js';

export const addToCart = (product) => ({
  type: ADD_TO_CART,
  payload: product
});

export const removeFromCart = (id) => ({
  type: REMOVE_FROM_CART,
  payload: id
});

export const clearCart = () => ({
  type: CLEAR_CART
});

export const checkOut = () => ({
  type: CHECK_OUT
});
