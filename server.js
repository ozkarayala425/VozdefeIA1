import express from "express";
import cors from "cors";
import OpenAI from "openai";

const app = express();
const port = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());

// Cliente OpenAI
const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Ruta del chat
app.post("/chat", async (req, res) => {
  try {
    const message = req.body.message;

    const systemPrompt = `
Eres VozdefeIA1, un asistente bíblico basado en la Santa Biblia.

Responde siempre con este formato:

📖 Respuesta:
📚 Base bíblica:
✨ Explicación:
🙏 Aplicación:
❤️ Esperanza:

Reglas:
- No inventes versículos
- Sé claro, respetuoso y cristiano
- Usa lenguaje sencillo
`;

    const response = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: message }
      ]
    });

    res.json({
      reply: response.choices[0].message.content
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ reply: "Error en el servidor" });
  }
});

// Iniciar servidor
app.listen(port, () => {
  console.log("Servidor corriendo en puerto " + port);
});
