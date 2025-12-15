import { GoogleGenerativeAI } from "@google/generative-ai";
import "dotenv/config";

console.log("API KEY PRESENT:", !!process.env.GEMINI_API_KEY);

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const model = genAI.getGenerativeModel({
  model: "gemini-2.5-pro"
});

console.log("Calling Gemini...");

const result = await model.generateContent("Say hello in one sentence");

console.log("Gemini replied:");
console.log(result.response.text());
