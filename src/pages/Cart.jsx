import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import {
  formatPrice,
  getDeliveryFee,
  getGrandTotal,
  getSubtotal,
  getTax
} from "../utils/priceHelper";

const Cart = () => {
  const {
    cartItems,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart
  } = useCart();

  const subtotal = getSubtotal(cartItems);
  const deliveryFee = getDeliveryFee(subtotal);
  const tax = getTax(subtotal);
  const grandTotal = getGrandTotal(cartItems);

  if (cartItems.length === 0) {
    return (
      <section className="page-section">
        <div className="container empty-state">
          <div className="empty-icon">🛒</div>
          <h1>Your cart is empty</h1>
          <p>Add some delicious food to continue.</p>
          <Link to="/categories" className="primary-btn">
            Browse Food
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="page-section">
      <div className="container">
        <div className="page-header left">
          <span>Your Cart</span>
          <h1>Selected Items</h1>
        </div>

        <div className="cart-layout">
          <div className="cart-items">
            {cartItems.map((item) => (
              <div className="cart-item" key={item.id}>
                <img src={item.image} alt={item.name} />

                <div className="cart-info">
                  <h3>{item.name}</h3>
                  <p>{formatPrice(item.price)}</p>
                </div>

                <div className="quantity-control">
                  <button onClick={() => decreaseQuantity(item.id)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => increaseQuantity(item.id)}>+</button>
                </div>

                <strong>{formatPrice(item.price * item.quantity)}</strong>

                <button
                  className="remove-btn"
                  onClick={() => removeFromCart(item.id)}
                >
                  ✕
                </button>
              </div>
            ))}

            <button className="clear-btn" onClick={clearCart}>
              Clear Cart
            </button>
          </div>

          <div className="order-summary">
            <h2>Order Summary</h2>

            <div>
              <span>Subtotal</span>
              <strong>{formatPrice(subtotal)}</strong>
            </div>

            <div>
              <span>Delivery Fee</span>
              <strong>
                {deliveryFee === 0 ? "Free" : formatPrice(deliveryFee)}
              </strong>
            </div>

            <div>
              <span>Tax</span>
              <strong>{formatPrice(tax)}</strong>
            </div>

            <hr />

            <div className="total">
              <span>Total</span>
              <strong>{formatPrice(grandTotal)}</strong>
            </div>

            <Link to="/checkout" className="primary-btn full">
              Proceed to Checkout
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
