import type {IDetailedSkill} from "@/core/types/ISkill.ts";
import SpringIcon from "@/core/assets/icons/backend/SpringIcon.astro"
import DotNetIcon from "@/core/assets/icons/backend/DotNetIcon.astro"
import FastIcon from "@/core/assets/icons/backend/FastIcon.astro"
import NestIcon from "@/core/assets/icons/backend/NestIcon.astro"
import RocketIcon from "@/core/assets/icons/backend/RocketIcon.astro"

export const spring: IDetailedSkill = {
  icon: SpringIcon,
  color: { text: "rgba(46, 125, 50, 1)", bg: "rgba(240, 250, 240, 1)" },
  label: "spring boot",
  key: "springboot",
  frequency: 8,
  details: "Robust Java framework that accelerates backend development with powerful integrations and production-ready tools.",
  learningFrom: new Date(2021, 7),
  proficiency: 7
}

export const dotnet: IDetailedSkill = {
  icon: DotNetIcon,
  color: { text: "rgba(91, 62, 182, 1)", bg: "rgba(245, 242, 252, 1)" },
  label: ".NET",
  key: "dotnet",
  frequency: 7,
  details: "Versatile backend framework enabling scalable and cross-platform solutions with strong enterprise support.",
  learningFrom: new Date(2021, 7),
  proficiency: 7
}

export const fastapi: IDetailedSkill = {
  icon: FastIcon,
  color: { text: "rgba(0, 180, 150, 1)", bg: "rgba(240, 252, 250, 1)" },
  label: "fastapi",
  key: "fastapi",
  frequency: 2,
  details: "Modern Python framework designed for rapid prototyping and high-performance backend APIs.",
  learningFrom: new Date(2022, 8),
  proficiency: 4
}

export const nest: IDetailedSkill = {
  icon: NestIcon,
  color: { text: "rgba(214, 0, 70, 1)", bg: "rgba(252, 240, 245, 1)" },
  label: "nest",
  key: "nest",
  frequency: 5,
  details: "Progressive Node.js framework leveraging TypeScript for scalable and modular backend architectures.",
  learningFrom: new Date(2022, 0),
  proficiency: 6
}
