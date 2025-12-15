export function inventoryAgent(message, session, mode = "normal") {
  if (mode === "continue") {
    return {
      reply:
        "Continuing from earlier — you can reserve this item at a nearby store or choose home delivery."
    };
  }

  return {
    reply:
      "This item is available in your nearby store. You can choose home delivery or click & collect."
  };
}
