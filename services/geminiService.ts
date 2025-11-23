import { GoogleGenAI, Type } from "@google/genai";
import { MENU_ITEMS } from '../constants';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getAiRecommendation = async (userPreference: string): Promise<string> => {
  if (!process.env.API_KEY) {
    return "I'm sorry, I can't access my brain right now (API Key missing). Please check the menu below!";
  }

  try {
    const menuContext = MENU_ITEMS.map(item => `${item.name} (${item.category}): ${item.description}`).join('\n');

    const prompt = `
      You are an expert Sommelier and Chef at a high-end restaurant called Lumina Bistro.
      
      Here is our menu:
      ${menuContext}

      The customer says: "${userPreference}"

      Please recommend one dish from the menu and a drink pairing (even if generic like 'a bold red wine' if no specific drink matches, but prefer menu items).
      Keep the tone sophisticated, warm, and inviting. Keep it under 50 words.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });

    return response.text || "I recommend trying our Chef's Special today!";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having trouble connecting to the kitchen. Please ask your server for a recommendation!";
  }
};