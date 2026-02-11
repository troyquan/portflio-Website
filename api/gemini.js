import { GoogleGenAI } from "@google/genai";

const COMPONENT_SCHEMA = {
  type: "object",
  properties: {
    root: { type: "string", description: "Root element id" },
    elements: {
      type: "object",
      additionalProperties: {
        type: "object",
        properties: {
          type: {
            type: "string",
            enum: ["Card", "Input", "Button", "Textarea", "Select", "Checkbox", "Link", "Text", "Stack"],
            description: "Component type"
          },
          props: {
            type: "object",
            description: "Component props"
          },
          children: {
            type: "array",
            items: { type: "string" },
            description: "Child element ids"
          }
        },
        required: ["type"]
      }
    }
  },
  required: ["root", "elements"]
};

const COMPONENT_PROMPT = `You are a UI generator. Generate a JSON structure for interactive components.
Use only these component types: Card, Input, Button, Textarea, Select, Checkbox, Link, Text, Stack.
- Card: container with title, description. props: title, description
- Input: text input. props: label, placeholder, type (text|email|password)
- Button: clickable button. props: label
- Textarea: multi-line input. props: label, placeholder, rows
- Select: dropdown. props: label, options (array of strings)
- Checkbox: checkbox. props: label
- Link: anchor. props: label, href (use real URLs when provided)
- Text: paragraph. props: text
- Stack: flex container. props: direction (row|column), gap
Return valid JSON matching the schema. Use English for all labels and text.`;

const CONTACT_CARD_PROMPT = `Generate a professional contact card as a JSON structure.
Use the portfolio context provided. Structure:
- Root Card with children: ["name", "bio", "contactStack"]
- name: Text with props { value: "Person Name", variant: "title" }
- bio: Text with props { value: "brief bio text" }
- contactStack: Stack with props { direction: "column" } and children: ["contact", "email", "linkedin", "location"]
- contact: Link with props { href: "tel:PHONE", value: "phone number" }
- email: Link with props { href: "mailto:EMAIL", value: "email" }
- linkedin: Link with props { href: "full LinkedIn URL", value: "LinkedIn" }
- location: Text with props { value: "city, region" }
Every element MUST be in a parent's children array. Use value (not label/text) for Link and Text.`;

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: "GEMINI_API_KEY not configured" });
  }

  try {
    const { prompt, mode = "component", context } = req.body || {};
    const ai = new GoogleGenAI({ apiKey });

    if (mode === "component") {
      const useContactCard = !prompt || prompt.trim() === "" || /contact|card|introduce|名片/i.test(prompt);
      const fullPrompt = useContactCard
        ? `${CONTACT_CARD_PROMPT}\n\nPortfolio context:\n${context || "No context provided."}\n\nGenerate the contact card JSON.`
        : `${COMPONENT_PROMPT}\n\nUser request: ${prompt}`;
      const response = await ai.models.generateContent({
        model: "gemini-1.5-flash",
        contents: fullPrompt,
        config: {
          responseMimeType: "application/json",
          responseJsonSchema: COMPONENT_SCHEMA
        }
      });

      const text = response?.text;
      if (!text) {
        return res.status(500).json({ error: "Empty response from Gemini" });
      }

      try {
        const schema = JSON.parse(text);
        return res.status(200).json({ mode: "component", data: schema });
      } catch {
        return res.status(500).json({ error: "Invalid JSON from Gemini", raw: text });
      }
    }

    if (mode === "chat") {
      if (!prompt || typeof prompt !== "string") {
        return res.status(400).json({ error: "prompt is required" });
      }
      const systemContext = context || "You are a helpful assistant for a portfolio website. Answer questions about the developer's skills, projects, and background.";
      const response = await ai.models.generateContent({
        model: "gemini-1.5-flash",
        contents: prompt,
        config: { systemInstruction: systemContext }
      });

      const text = response?.text || "";
      return res.status(200).json({ mode: "chat", data: { text } });
    }

    return res.status(400).json({ error: "Invalid mode. Use 'component' or 'chat'" });
  } catch (err) {
    console.error("Gemini API error:", err);
    const msg = err?.message || "Gemini API request failed";
    const isQuota = msg.includes("429") || msg.includes("quota") || msg.includes("RESOURCE_EXHAUSTED");
    return res.status(isQuota ? 429 : 500).json({
      error: isQuota
        ? "API quota exceeded. Please wait a minute and try again, or check your Gemini API plan at ai.google.dev"
        : msg
    });
  }
}
