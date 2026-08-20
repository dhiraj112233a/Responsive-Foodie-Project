export const formatPrice = (price) => {
  return `₹${Number(price).toFixed(0)}`;
};

export const getSubtotal = (cartItems) => {
  return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
};

export const getDeliveryFee = (subtotal) => {
  if (subtotal === 0) return 0;
  return subtotal >= 499 ? 0 : 49;
};

export const getTax = (subtotal) => {
  return Math.round(subtotal * 0.05);
};

export const getGrandTotal = (cartItems) => {
  const subtotal = getSubtotal(cartItems);
  const deliveryFee = getDeliveryFee(subtotal);
  const tax = getTax(subtotal);

  return subtotal + deliveryFee + tax;
};
