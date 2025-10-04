import {getCategory, type ICategoryFilter} from "@/projects/types/IProject.ts";
import type IProject from "@/projects/types/IProject.ts";
import {useCallback, useMemo, useState} from "react";
import type {Locale} from "@/core/types/Locales.ts";
import ProjectFilters from "@/projects/components/organisms/ProjectFilters.tsx";
import {getLanguages, getTechnologies} from "@/core/content/data/skills.ts";
import type {IDetailedSkill} from "@/core/types/ISkill.ts";
import {c} from "@/core/content/data/languages.ts";

const placeholder: Record<Locale, string> = {
  en: "select a",
  es: "selecciona un"
}
interface Props {
  locale: Locale,
  projects: IProject[],
}
export default function DynamicProjectView({locale, projects}: Props) {
  const category = useMemo(()=> getCategory(locale), [locale])
  const languages = useMemo(()=> getLanguages(), []);
  const technologies = useMemo(()=> getTechnologies(), []);

  const [data, setData] = useState<IProject[]>(()=> projects);

  const handler =
    useCallback(async (c: ICategoryFilter[], s?: IDetailedSkill[])=> {
      if(!c && !s){
        setData(()=> projects);
      }
    }, [category, languages, technologies]);

  return (
    <section>
      <ProjectFilters categories={category} placeholder={placeholder[locale]} languages={languages}
                      title="filtrame el bicho"
                      technologies={technologies}
                      handleCategory={(c)=> handler(c)}
                      handleSkill={(s)=> handler([], s)}/>
    </section>
  )
}