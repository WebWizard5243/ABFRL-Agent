import { GoogleGenerativeAI } from "@google/generative-ai";
import "dotenv/config";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export async function callLLM(prompt) {
  console.log("🧠 Gemini 2.5 Pro called");

  const model = genAI.getGenerativeModel({
    model: "gemini-2.5-pro"
  });

  // ⏱️ HARD TIMEOUT (VERY IMPORTANT)
  const timeoutPromise = new Promise((_, reject) =>
    setTimeout(() => reject(new Error("Gemini timeout")), 12000)
  );

  try {
    const result = await Promise.race([
      model.generateContent(prompt),
      timeoutPromise
    ]);

    const text = result.response.text();
    console.log("Gemini response received");

    return text;
  } catch (error) {
    console.error("Gemini 2.5 Pro error:", error.message);

    // Fallback so UI never hangs
    return "Based on your preferences, I recommend a slim-fit formal shirt paired with tailored trousers. A blazer would complete the look.";
  }
}
