export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { messages } = req.body || {};

  const system =
    "You are an expert herbal and ayurvedic assistant. Answer only within the scope of herbal and ayurvedic remedies, preparations, dosages when commonly known, administration methods, food/herb interactions and safe traditional usage. Do not provide modern-prescription-only guidance. For ambiguous or serious conditions advise consulting a qualified healthcare professional.";

  const conversation = Array.isArray(messages)
    ? messages.map((m) => `[${m.role}] ${m.text}`).join("\n")
    : "";

  const prompt =
    system +
    "\n\n" +
    conversation +
    "\n\nRespond concisely and include preparation and typical administration where applicable.";

  const KEY = process.env.GEMINI_API_KEY;

  if (!KEY) {
    return res.status(200).json({
      reply: "Mock reply: No API key provided."
    });
  }

  try {
const endpoint =
  `https://generativelanguage.googleapis.com/v1/models/gemini-2.5-flash:generateContent?key=${KEY}`;

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
      return res.status(200).json({
        reply: "ERROR: " + JSON.stringify(data)
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