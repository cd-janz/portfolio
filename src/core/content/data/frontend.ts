import type {IDetailedSkill} from "../../types/ISkill";
import ReactIcon from "../../assets/icons/frontend/ReactIcon.astro"
import AngularIcon from "../../assets/icons/frontend/AngularIcon.astro"
import AstroIcon from "../../assets/icons/frontend/AstroIcon.astro"
import NextIcon from "../../assets/icons/frontend/NextIcon.astro"
import YewIcon from "../../assets/icons/frontend/YewIcon.astro"
import RustIcon from "../../assets/icons/language/RustIcon.astro"

export const react: IDetailedSkill = {
  icon: ReactIcon,
  label: "react.js",
  key: "react",
  frequency: 7,
  learningFrom: new Date(2020, 2),
  proficiency: 8
}

export const next: IDetailedSkill = {
  icon: NextIcon,
  label: "next.js",
  key: "next",
  frequency: 7,
  learningFrom: new Date(2021, 7),
  proficiency: 7
}

export const angular: IDetailedSkill = {
  icon: AngularIcon,
  label: "angular",
  key: "angular",
  frequency: 8,
  learningFrom: new Date(2021, 8),
  proficiency: 8
}

export const astro: IDetailedSkill = {
  icon: AstroIcon,
  label: "astro.js",
  key: "astro",
  frequency: 5,
  learningFrom: new Date(2023, 7),
  proficiency: 9
}

export const remix: IDetailedSkill = {
  icon: ReactIcon,
  label: "Remix.js",
  key: "remix",
  frequency: 2,
  proficiency: 6,
  learningFrom: new Date(2022, 7),
}

export const yew: IDetailedSkill = {
  icon: YewIcon,
  label: "Yew rs",
  key: "yew",
  frequency: 1,
  proficiency: 2,
  learningFrom: new Date(2025, 3),
}

export const leptos: IDetailedSkill = {
  icon: RustIcon,
  label: "leptos",
  key: "leptos",
  frequency: 1,
  proficiency: 1,
  learningFrom: new Date(2025, 3),
}