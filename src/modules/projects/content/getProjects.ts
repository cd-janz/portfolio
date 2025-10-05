import type {IProjectCollection} from "../types/IProject.ts";
import type IProject from "../types/IProject.ts";
import {getEntry, render} from "astro:content";
import portfolio from "./projects/portfolio.ts";

const projects: IProject[] = [portfolio]

async function fetchCollection(locale: string, name: string){
  const res = await getEntry("projectItem", `${locale}_${name}`)
  if(!res) throw new Error(`${locale}_${name} not found`)
  const data = res.data;
  return {
    name: data.name,
    type: data.type,
    description: data.description,
    architecture: data.architecture,
    Content: (await render(res)).Content,
  } as IProjectCollection;
}

export default async function getProjects(locale: string): Promise<IProject[]> {
  return await Promise.all(
    projects.map(async (project) => ({
      ...project,
      collection: await fetchCollection(locale, project.collectionName),
    }))
  );
}