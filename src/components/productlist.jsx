 
import { useDispatch } from 'react-redux';
import { ADD_TO_CART } from '../redux/actionstypes.js';

const products = [
  { id: 1, name: 'Laptop', price: 50000 },
  { id: 2, name: 'Mobile', price: 20000 },
  { id: 3, name: 'HeadPhones',price: 3000 },
  {id:  4, name:   'tab'  ,  price:20000}
];

function ProductList({ onViewCart }) {
  const dispatch = useDispatch();

  const addToCart = (product) => {
    dispatch({
      type: ADD_TO_CART,
      payload: product
    });
  };

  return (
    <div className="product-list">
      <h2>Products</h2>

      {products.map((product) => (
        <div className="product" key={product.id}>
          <div>
            <h3>{product.name}</h3>
            <p>₹{product.price.toLocaleString('en-IN')}</p>
          </div>

          <button onClick={() => addToCart(product)}>
            Add to Cart
          </button>
        </div>
      ))}

      <button onClick={onViewCart}>
        View Cart
      </button>
    </div>
  );
}

export default ProductList;
