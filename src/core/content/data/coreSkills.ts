import {angular, astro, next, react} from "./frontend";
import {java, csharp, typescript} from "./languages";
import {dotnet, nest, spring} from "@/core/content/data/backend.ts";

export default async function getCoreSkills(){
  return [java, csharp, typescript, react, next, angular, astro, spring, dotnet, nest]
}