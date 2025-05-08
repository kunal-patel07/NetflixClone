import OpenAI from "openai";

// Ensure you are using the correct environment variable
const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY, // Correct way to assign the API key
  dangerouslyAllowBrowser: true, // This allows you to use it in the browser
});

export default openai;
