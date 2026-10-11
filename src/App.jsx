 
import { Link, Routes, Route } from 'react-router-dom';
import Home from './pages/home.jsx';
import Products from './pages/products.jsx';
import CartPage from './pages/CartPage.jsx';
import Orders from './pages/Orders.jsx';
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>My Shopping App</h1>

        <nav className="navbar">
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/cart">Cart</Link>
          <Link to="/orders">Orders</Link>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
