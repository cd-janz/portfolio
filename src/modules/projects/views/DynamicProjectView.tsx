import {getCategory, type ICategoryFilter, type IProjectSchema} from "@/projects/types/IProject.ts";
import type IProject from "@/projects/types/IProject.ts";
import { useEffect, useMemo, useState} from "react";
import type {Locale} from "@/core/types/Locales.ts";
import ProjectFilters from "@/projects/components/organisms/ProjectFilters.tsx";
import {getLanguages, getTechnologies} from "@/core/content/data/skills.ts";
import type {IDetailedSkill} from "@/core/types/ISkill.ts";
import Projects from "@/projects/components/organisms/Projects.tsx";
import type {IFilterSchema, TFilter} from "@/projects/types/TFilter.ts";
import getDateFilter from "@/projects/content/dateFilter.ts";

const placeholder: Record<Locale, string> = {
  en: "select a",
  es: "selecciona un"
}
interface Props {
  locale: Locale,
  projects: IProject[],
  filterT: IFilterSchema
  cardT: IProjectSchema
}
export default function DynamicProjectView({locale, projects, filterT, cardT}: Props) {
  const category = useMemo(()=> getCategory(locale), [locale])
  const languages = useMemo(()=> getLanguages(), []);
  const technologies = useMemo(()=> getTechnologies(), []);
  const dateFilter = useMemo(()=> getDateFilter(5), [])

  const [data, setData] = useState<IProject[]>(()=> projects);
  const [categories, setCategories] = useState<ICategoryFilter[]>([]);
  const [skills, setSkills] = useState<IDetailedSkill[]>([]);
  const [dates, setDates] = useState<TFilter[]>([]);

  useEffect(() => {
    if(skills.length === 0 && categories.length === 0 && dates.length === 0) {
      setData(()=> projects);
      return;
    }
    const filtered: IProject[] = [];
    if (categories.length > 0) {
      const byCategory = projects.filter(p =>
        categories.some(c => c.key === p.category)
      );
      if(byCategory.length > 0) filtered.push(...byCategory);
    }
    if (skills.length > 0) {
      const bySkills = projects.filter(p =>
        skills.some(sk =>
          p.languages.includes(sk) || p.technologies.includes(sk)
        )
      );
      if(bySkills.length > 0) filtered.push(...bySkills);
    }
    if (dates.length > 0) {
      const byDates = projects.filter(p =>
        dates.some(date => p.date.getFullYear() === Number(date.value))
      );
      if(byDates.length > 0) filtered.push(...byDates);
    }
    const uniqueProjects = Array.from(
      new Map(filtered.map(p => [p.collectionName, p])).values()
    );
    setData(uniqueProjects);
    }, [projects, categories, skills, dates])

  return (
    <section className="flex flex-col gap-10">
      <ProjectFilters categories={category} placeholder={placeholder[locale]} languages={languages}
                      title="filtrame el bicho" dates={dateFilter}
                      translation={filterT}
                      technologies={technologies}
                      handleDate={(d)=> setDates(d)}
                      handleCategory={(c)=> setCategories(c)}
                      handleSkill={(s)=> setSkills(s)}/>
      <Projects data={data} locale={locale} translation={cardT}/>
    </section>
  )
}