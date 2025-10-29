import type IProject from "../../types/IProject.ts";
import type { IProjectSchema } from "../../types/IProject.ts";
import getStringDate from "../../../../core/utils/dateUtils.ts";
import type { Locale } from "../../../../core/types/Locales.ts";
import TechPrevList from "../atoms/TechPrevList.tsx";
import SeeIcon from "../../../../core/assets/icons/system/SeeIcon.tsx";

interface Props {
  project: IProject;
  locale: Locale;
  translation: IProjectSchema;
}
export default function ProjectCard({ project, locale, translation }: Props) {
  return (
    <li className="project_card">
      <img
        src={project.picture}
        alt={`${project.collection?.name} cover image`}
        className="project_card-image"
      />
      <div className="px-2 py-3 flex flex-col gap-1">
        <h5 className="first-letter:capitalize font-bold text-lg 2xl:text-2xl">
          {project.collection?.name}
        </h5>
        <div className="flex items-center justify-start gap-1 text-xs">
          <p className="project_card-type">{project.collection?.type}</p>
          <figure className="w-2 h-2 rounded-full bg-primary-disabled" />
          <p className="font-light">{getStringDate(locale, project.date)[1]}</p>
        </div>
        <p className="py-2 text-sm font-light">
          {project.collection?.description}
        </p>
        <TechPrevList label={translation.languages} items={project.languages} />
        <TechPrevList
          label={translation.technologies}
          items={project.technologies}
        />
        <figure className="w-full h-[1px] bg-border my-1" />
        <div className="flex items-center justify-between gap-1 text-xs">
          <div className="flex items-center justify-start gap-1">
            <figure className="text-xs">{"</>"}</figure>
            <h6 className="font-light">{project.collection?.architecture}</h6>
          </div>
          <div className="font-light hover:text-primary-focus select-none flex items-center gap-1.5 capitalize">
            <h6>{translation.seeMore}</h6>
            <figure className="w-5 h-5">
              <SeeIcon />
            </figure>
          </div>
        </div>
      </div>
    </li>
  );
}

