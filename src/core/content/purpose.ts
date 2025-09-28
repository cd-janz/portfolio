import type {Locale} from "@/core/types/Locales.ts";

const purpose: Record<Locale, string> = {
  en: "The true value of software lies in solving real problems and addressing essential needs. My focus is on building high-quality solutions with outstanding user experience, designed to create tangible impact and deliver direct business value.",
  es: "El verdadero valor del software está en resolver problemas reales y facilitar necesidades clave. Mi enfoque es desarrollar soluciones de alta calidad, con una experiencia de usuario excepcional, que generen impacto tangible y aporten valor directo al negocio."
}
export default async function getPurpose(locale: Locale){
  return purpose[locale];
}