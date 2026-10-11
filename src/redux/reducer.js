 
import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CLEAR_CART,
  CHECK_OUT
} from './actionstypes.js';

const initialState = {
  cart: [],
  orders: []
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload]
      };

    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload)
      };

    case CLEAR_CART:
      return {
        ...state,
        cart: []
      };

    case CHECK_OUT:
      if (state.cart.length === 0) return state;

      return {
        ...state,
        orders: [
          ...state.orders,
          {
            id: Date.now(),
            items: [...state.cart],
            total: state.cart.reduce((sum, item) => sum + item.price, 0),
            date: new Date().toLocaleString()
          }
        ],
        cart: []
      };

    default:
      return state;
  }
};

export default cartReducer;
