import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { formatPrice } from "../utils/priceHelper";

const Orders = () => {
  const { user } = useAuth();

  const orders = JSON.parse(localStorage.getItem("foodie_orders")) || [];
  const myOrders = orders.filter((order) => order.userId === user.id);

  if (myOrders.length === 0) {
    return (
      <section className="page-section">
        <div className="container empty-state">
          <div className="empty-icon">📦</div>
          <h1>No orders yet</h1>
          <p>Your tasty orders will appear here.</p>
          <Link to="/categories" className="primary-btn">
            Start Ordering
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="page-section">
      <div className="container">
        <div className="page-header left">
          <span>My Orders</span>
          <h1>Order History</h1>
        </div>

        <div className="orders-list">
          {myOrders.map((order) => (
            <div className="order-card" key={order.id}>
              <div className="order-top">
                <div>
                  <h3>Order #{order.id}</h3>
                  <p>{order.date}</p>
                </div>

                <span>{order.status}</span>
              </div>

              <div className="order-items">
                {order.items.map((item) => (
                  <div key={item.id}>
                    <span>
                      {item.name} × {item.quantity}
                    </span>
                    <strong>{formatPrice(item.price * item.quantity)}</strong>
                  </div>
                ))}
              </div>

              <div className="order-total">
                <span>Total Paid</span>
                <strong>{formatPrice(order.total)}</strong>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Orders;
