import "@/projects/styles/projects.css"
import type IProject from "@/projects/types/IProject.ts";
import type {IProjectSchema} from "@/projects/types/IProject.ts";
import ProjectCard from "@/projects/components/molecules/ProjectCard.tsx";
import type {Locale} from "@/core/types/Locales.ts";

interface Props{
  data: IProject[];
  locale: Locale;
  translation: IProjectSchema
}
export default function Projects({data, locale, translation}: Props){
  return(
    <ul className="projects_container">
      {data.map((item,index)=>(
        <ProjectCard project={item} key={index} locale={locale} translation={translation} />
      ))}
    </ul>
  )
}