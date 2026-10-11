 
import { useSelector, useDispatch } from 'react-redux';
import { REMOVE_FROM_CART, CLEAR_CART,CHECK_OUT } from '../redux/actionstypes.js';

function Cart() {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      <h3>Items: {cart.length}</h3>

      {cart.map((item, index) => (
        <div className="cart-item" key={`${item.id}-${index}`}>
          <span>
            {item.name} - ₹{item.price}
          </span>

          <button
            onClick={() =>
              dispatch({
                type: REMOVE_FROM_CART,
                payload: item.id
              })
            }
          >
            Remove
          </button>
        </div>
      ))}

      <h3>Total: ₹{total}</h3>

      <button onClick={() => dispatch({ type: CLEAR_CART })}>
        Clear Cart
      </button>
      {cart.length > 0 && (
  <button
    onClick={() => {
      dispatch({ type: CHECK_OUT });
      alert('Order placed successfully!');
    }}
  >
    Checkout
  </button>
)}
    </div>
  );
}

export default Cart;
