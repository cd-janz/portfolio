import type {IDetailedSkill} from "@/core/types/ISkill.ts";
import type {Locale} from "@/core/types/Locales.ts";

export default interface IProject {
  //will be content collection element
  //name: string description: string type: string
  picture: string;
  category: ProjectCategory
  languages: IDetailedSkill[]
  technologies: IDetailedSkill[]
  additional: string[]
  status: ProjectStatus
  date: Date
  repository?: string
  live?: string
  confidential?: boolean
  collectionName: string
  collection?: IProjectCollection
}

export interface IProjectCollection{
  name: string;
  description: string;
  type: string;
  architecture: string;
  Content: any
}

export type ProjectStatus = "featured" | "production" | "completed" | "archived" | "deleted" | "cancelled" | "paused" | "progress";
export type ProjectCategory = "frontend" | "backend" | "fullstack" | "mobile" | "desktop" | "os";

export interface ICategoryFilter{
  key: ProjectCategory;
  label: string;
}

export const getCategory = (locale: Locale) => {
  const os: Record<Locale, string> = {
    en: "low-level",
    es: "nivel de sistemas"
  }
  return [
    {key: "frontend", label: "frontend"},
    {key: "backend", label: "backend"},
    {key: "fullstack", label: "fullstack"},
    {key: "mobile", label: "mobile"},
    {key: "desktop", label: "escritorio"},
    {key: "os", label: os[locale]}
  ] as ICategoryFilter[];
}