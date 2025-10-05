import type {ICategoryFilter} from "../../types/IProject.ts";
import Filter from "../molecules/Filter.tsx";
import {useMemo} from "react";
import type {IFilterSchema, TFilter} from "../../types/TFilter.ts";
import type {IDetailedSkill} from "../../../../core/types/ISkill.ts";

interface Props{
  title: string;
  categories: ICategoryFilter[]
  languages: IDetailedSkill[]
  technologies: IDetailedSkill[]
  dates: TFilter[]
  placeholder: string
  handleCategory: (category: ICategoryFilter[]) => void
  handleSkill: (skill: IDetailedSkill[]) => void
  handleDate: (date: TFilter[]) => void
  translation: IFilterSchema
}
export default function ProjectFilters(
  {translation, categories, placeholder, handleCategory, handleSkill, languages, technologies, dates, handleDate}: Props
) {

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
    }else if(char === "t"){
      handleSkill(technologies.filter(s=> data.some(d=> d.value === s.key)));
      return;
    }else{
      handleDate(data)
    }
  }
  return(
    <div className="flex flex-col gap-5">
      <h5 className="capitalize font-bold text-2xl">{translation.filterTitle}</h5>
      <ul className="grid grid-cols-4 gap-2">
        <Filter title={translation.category} data={cItems} placeholder={placeholder}
                handler={(data)=> handler(data, "c")}/>
        <Filter title={translation.language} placeholder={placeholder} data={lItems}
                handler={(data)=> handler(data, "l")}/>
        <Filter title={translation.technology} placeholder={placeholder} data={tItem}
                handler={(data)=> handler(data, "t")}/>
        <Filter title={translation.date} placeholder={placeholder} data={dates}
                handler={(data)=> handler(data, "d")} />
      </ul>
    </div>
  )
}