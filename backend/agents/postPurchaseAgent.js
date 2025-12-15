export function postPurchaseAgent(message, session, mode = "normal") {
  if (mode === "continue") {
    return {
      reply:
        "Continuing your order support — you can track your order, request a return, or exchange an item."
    };
  }

  return {
    reply:
      "Your order is on the way. You can return or exchange it within 7 days."
  };
}
