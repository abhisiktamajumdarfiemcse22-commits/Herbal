export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { messages } = req.body || {};

  const system =
     "You are a friendly herbal and Ayurvedic assistant. Answer only questions related to herbal remedies, Ayurveda, wellness, diet, medicinal plants and traditional home remedies. If the user's message is unclear, incomplete, or unrelated (for example a random word or typo), politely ask them to clarify instead of saying it is not recognized. Keep replies concise, natural and easy to understand. For serious symptoms, advise consulting a qualified healthcare professional.";

  const conversation = Array.isArray(messages)
    ? messages.map((m) => `[${m.role}] ${m.text}`).join("\n")
    : "";

  const prompt =
  system +
  "\n\n" +
  conversation +
  "\n\nRespond concisely and include preparation and typical administration where applicable." +
  "\n\nIMPORTANT:" +
  "\nIf your answer recommends buying medicine, herbal products, Ayurvedic products, or visiting a hospital, clinic, pharmacy, medical store, or Ayurvedic shop, then add exactly this on a new line at the very end:" +
  "\n[SHOW_MAP]" +
  "\nDo not explain what [SHOW_MAP] means." +
  "\nDo not add it unless nearby medical services would actually help the user.";

  const KEY = process.env.GEMINI_API_KEY;

  if (!KEY) {
    return res.status(200).json({
      reply: "Mock reply: No API key provided."
    });
  }

  try {
const endpoint =
`https://generativelanguage.googleapis.com/v1beta/models/gemini-3.1-flash-lite:generateContent?key=${KEY}`;

    const payload = {
      contents: [
        {
          parts: [{ text: prompt }]
        }
      ],
      generationConfig: {
        temperature: 0.2
      }
    };

    const r = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });

    const data = await r.json();

    if (!r.ok) {
      console.log("STATUS:", r.status);
      console.log("FULL ERROR:", JSON.stringify(data, null, 2));

      if (r.status === 429) {
        return res.status(429).json({
          error: "API limit reached"
        });
      }

      return res.status(r.status).json({
        error: "Gemini request failed"
      });
    }

    const reply =
      data?.candidates?.[0]?.content?.parts
        ?.map((p) => p.text || "")
        .join(" ")
        .trim() || null;

    if (!reply) {
      console.log("Empty Gemini response:", data);
      return res.status(200).json({
        reply: "Model returned empty content."
      });
    }

    return res.status(200).json({ reply });

  } catch (err) {
    console.error("Server Error:", err);
    return res.status(500).json({
      error: "Failed to call Gemini",
      detail: String(err)
    });
  }
}