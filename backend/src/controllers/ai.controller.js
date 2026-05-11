const { GoogleGenerativeAI } = require('@google/generative-ai');

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// System prompt that scopes Gemini to Travelopedia's use case
const SYSTEM_PROMPT = `You are AURA, the AI Travel Companion embedded in Travelopedia — a smart travel safety app.
Your role is to assist travelers with:
- Finding safe routes, nearby clinics, EV charging stations, and shelters
- Providing travel safety tips and emergency guidance
- Answering questions about destinations, local customs, and health advisories
- Helping users in distress by providing clear, calm, actionable advice

Keep responses concise, friendly, and mobile-friendly (short paragraphs). 
If a user appears to be in danger or distress, prioritize safety information immediately.
Do NOT answer questions unrelated to travel, safety, or location-based assistance.`;

// @desc    Send a message to the AI assistant
// @route   POST /api/ai/chat
// @access  Private
const chat = async (req, res) => {
  try {
    const { message, history = [] } = req.body;

    if (!message) {
      return res.status(400).json({ message: 'Message is required' });
    }

    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

    // Build conversation history for context
    const formattedHistory = history.map((msg) => ({
      role: msg.role,
      parts: [{ text: msg.content }],
    }));

    const chatSession = model.startChat({
      history: [
        // Inject system context as first message pair
        { role: 'user', parts: [{ text: 'Who are you?' }] },
        { role: 'model', parts: [{ text: SYSTEM_PROMPT }] },
        ...formattedHistory,
      ],
      generationConfig: {
        maxOutputTokens: 500,
        temperature: 0.7,
      },
    });

    const result = await chatSession.sendMessage(message);
    const responseText = result.response.text();

    res.json({ reply: responseText });
  } catch (error) {
    console.error('AI Chat Error:', error.message);
    res.status(500).json({ message: 'AI service error', error: error.message });
  }
};

module.exports = { chat };
