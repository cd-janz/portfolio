import type {ICategoryFilter} from "@/projects/types/IProject.ts";
import Filter from "@/projects/components/molecules/Filter.tsx";
import {useMemo} from "react";
import type {TFilter} from "@/projects/types/TFilter.ts";
import type {IDetailedSkill} from "@/core/types/ISkill.ts";
import {getLanguages} from "@/core/content/data/skills.ts";

interface Props{
  title: string;
  categories: ICategoryFilter[]
  languages: IDetailedSkill[]
  technologies: IDetailedSkill[]
  placeholder: string
  handleCategory: (category: ICategoryFilter[]) => void
  handleSkill: (skill: IDetailedSkill[]) => void
}
export default function ProjectFilters({title, categories, placeholder, handleCategory, handleSkill, languages, technologies}: Props) {
  const cItems = useMemo(()=> categories.map(c=> {return {label: c.label, value: c.key} as TFilter}), [categories])
  const lItems = useMemo(()=> languages.map(l => {return {label: l.label, value: l.key} as TFilter}), [languages])
  const tItem = useMemo(()=> technologies.map(t => {return {label: t.label, value: t.key} as TFilter}), [technologies])
  const handler = (data: TFilter[], char: string) => {
    if(char === "l"){
      handleSkill(languages.filter(l => data.some(d=> d.value === l.key)));
      return;
    }else if(char === "c"){
      handleCategory(data.map(item => {return {label: item.label, key: item.value} as ICategoryFilter}))
      return;
    }else{
      handleSkill(technologies.filter(s=> data.some(d=> d.value === s.key)));
      return;
    }
  }
  return(
    <div className="flex flex-col gap-5">
      <h5 className="capitalize font-bold text-2xl">{title}</h5>
      <ul className="grid grid-cols-4 gap-2">
        <Filter title="category" data={cItems} placeholder={placeholder} handler={(data)=> handler(data, "c")}/>
        <Filter title="language" placeholder={placeholder} data={lItems} handler={(data)=> handler(data, "l")}/>
        <Filter title="technology" placeholder={placeholder} data={tItem} handler={(data)=> handler(data, "t")}/>
      </ul>
    </div>
  )
}