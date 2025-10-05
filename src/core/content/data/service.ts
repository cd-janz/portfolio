import type {Locale} from "../../types/Locales.ts";
import type {IService} from "../../types/IService.ts";

const title: Record<Locale, string[]> = {
  en: ["Web Frontend", "Backend", "Databases", "UI/UX Design"],
  es: ["Frontend Web", "Backend", "Bases de Datos", "Diseño UI/UX"]
};

const description: Record<Locale, string[]> = {
  en: [
    "Development of interactive and responsive web applications using modern frameworks.",
    "Building robust APIs and scalable server-side architectures.",
    "Design and optimization of relational and non-relational databases.",
    "Design of intuitive, accessible and user-focused interfaces."
  ],
  es: [
    "Desarrollo de aplicaciones web interactivas y responsivas con frameworks modernos.",
    "Construcción de APIs robustas y arquitecturas escalables en el lado del servidor.",
    "Diseño y optimización de bases de datos relacionales y no relacionales.",
    "Diseño de interfaces intuitivas, accesibles y centradas en el usuario."
  ]
};

export default async function getServices(locale: Locale) {
  return title[locale].map((t, i) => ({
    name: t,
    description: description[locale][i],
    proficiency: [85, 90, 75, 60][i]
  })) as IService[];
}