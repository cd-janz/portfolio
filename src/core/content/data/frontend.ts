import type {IDetailedSkill} from "@/core/types/ISkill";
import ReactIcon from "@/core/assets/icons/frontend/ReactIcon.astro"
import AngularIcon from "@/core/assets/icons/frontend/AngularIcon.astro"
import AstroIcon from "@/core/assets/icons/frontend/AstroIcon.astro"
import BlazorIcon from "@/core/assets/icons/frontend/BlazorIcon.astro"
import NextIcon from "@/core/assets/icons/frontend/NextIcon.astro"

export const react: IDetailedSkill = {
  icon: ReactIcon,
  color: { text: "rgba(97, 218, 251, 1)", bg: "rgba(240, 250, 255, 1)" },
  label: "react.js",
  key: "react",
  frequency: 7,
  details: "Flexible library for building dynamic, component-driven user interfaces.",
  learningFrom: new Date(2020, 2),
  proficiency: 8
}

export const next: IDetailedSkill = {
  icon: NextIcon,
  color: { text: "rgba(0, 0, 0, 1)", bg: "rgba(245, 245, 245, 1)" },
  label: "next.js",
  key: "next",
  frequency: 7,
  details: "Powerful React framework for building fullstack apps with server-side rendering and PWAs.",
  learningFrom: new Date(2021, 7),
  proficiency: 7
}

export const angular: IDetailedSkill = {
  icon: AngularIcon,
  color: { text: "rgba(221, 0, 49, 1)", bg: "rgba(255, 245, 248, 1)" },
  label: "angular",
  key: "angular",
  frequency: 8,
  details: "Robust framework for scalable, enterprise-level web applications.",
  learningFrom: new Date(2021, 8),
  proficiency: 8
}

export const astro: IDetailedSkill = {
  icon: AstroIcon,
  color: { text: "rgba(255, 128, 0, 1)", bg: "rgba(255, 248, 240, 1)" },
  label: "astro.js",
  key: "astro",
  frequency: 5,
  details: "Modern static site builder optimized for performance and simplicity.",
  learningFrom: new Date(2023, 7),
  proficiency: 9
}

export const blazor: IDetailedSkill = {
  icon: BlazorIcon,
  color: { text: "rgba(90, 48, 164, 1)", bg: "rgba(248, 245, 255, 1)" },
  label: "blazor",
  key: "blazor",
  frequency: 4,
  details: "Full-stack framework enabling C# to run seamlessly on the web.",
  learningFrom: new Date(2024, 0),
  proficiency: 6
}
