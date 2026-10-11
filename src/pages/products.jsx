
import ProductList from '../components/productlist.jsx';

function Products({ onViewCart }) {
  return (
    <div className="page">
      <ProductList onViewCart={onViewCart} />
    </div>
  );
}

export default Products;
