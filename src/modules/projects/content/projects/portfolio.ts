import type IProject from "@/projects/types/IProject.ts";
import {typescript} from "@/core/content/data/languages.ts";
import {astro, react} from "@/core/content/data/frontend.ts";

const portfolio: IProject = {
  additional: ["mdx", "tailwindcss", "bun.js"],
  category: "frontend",
  collectionName: "portfolio",
  date: new Date(2025, 8),
  status: "progress",
  languages: [typescript],
  technologies: [astro, react],
  picture: "https://raw.githubusercontent.com/cd-janz/projects_resourses/refs/heads/main/portfolio/screenshot/1.png",
  repository: "https://github.com/cd-janz/portfolio"
}

export default portfolio