import { recommendationAgent } from "./recommendationAgent.js";
import { inventoryAgent } from "./inventoryAgent.js";
import { paymentAgent } from "./paymentAgent.js";
import { fulfillmentAgent } from "./fulfillmentAgent.js";
import { postPurchaseAgent } from "./postPurchaseAgent.js";

export async function masterAgent(message, session) {
  console.log("MasterAgent received:", message);
  const text = message.toLowerCase();

  try {
    //CONTINUE
    if (text.includes("continue")) {
     switch(session.lastIntent){
      case "recommendation":
        return await recommendationAgent(
          "Continue recommendations based on previous preferences",
          session,
          "continue"
        );
        case "inventory" : 
        return inventoryAgent(
          "Continue inventory assistance",
          session,
          "continue"
        );
        case "fulfillment" :
          return fulfillmentAgent(
            "Continue fulfillment assistance",
            session,
            "continue"
          );
          case "post_purchase" :
            return postPurchaseAgent(
              "Continue post-purchase support",
              session,
              "continue"
            );

     default :
      return {
        reply:
          "Sure — would you like to continue with recommendations, checkout, or order support?"
      };
    }
  }

    //RECOMMENDATION
    if (text.includes("formal") || text.includes("recommend")) {
      session.lastIntent = "recommendation";
      return await recommendationAgent(message, session);
    }

    //INVENTORY
    if (text.includes("stock") || text.includes("available")) {
      return inventoryAgent();
    }

    //PAYMENT
    if (text.includes("checkout") || text.includes("pay")) {
      session.lastIntent = null; // transactional
      return paymentAgent(session);
    }

    //FULFILLMENT OPTIONS
    if (text.includes("delivery")) {
      session.lastIntent = "fulfillment";
      return fulfillmentAgent("delivery");
    }

    if (text.includes("pickup") || text.includes("pick up")) {
      session.lastIntent = "fulfillment";
      return fulfillmentAgent("pickup");
    }

    //POST-PURCHASE
    if (
      text.includes("track") ||
      text.includes("return") ||
      text.includes("exchange")
    ) {
      session.lastIntent = "post_purchase";
      return postPurchaseAgent();
    }

    //FALLBACK
    return {
      reply:
        "I can help with recommendations, availability, checkout, or order support."
    };
  } catch (err) {
    console.error("MasterAgent error:", err);
    return {
      reply: "Something went wrong, but I’m still here to help."
    };
  }
}
