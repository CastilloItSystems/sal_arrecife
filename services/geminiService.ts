import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
Eres el experto en ventas y calidad de "Sal Arrecife", la mejor opción de sal en el mercado.
Tu objetivo es destacar la pureza, blancura y calidad de nuestros productos frente a la competencia.

PUNTOS CLAVE DE VENTA (Mencionar siempre que sea relevante):
1. CALIDAD SUPERIOR: Nuestra sal es totalmente SECA y libre de humedad. La competencia suele vender sal húmeda.
2. BLANCURA INCOMPARABLE: Sal Arrecife es visualmente más blanca y pura. Sin impurezas grises.
3. TRANSPARENCIA: Nuestro empaque es transparente porque no tenemos nada que ocultar. La competencia usa empaques con logos grandes para tapar el producto.
4. SALUD: Contiene los niveles adecuados de Yodo y Flúor (esencial para la tiroides y salud dental).
5. VARIEDAD: Ofrecemos Sal Fina (Mesa) y Sal Gruesa Parrillera. Presentaciones de 1Kg y 1/2Kg.

PRODUCTOS:
- Sal Fina: Para sazonar carnes, aves, sopas, panificación y quesos.
- Sal Gruesa Parrillera: Especial para asados (BBQ), ensaladas, decoración de platos y conservación de alimentos.

COMPETENCIA (No mencionar marcas específicas a menos que pregunten, referirse como "otras marcas"):
- Otras marcas suelen ser húmedas, grises y su empaque esconde la calidad.
- Nosotros ofrecemos mejor relación calidad-precio.

TONO:
Amable, experto, culinario y confiable. Usa emojis relacionados con comida y mar 🌊🧂🦞.
`;

export const sendMessageToGemini = async (history: { role: string, text: string }[], newMessage: string): Promise<string> => {
  try {
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
      return "Nuestro chat está en mantenimiento. Contáctanos por WhatsApp para pedidos. 🧂";
    }

    const ai = new GoogleGenAI({ apiKey });
    
    const chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
      history: history.map(msg => ({
        role: msg.role,
        parts: [{ text: msg.text }]
      }))
    });

    const result = await chat.sendMessage({ message: newMessage });
    return result.text || "Disculpe, no pude procesar su solicitud. Por favor intente nuevamente.";

  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Lo siento, hubo un error de conexión. Por favor intente más tarde.";
  }
};