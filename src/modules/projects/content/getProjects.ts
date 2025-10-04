import type {IProjectCollection} from "@/projects/types/IProject.ts";
import type IProject from "@/projects/types/IProject.ts";
import {getEntry, render} from "astro:content";

async function fetchCollection(locale: string, name: string){
  const res = await getEntry("projectItem", `${locale}${name}`)
  if(!res) throw new Error(`${name} not found`);
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
  return [];
}