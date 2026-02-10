
import { GoogleGenAI } from "@google/genai";

export class GeminiService {
  private ai: GoogleGenAI;

  constructor() {
    this.ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  }

  async askVirtualMaster(question: string) {
    try {
      const response = await this.ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: question,
        config: {
          systemInstruction: `Você é o "Mestre Virtual Incendeia", um sábio mestre de capoeira da Incendeia Capoeira Academy. 
          Suas respostas devem ser encorajadoras, cheias de sabedoria sobre a cultura da capoeira, rituais, música e técnica. 
          Use termos como "Axé", "Camará" e "Salve". Seu estilo deve refletir as raízes amazônicas do grupo. 
          Responda de forma concisa e direta.`,
          temperature: 0.8,
        },
      });
      return response.text;
    } catch (error) {
      console.error("Erro ao consultar Mestre Virtual:", error);
      return "Desculpe, camará. Minha conexão com a roda falhou por um momento. Tente novamente mais tarde! Axé.";
    }
  }
}

export const geminiService = new GeminiService();
