const PaymentModal = ({ onClose, onConfirm, total }) => {
  return (
    <div className="modal-backdrop">
      <div className="payment-modal">
        <button className="modal-close" onClick={onClose}>
          ✕
        </button>

        <div className="payment-icon">💳</div>
        <h2>Confirm Payment</h2>
        <p>Your total amount is</p>
        <h1>₹{total}</h1>

        <div className="payment-options">
          <label>
            <input type="radio" name="payment" defaultChecked /> Cash on
            Delivery
          </label>
          <label>
            <input type="radio" name="payment" /> UPI
          </label>
          <label>
            <input type="radio" name="payment" /> Credit/Debit Card
          </label>
        </div>

        <button className="primary-btn full" onClick={onConfirm}>
          Place Order
        </button>
      </div>
    </div>
  );
};

export default PaymentModal;
