import { useState } from "react";
import { Link } from "react-router-dom";
import { jsPDF } from "jspdf";

function Cart({
  cartItems,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
}) {
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("upi");
  const [upiId, setUpiId] = useState("");
  const [selectedBank, setSelectedBank] = useState("");
  const [message, setMessage] = useState("");
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const subtotal = cartItems.reduce((total, item) => {
    const price = Number(item.price.replace(/[^\d]/g, ""));
    return total + price * item.quantity;
  }, 0);

  const deliveryFee = cartItems.length > 0 ? 40 : 0;
  const totalAmount = subtotal + deliveryFee;

  const handleCheckout = () => {
    setShowPaymentModal(true);
    setPaymentSuccess(false);
    setMessage("");
  };

  const handlePayment = () => {
    if (paymentMethod === "upi" && !upiId.trim()) {
      setMessage("Please enter your UPI ID.");
      return;
    }

    if (paymentMethod === "netbanking" && !selectedBank) {
      setMessage("Please select your bank.");
      return;
    }

    setMessage("");
    setPaymentSuccess(true);
  };

  const downloadBill = () => {
    const doc = new jsPDF();
    const invoiceId = `FD-${Date.now()}`;
    const currentDate = new Date().toLocaleString();

    let y = 20;

    doc.setFontSize(22);
    doc.text("Foodie - Bill Invoice", 20, y);

    y += 12;
    doc.setFontSize(12);
    doc.text(`Invoice No: ${invoiceId}`, 20, y);

    y += 8;
    doc.text(`Date: ${currentDate}`, 20, y);

    y += 15;
    doc.setFontSize(14);
    doc.text("Items:", 20, y);

    y += 10;
    doc.setFontSize(12);

    cartItems.forEach((item, index) => {
      const price = Number(item.price.replace(/[^\d]/g, ""));
      const itemTotal = price * item.quantity;

      doc.text(
        `${index + 1}. ${item.name}  |  Qty: ${item.quantity}  |  Price: ₹${price}  |  Total: ₹${itemTotal}`,
        20,
        y
      );
      y += 8;
    });

    y += 8;
    doc.text(`Subtotal: ₹${subtotal}`, 20, y);

    y += 8;
    doc.text(`Delivery Fee: ₹${deliveryFee}`, 20, y);

    y += 8;
    doc.setFontSize(14);
    doc.text(`Grand Total: ₹${totalAmount}`, 20, y);

    y += 12;
    doc.setFontSize(12);
    doc.text(`Payment Method: ${paymentMethod.toUpperCase()}`, 20, y);

    y += 15;
    doc.text("Thank you for ordering with Foodie! 🍔", 20, y);

    doc.save(`Foodie_Bill_${invoiceId}.pdf`);
  };

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
                      <button onClick={() => decreaseQuantity(item.name)}>
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button onClick={() => increaseQuantity(item.name)}>
                        +
                      </button>
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

              <button className="checkout-btn" onClick={handleCheckout}>
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>

      {showPaymentModal && (
        <div className="payment-overlay">
          <div className="payment-modal">
            <h2>Payment Gateway</h2>
            <p className="payment-subtitle">
              Select your payment method to complete the order.
            </p>

            {!paymentSuccess ? (
              <>
                <div className="payment-options">
                  <label className="payment-option">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="upi"
                      checked={paymentMethod === "upi"}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                    />
                    <span>UPI</span>
                  </label>

                  <label className="payment-option">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="googlepay"
                      checked={paymentMethod === "googlepay"}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                    />
                    <span>Google Pay</span>
                  </label>

                  <label className="payment-option">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="netbanking"
                      checked={paymentMethod === "netbanking"}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                    />
                    <span>Net Banking</span>
                  </label>
                </div>

                {paymentMethod === "upi" && (
                  <div className="payment-input-group">
                    <label>Enter UPI ID</label>
                    <input
                      type="text"
                      placeholder="example@upi"
                      value={upiId}
                      onChange={(e) => setUpiId(e.target.value)}
                    />
                  </div>
                )}

                {paymentMethod === "googlepay" && (
                  <div className="payment-note">
                    Google Pay selected. Click <strong>Pay Now</strong> to
                    continue.
                  </div>
                )}

                {paymentMethod === "netbanking" && (
                  <div className="payment-input-group">
                    <label>Select Bank</label>
                    <select
                      value={selectedBank}
                      onChange={(e) => setSelectedBank(e.target.value)}
                    >
                      <option value="">Choose your bank</option>
                      <option value="SBI">State Bank of India</option>
                      <option value="HDFC">HDFC Bank</option>
                      <option value="ICICI">ICICI Bank</option>
                      <option value="Axis">Axis Bank</option>
                      <option value="PNB">Punjab National Bank</option>
                    </select>
                  </div>
                )}

                {message && <div className="payment-message">{message}</div>}

                <div className="payment-actions">
                  <button
                    className="close-payment-btn"
                    onClick={() => setShowPaymentModal(false)}
                  >
                    Cancel
                  </button>

                  <button className="pay-now-btn" onClick={handlePayment}>
                    Pay Now
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className="payment-success">
                  <h3>✅ Payment Successful</h3>
                  <p>Your order has been placed successfully.</p>
                </div>

                <div className="payment-actions">
                  <button
                    className="close-payment-btn"
                    onClick={() => setShowPaymentModal(false)}
                  >
                    Close
                  </button>

                  <button className="download-bill-btn" onClick={downloadBill}>
                    Download Bill
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
