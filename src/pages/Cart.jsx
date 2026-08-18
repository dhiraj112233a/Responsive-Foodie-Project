import { Link } from "react-router-dom";

function Cart({ cartItems, increaseQuantity, decreaseQuantity, removeFromCart }) {
  const subtotal = cartItems.reduce((total, item) => {
    const price = Number(item.price.replace(/[^\d]/g, ""));
    return total + price * item.quantity;
  }, 0);

  const deliveryFee = cartItems.length > 0 ? 40 : 0;
  const totalAmount = subtotal + deliveryFee;

  return (
    <div className="cart-page">
      <div className="cart-container">
        <h1 className="cart-title">🛒 Your Cart</h1>

        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <h2>Your cart is empty</h2>
            <p>Add some delicious food to get started.</p>
            <Link to="/" className="primary-btn">
              Explore Food
            </Link>
          </div>
        ) : (
          <div className="cart-layout">
            <div className="cart-items">
              {cartItems.map((item, index) => {
                const price = Number(item.price.replace(/[^\d]/g, ""));
                const itemTotal = price * item.quantity;

                return (
                  <div className="cart-item" key={index}>
                    <div className="cart-item-image">
                      <img src={item.image} alt={item.name} />
                    </div>

                    <div className="cart-item-details">
                      <h3>{item.name}</h3>
                      <p>{item.description}</p>
                      <strong>{item.price}</strong>
                    </div>

                    <div className="item-quantity">
                      <button onClick={() => decreaseQuantity(item.name)}>-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => increaseQuantity(item.name)}>+</button>
                    </div>

                    <div className="item-total">₹{itemTotal}</div>

                    <button
                      className="remove-btn"
                      onClick={() => removeFromCart(item.name)}
                    >
                      Remove
                    </button>
                  </div>
                );
              })}
            </div>

            <div className="cart-summary">
              <h2>Order Summary</h2>

              <div className="summary-row">
                <span>Subtotal</span>
                <span>₹{subtotal}</span>
              </div>

              <div className="summary-row">
                <span>Delivery Fee</span>
                <span>₹{deliveryFee}</span>
              </div>

              <div className="summary-row total">
                <span>Total</span>
                <span>₹{totalAmount}</span>
              </div>

              <button className="checkout-btn">Proceed to Checkout</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
