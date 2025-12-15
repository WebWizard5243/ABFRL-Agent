export function fulfillmentAgent(message, session, mode = "normal") {
  if (mode === "continue") {
    return {
      reply:
        "Continuing where we left off — would you prefer home delivery or store pickup?"
    };
  }

  if (message?.includes("delivery")) {
    return {
      reply:
        "Your order will be delivered within 2–3 days. You’ll receive tracking updates shortly."
    };
  }

  if (message?.includes("pickup")) {
    return {
      reply:
        "Your order has been reserved for store pickup. You’ll be notified once it’s ready."
    };
  }

  return {
    reply:
      "Would you prefer home delivery or store pickup?"
  };
}
