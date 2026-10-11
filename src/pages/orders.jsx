 
import { useSelector } from 'react-redux';

function Orders() {
  const orders = useSelector((state) => state.cart.orders);

  return (
    <div className="page">
      <h2>My Orders</h2>

      {orders.length === 0 ? (
        <p>No orders placed yet.</p>
      ) : (
        orders.map((order) => (
          <div className="order" key={order.id}>
            <h3>Order ID: {order.id}</h3>
            <p>Date: {order.date}</p>

            <h4>Items:</h4>

            {order.items.map((item, index) => (
              <p key={`${item.id}-${index}`}>
                {item.name} - ₹
                {item.price.toLocaleString('en-IN')}
              </p>
            ))}

            <h3>
              Total: ₹{order.total.toLocaleString('en-IN')}
            </h3>

            <hr />
          </div>
        ))
      )}
    </div>
  );
}

export default Orders;
