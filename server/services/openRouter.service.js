import axios from "axios";


export const askAi = async (messages) => {
  try {
    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      throw new Error("Messages array is empty.");
    }
    const response = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        model: "openai/gpt-4o-mini",
        messages: messages,
      },
      {headers: {
        Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
        'Content-Type': 'application/json',
      }}
    );
    const content = response?.data?.choices?.[0]?.message?.content;
    if (!content || !content.trim()) {
      throw new Error("No content received from OpenRouter.");
    }
    return content;
  } catch (error) {
     console.error("Error occurred while communicating with OpenRouter:");
    if (error.response?.data) {
      console.error("provider response:", JSON.stringify(error.response.data, null, 2));
    } else {
      console.error(error.message || error);
    }
    throw error;
  }
};
