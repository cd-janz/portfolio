import type {Locale} from "@/core/types/Locales.ts";
import type {IService} from "@/core/types/IService.ts";

const title: Record<Locale, string[]> = {
  en: ["Web Frontend", "Backend", "Mobile", "Databases", "UI/UX Design"],
  es: ["Frontend Web", "Backend", "Móvil", "Bases de Datos", "Diseño UI/UX"]
};

const description: Record<Locale, string[]> = {
  en: [
    "Development of interactive and responsive web applications using modern frameworks.",
    "Building robust APIs and scalable server-side architectures.",
    "Creation of native and cross-platform mobile applications.",
    "Design and optimization of relational and non-relational databases.",
    "Design of intuitive, accessible and user-focused interfaces."
  ],
  es: [
    "Desarrollo de aplicaciones web interactivas y responsivas con frameworks modernos.",
    "Construcción de APIs robustas y arquitecturas escalables en el lado del servidor.",
    "Creación de aplicaciones móviles nativas y multiplataforma.",
    "Diseño y optimización de bases de datos relacionales y no relacionales.",
    "Diseño de interfaces intuitivas, accesibles y centradas en el usuario."
  ]
};

export default async function getServices(locale: Locale) {
  return title[locale].map((t, i) => ({
    name: t,
    description: description[locale][i],
    proficiency: [85, 90, 60, 75, 60][i]
  })) as IService[];
}