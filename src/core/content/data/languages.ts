import type {IDetailedSkill} from "@/core/types/ISkill.ts";
import JavaIcon from "@/core/assets/icons/language/JavaIcon.astro"
import CSharpIcon from "@/core/assets/icons/language/CsharpIcon.astro"
import KotlinIcon from "@/core/assets/icons/language/KotlinIcon.astro"
import PythonIcon from "@/core/assets/icons/language/PythonIcon.astro"
import TypeScriptIcon from "@/core/assets/icons/language/TypeScriptIcon.astro"
import SQLIcon from "@/core/assets/icons/language/SQLIcon.astro"
import RustIcon from "@/core/assets/icons/language/RustIcon.astro"
import CIcon from "@/core/assets/icons/language/CIcon.astro"
import GoIcon from "@/core/assets/icons/language/GoIcon.astro"
import ZigIcon from "@/core/assets/icons/language/zigIcon.astro"
import LuaIcon from "@/core/assets/icons/language/LuaIcon.astro"
import BashIcon from "@/core/assets/icons/language/BashIcon.astro"

export const java: IDetailedSkill = {
  icon: JavaIcon,
  color: { text: "rgba(208, 72, 28, 1)", bg: "rgba(255, 246, 240, 1)" },
  label: "Java",
  key: "java",
  frequency: 8,
  details: "Robust solutions for backend systems and desktop applications.",
  learningFrom: new Date(2020, 0),
  proficiency: 8
}

export const csharp: IDetailedSkill = {
  icon: CSharpIcon,
  color: { text: "rgba(95, 46, 141, 1)", bg: "rgba(245, 240, 250, 1)" },
  label: "C#",
  key: "csharp",
  frequency: 7,
  details: "Versatile development for backend services, video games, and mobile apps.",
  learningFrom: new Date(2020, 9),
  proficiency: 8
}

export const kotlin: IDetailedSkill = {
  icon: KotlinIcon,
  color: { text: "rgba(80, 90, 200, 1)", bg: "rgba(247, 244, 250, 1)" },
  label: "Kotlin",
  key: "kotlin",
  frequency: 6,
  details: "Modern development across backend, desktop, and mobile platforms.",
  learningFrom: new Date(2023, 11),
  proficiency: 7
}

export const python: IDetailedSkill = {
  icon: PythonIcon,
  color: { text: "rgba(53, 114, 165, 1)", bg: "rgba(244, 248, 250, 1)" },
  label: "Python",
  key: "python",
  frequency: 5,
  details: "Rapid prototyping, backend services, and CLI tooling.",
  learningFrom: new Date(2019, 7),
  proficiency: 7
}

export const typescript: IDetailedSkill = {
  icon: TypeScriptIcon,
  color: { text: "rgba(0, 98, 185, 1)", bg: "rgba(240, 247, 252, 1)" },
  label: "TypeScript",
  key: "ts",
  frequency: 9,
  details: "End-to-end development for backend, frontend, desktop, mobile, and games.",
  learningFrom: new Date(2020, 0),
  proficiency: 8
}
export const sql: IDetailedSkill = {
  icon: SQLIcon,
  color: { text: "rgba(0, 95, 140, 1)", bg: "rgba(240, 248, 252, 1)" },
  label: "SQL",
  key: "sql",
  frequency: 8,
  details: "Core database language for modeling, queries, and data integrity.",
  learningFrom: new Date(2020, 2),
  proficiency: 7
}

export const rust: IDetailedSkill = {
  icon: RustIcon,
  color: { text: "rgba(183, 65, 14, 1)", bg: "rgba(252, 246, 242, 1)" },
  label: "Rust",
  key: "rust",
  frequency: 2,
  details: "Systems programming for OS, backend, CLI, desktop, web, and games.",
  learningFrom: new Date(2023, 0),
  proficiency: 4
}

export const c: IDetailedSkill = {
  icon: CIcon,
  color: { text: "rgba(0, 70, 160, 1)", bg: "rgba(240, 245, 252, 1)" },
  label: "C",
  key: "c",
  frequency: 1,
  details: "Low-level development for OS kernels and CLI utilities.",
  learningFrom: new Date(2024, 0),
  proficiency: 5
}

export const go: IDetailedSkill = {
  icon: GoIcon,
  color: { text: "rgba(0, 173, 216, 1)", bg: "rgba(240, 250, 252, 1)" },
  label: "Go",
  key: "go",
  frequency: 1,
  details: "Efficient backend services and OS-level programming.",
  learningFrom: new Date(2024, 0),
  proficiency: 4
}

export const zig: IDetailedSkill = {
  icon: ZigIcon,
  color: { text: "rgba(240, 180, 0, 1)", bg: "rgba(255, 252, 240, 1)" },
  label: "Zig",
  key: "zig",
  frequency: 1,
  details: "Modern systems programming for OS and CLI tools.",
  learningFrom: new Date(2025, 0),
  proficiency: 2
}

export const lua: IDetailedSkill = {
  icon: LuaIcon,
  color: { text: "rgba(0, 50, 140, 1)", bg: "rgba(240, 244, 252, 1)" },
  label: "Lua",
  key: "lua",
  frequency: 6,
  details: "Lightweight scripting for OS-level automation and extensions.",
  learningFrom: new Date(2023, 7),
  proficiency: 5
}

export const bash: IDetailedSkill = {
  icon: BashIcon,
  color: { text: "rgba(40, 40, 40, 1)", bg: "rgba(248, 248, 248, 1)" },
  label: "Bash",
  key: "bash",
  frequency: 2,
  details: "Scripting for CLI automation and system administration.",
  learningFrom: new Date(2024, 0),
  proficiency: 4
}
