import { defineContentConfig, defineCollection,z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    stories: defineCollection({
      type: 'data',
      source: 'stories/**.json',
      schema: z.object({
        title: z.string(),
        category: z.string(),
        content: z.string(),
        questions: z.array(z.object({
          question: z.string(),
          answer: z.string(),
          options: z.array(z.string())
        }))
      })
    })
  }
})  