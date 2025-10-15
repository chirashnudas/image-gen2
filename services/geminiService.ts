
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });

export const generateImage = async (prompt: string): Promise<string> => {
  try {
    const response = await ai.models.generateImages({
        model: 'imagen-4.0-generate-001',
        prompt: prompt,
        config: {
          numberOfImages: 1,
          outputMimeType: 'image/png',
          aspectRatio: '1:1',
        },
    });

    if (response.generatedImages && response.generatedImages.length > 0) {
      const base64ImageBytes = response.generatedImages[0].image.imageBytes;
      return `data:image/png;base64,${base64ImageBytes}`;
    } else {
      throw new Error('No image was generated. The prompt may have been blocked.');
    }
  } catch (error) {
    console.error('Error generating image:', error);
    throw new Error('Failed to generate image. Please check the console for more details.');
  }
};
