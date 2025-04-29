import { GoogleGenAI } from "@google/genai";

export const getAI = () => {
    const { geminiApiKey } = useRuntimeConfig()
    const ai = new GoogleGenAI({ apiKey: geminiApiKey });
    return ai
}

export const promptAI = async (prompt: string, format?: string) => {
    const ai = getAI()
    const response = await ai.models.generateContent({ 
        model: "gemini-1.5-flash",
        contents: prompt + (format ? ` con el formato ${format}` : '') + ' retorna solo el json en texto plano para un response'
    })
    let resp = response.text || ''  
    resp = resp.replace('```json\n', '')
    resp = resp.replace('```', '')
    resp = resp.replace('\n', '')
    resp = resp.replace('\\', '')

    return JSON.parse(resp)    
}