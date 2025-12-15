export function paymentAgent(session) {
  session.cart.push("Order Confirmed");

  return {
    reply:
      "Payment successful! Your order has been placed. Would you like delivery or store pickup?"
  };
}
