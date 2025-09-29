import {glob} from "astro/loaders";
import {defineCollection} from "astro:content";
import {z} from "zod";

const about = defineCollection({
  loader: glob({pattern: "*.md", base: "./src/content/about/"}),
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    resume: z.string(),
    services: z.string(),
    skills: z.string(),
    interests: z.string(),
    purpose: z.string(),
    purposeDat: z.string()
  })
})

const timeline = defineCollection({
  loader: glob({pattern: "*.json", base: "./src/content/timeline/"}),
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    inProgress: z.string(),
    done: z.string(),
    paused: z.string(),
    canceled: z.string(),
    degree: z.string(),
    course: z.string(),
    bootcamp: z.string(),
    certification: z.string(),
    work: z.string(),
    freelancer: z.string(),
    achievements: z.string(),
    technologies: z.string(),
  })
})

const timelineItem = defineCollection({
  loader: glob({pattern: "*.json", base: "./src/content/timeline/items/"}),
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    description: z.string(),
    startDate: z.string(),
    endDate: z.optional(z.string()),
    type: z.enum(["degree", "work", "freelancer", "course", "bootcamp", "certification"]),
    status: z.enum(["done", "paused", "canceled", "in progress"]),
    achievement: z.array(z.string()),
    technologies: z.array(z.string()),
  })
})

export const collections = { about, timeline, timelineItem }