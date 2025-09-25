import type IApp from "@/core/types/IApp.ts";
import type {Locale} from "@/core/types/Locales.ts";


const labels: Record<Locale, string[]> = {
  en: ["home", "resume", "about me", "projects", "blogs"],
  es: ["inicio", "resumen", "sobre mí", "proyectos", "blogs"],
};

const paths = ["", "resume", "about", "projects", "blogs"];

export default async function getAppData(locale: Locale): Promise<IApp> {
  const items = labels[locale] ?? labels.en;

  return {
    title: "janz portfolio",
    nav: items.map((label, idx) => ({
      label,
      path: paths[idx] ?? "#",
    })),
  };
}