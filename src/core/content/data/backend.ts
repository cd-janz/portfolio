import type {IDetailedSkill} from "@/core/types/ISkill.ts";
import SpringIcon from "@/icons/backend/SpringIcon.astro"
import DotNetIcon from "@/icons/backend/DotNetIcon.astro"
import NestIcon from "@/icons/backend/NestIcon.astro"
import RocketIcon from "@/icons/backend/RocketIcon.astro"
import ActixIcon from "@/icons/backend/ActixWebIcon.astro"
import GoIcon from "@/icons/language/GoIcon.astro"

export const spring: IDetailedSkill = {
  icon: SpringIcon,
  label: "spring boot",
  key: "springboot",
  frequency: 8,
  learningFrom: new Date(2021, 7),
  proficiency: 7
}

export const dotnet: IDetailedSkill = {
  icon: DotNetIcon,
  label: ".NET",
  key: "dotnet",
  frequency: 7,
  learningFrom: new Date(2021, 7),
  proficiency: 7
}

export const nest: IDetailedSkill = {
  icon: NestIcon,
  label: "nest",
  key: "nest",
  frequency: 5,
  learningFrom: new Date(2022, 0),
  proficiency: 6
}

export const rocket: IDetailedSkill = {
  icon: RocketIcon,
  label: "Rocket",
  key: "rocket",
  frequency: 1,
  learningFrom: new Date(2025, 0),
  proficiency: 2
}

export const actix: IDetailedSkill = {
  icon: ActixIcon,
  label: "Actix Web",
  key: "actix",
  frequency: 1,
  learningFrom: new Date(2025, 2),
  proficiency: 1
}

export const fiber: IDetailedSkill = {
  icon: GoIcon,
  label: "Fiber",
  key: "fiber",
  frequency: 3,
  learningFrom: new Date(2024, 1),
  proficiency: 4
}

export const gin: IDetailedSkill = {
  icon: GoIcon,
  label: "gin",
  key: "gin",
  frequency: 2,
  learningFrom: new Date(2024, 11),
  proficiency: 3
}

export const gok: IDetailedSkill = {
  icon: GoIcon,
  label: "Go Kit & Micro",
  key: "gokm",
  learningFrom: new Date(2025, 3),
  proficiency: 1,
  frequency: 1
}