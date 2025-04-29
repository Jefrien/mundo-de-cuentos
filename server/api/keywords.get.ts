import { promptAI } from "../utils/ai";

export default defineEventHandler(async (event) => {
    const prompt = 'Dame 30      palabras para cuentos, por ejemplo: dragon, conejo, fantasia, magia, etc. agrega emojis al inicio'
    const format = '{ "keywords": ["😆 dragon", "emoji conejo", "fantasia", "magia", "etc."] }'
    return await promptAI(prompt, format)
})  