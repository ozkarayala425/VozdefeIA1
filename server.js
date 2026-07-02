import express from "express";
import cors from "cors";
import OpenAI from "openai";

const app = express();
const port = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());

// 🔑 Conexión con OpenAI
const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

// Ruta principal de chat
app.post("/chat", async (req, res) => {
  try {
    const userMessage = req.body.message;

    const response = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: "Eres una IA cristiana llamada VozdefeIA. Responde con mensajes bíblicos, claros, cortos y con amor."
        },
        {
          role: "user",
          content: userMessage
        }
      ]
    });

    const reply = response.choices[0].message.content;

    res.json({ reply });

  } catch (error) {
    console.error(error);
    res.status(500).json({ reply: "Error en el servidor" });
  }
});

// Iniciar servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en puerto ${port}`);
});
