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
    description: z.optional(z.string()),
    startDate: z.string(),
    endDate: z.optional(z.string()),
    type: z.enum(["degree", "work", "freelancer", "course", "bootcamp", "certification"]),
    status: z.enum(["done", "paused", "canceled", "in progress"]),
    achievement: z.array(z.string()),
    technologies: z.array(z.string()),
    documentPath: z.optional(z.string()),
  })
})

const skills = defineCollection({
  loader: glob({pattern: "*.json", base: "./src/content/skills/"}),
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    frequency: z.string(),
    proficiency: z.string(),
    seeMore: z.string(),
  })
})

const contact = defineCollection({
  loader: glob({pattern: "*.json", base: "./src/content/contact/"}),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    name: z.string(),
    nameContent: z.string(),
    email: z.string(),
    emailContent: z.string(),
    phone: z.string(),
    phoneContent: z.string(),
    subject: z.string(),
    subjectContent: z.string(),
    message: z.string(),
    messageContent: z.string(),
    title2: z.string(),
    answer: z.string(),
    schedule: z.string(),
    able: z.string(),
    social: z.string(),
    submit: z.string(),
  })
})

const filter = defineCollection({
  loader: glob({pattern: "*.json", base: "./src/content/projects/filter/"}),
  schema: z.object({
    filterTitle: z.string(),
    category: z.string(),
    language: z.string(),
    technology: z.string(),
    date: z.string(),
  })
})

const card = defineCollection({
  loader: glob({pattern: "*.json", base: "./src/content/projects/card/"}),
  schema: z.object({
    languages: z.string(),
    technologies: z.string(),
    seeMore: z.string(),
  })
})

const projectItem = defineCollection({
  loader: glob({pattern: "*.mdx", base: "./src/content/projects/items/"}),
  schema: z.object({
    name: z.string(),
    description: z.string(),
    type: z.string(), // web app, web page, productivity app, etc etc.
    architecture: z.string(),
  })
})

export const collections = { about, timeline, timelineItem, skills, contact, projectItem, filter, card }