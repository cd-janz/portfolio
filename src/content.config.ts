import {glob} from "astro/loaders";
import {defineCollection} from "astro:content";
import {z} from "zod";

const resume = defineCollection({
  loader: glob({pattern: "*.md", base: "./src/content/resume/"}),
  schema: z.object({
    title: z.string(),
  })
})

const system = defineCollection({
  loader: glob({pattern: "*.json", base: "./src/content/system/"}),
  schema: z.object({
    resume: z.string(),
    services: z.string(),
    skills: z.string(),
    interests: z.string(),
    purpose: z.string(),
  })
})

export const collections = { resume, system }