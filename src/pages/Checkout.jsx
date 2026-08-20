import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PaymentModal from "../components/PaymentModal";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";
import {
  formatPrice,
  getDeliveryFee,
  getGrandTotal,
  getSubtotal,
  getTax
} from "../utils/priceHelper";

const Checkout = () => {
  const { user } = useAuth();
  const { cartItems, clearCart } = useCart();
  const navigate = useNavigate();

  const [showPayment, setShowPayment] = useState(false);
  const [address, setAddress] = useState(user?.address || "");
  const [phone, setPhone] = useState(user?.phone || "");

  const subtotal = getSubtotal(cartItems);
  const deliveryFee = getDeliveryFee(subtotal);
  const tax = getTax(subtotal);
  const grandTotal = getGrandTotal(cartItems);

  const handlePlaceOrder = () => {
    if (!address.trim() || !phone.trim()) {
      alert("Please enter address and phone number.");
      return;
    }

    setShowPayment(true);
  };

  const confirmOrder = () => {
    const existingOrders = JSON.parse(localStorage.getItem("foodie_orders")) || [];

    const order = {
      id: Date.now(),
      userId: user.id,
      items: cartItems,
      total: grandTotal,
      address,
      phone,
      status: "Confirmed",
      date: new Date().toLocaleString()
    };

    localStorage.setItem(
      "foodie_orders",
      JSON.stringify([order, ...existingOrders])
    );

    clearCart();
    setShowPayment(false);
    navigate("/orders");
  };

  if (cartItems.length === 0) {
    return (
      <section className="page-section">
        <div className="container empty-state">
          <h1>No items for checkout</h1>
          <p>Please add food to your cart first.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="page-section">
      <div className="container">
        <div className="page-header left">
          <span>Checkout</span>
          <h1>Delivery Details</h1>
        </div>

        <div className="checkout-layout">
          <div className="checkout-form card-box">
            <h2>Contact Information</h2>

            <label>Name</label>
            <input value={user.name} disabled />

            <label>Email</label>
            <input value={user.email} disabled />

            <label>Phone Number</label>
            <input
              value={phone}
              placeholder="Enter phone number"
              onChange={(e) => setPhone(e.target.value)}
            />

            <label>Delivery Address</label>
            <textarea
              value={address}
              placeholder="Enter complete delivery address"
              onChange={(e) => setAddress(e.target.value)}
            />

            <button className="primary-btn full" onClick={handlePlaceOrder}>
              Continue to Payment
            </button>
          </div>

          <div className="order-summary">
            <h2>Payment Summary</h2>

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
          </div>
        </div>
      </div>

      {showPayment && (
        <PaymentModal
          total={grandTotal}
          onClose={() => setShowPayment(false)}
          onConfirm={confirmOrder}
        />
      )}
    </section>
  );
};

export default Checkout;
