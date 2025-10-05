import type {IDetailedSkill} from "../../types/ISkill.ts";
import JavaIcon from "../../assets/icons/language/JavaIcon.astro"
import KotlinIcon from "../../assets/icons/language/KotlinIcon.astro"
import TypeScriptIcon from "../../assets/icons/language/TypeScriptIcon.astro"
import SQLIcon from "../../assets/icons/language/SQLIcon.astro"
import RustIcon from "../../assets/icons/language/RustIcon.astro"
import CIcon from "../../assets/icons/language/CIcon.astro"
import GoIcon from "../../assets/icons/language/GoIcon.astro"
import ZigIcon from "../../assets/icons/language/zigIcon.astro"
import LuaIcon from "../../assets/icons/language/LuaIcon.astro"
import BashIcon from "../../assets/icons/language/BashIcon.astro"
import DotnetIcon from "../../assets/icons/backend/DotNetIcon.astro"

export const java: IDetailedSkill = {
  icon: JavaIcon,
  label: "Java",
  key: "java",
  frequency: 8,
  learningFrom: new Date(2020, 0),
  proficiency: 8
}

export const csharp: IDetailedSkill = {
  icon: DotnetIcon,
  label: "C#",
  key: "csharp",
  frequency: 7,
  learningFrom: new Date(2020, 9),
  proficiency: 8
}

export const kotlin: IDetailedSkill = {
  icon: KotlinIcon,
  label: "Kotlin",
  key: "kotlin",
  frequency: 6,
  learningFrom: new Date(2023, 11),
  proficiency: 7
}

export const typescript: IDetailedSkill = {
  icon: TypeScriptIcon,
  label: "TypeScript",
  key: "ts",
  frequency: 9,
  learningFrom: new Date(2020, 0),
  proficiency: 8
}
export const sql: IDetailedSkill = {
  icon: SQLIcon,
  label: "SQL",
  key: "sql",
  frequency: 8,
  learningFrom: new Date(2020, 2),
  proficiency: 7
}

export const rust: IDetailedSkill = {
  icon: RustIcon,
  label: "Rust",
  key: "rust",
  frequency: 2,
  learningFrom: new Date(2024, 0),
  proficiency: 4
}

export const c: IDetailedSkill = {
  icon: CIcon,
  label: "C",
  key: "c",
  frequency: 1,
  learningFrom: new Date(2023, 8),
  proficiency: 5
}

export const go: IDetailedSkill = {
  icon: GoIcon,
  label: "Go",
  key: "go",
  frequency: 1,
  learningFrom: new Date(2024, 0),
  proficiency: 4
}

export const zig: IDetailedSkill = {
  icon: ZigIcon,
  label: "Zig",
  key: "zig",
  frequency: 1,
  learningFrom: new Date(2025, 0),
  proficiency: 2
}

export const lua: IDetailedSkill = {
  icon: LuaIcon,
  label: "Lua",
  key: "lua",
  frequency: 6,
  learningFrom: new Date(2023, 7),
  proficiency: 5
}

export const bash: IDetailedSkill = {
  icon: BashIcon,
  label: "Bash",
  key: "bash",
  frequency: 2,
  learningFrom: new Date(2024, 0),
  proficiency: 4
}

