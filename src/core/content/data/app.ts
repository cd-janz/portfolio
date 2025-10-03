import type IApp from "@/core/types/IApp.ts";
import type {Locale} from "@/core/types/Locales.ts";


const labels: Record<Locale, string[]> = {
  en: ["home", "skills", "projects", "contact", "blogs"],
  es: ["inicio", "habilidades", "proyectos", "contacto", "blogs"],
};

const paths = ["", "skills", "projects", "contact", "blogs"];

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