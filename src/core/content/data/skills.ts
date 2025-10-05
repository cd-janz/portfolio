import type {ISkillCategory} from "../../types/ISkill.ts";
import type {Locale} from "../../types/Locales.ts";
import { bash, c, csharp, go, java, kotlin, lua, rust, sql, typescript, zig } from "./languages";
import {angular, next, react, astro, remix, yew, leptos} from "./frontend"
import {spring, nest, dotnet, rocket, actix, fiber, gin, gok} from "./backend";
import {mariadb,mongo,mysql,redis,sqlite,postgresql} from "./databases";
import {aws, docker, azure, kubernetes, linux, nginx, terraform} from "./cloud"

const names: Record<Locale, string[]> = {
  en: ["languages", "frontend", "backend", "databases", "cloud"],
  es: ["languages", "frontend", "backend", "bases de datos", "nube"],
}
export default async function getSkills(locale: Locale): Promise<ISkillCategory[]> {
  return [
    { name: names[locale][0], items: [java, csharp, kotlin, typescript, sql, rust, c, go, zig, lua, bash] },
    { name: names[locale][1], items: [angular, next,react,astro, remix, yew, leptos] },
    { name: names[locale][2], items: [spring, nest, dotnet, rocket, actix, fiber, gin, gok]},
    { name: names[locale][3], items: [mariadb, mysql, mongo, redis, sqlite, postgresql] },
    { name: names[locale][4], items: [aws, docker, azure, kubernetes, linux, nginx, terraform]}
  ]
}

export const getLanguages = () =>
  [java, csharp, kotlin, typescript, sql, rust, c, go, zig, lua, bash]
    .sort((a,b)=> b.frequency - a.frequency);

export const getTechnologies = () => [
  angular, next,react,astro, remix, yew, leptos,
  spring, nest, dotnet, rocket, actix, fiber, gin, gok,
  mariadb, mysql, mongo, redis, sqlite, postgresql,
  aws, docker, azure, kubernetes, linux, nginx, terraform
]