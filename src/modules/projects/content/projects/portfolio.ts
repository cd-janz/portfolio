import IProject from "@/projects/types/IProject.ts";
import {typescript} from "@/core/content/data/languages.ts";
import {astro, react} from "@/core/content/data/frontend.ts";

const portfolio: IProject = {
  additional: ["mdx", "tailwindcss", "bun.js"],
  category: "frontend",
  collectionName: "portfolio",
  date: new Date(2025, 10),
  status: "progress",
  languages: [typescript],
  technologies: [astro, react],
  picture: ""
}

export default portfolio