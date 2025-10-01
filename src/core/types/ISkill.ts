import type {IColor} from "@/core/types/ISystem.ts";

export interface ISkillCategory{
  name: string
  items: IDetailedSkill[]
}

export interface ISkill{
    icon: any //Astro component
    label: string
}

export interface IDetailedSkill extends ISkill{
  key: string
  proficiency: number /* from 0 to 10*/
  frequency: number; /* from 1 to 10 */
  learningFrom: Date;
}