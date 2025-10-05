import type {Locale} from "../../types/Locales.ts";

const first: Record<Locale, string> = {
  en: "Hello, I am ...",
  es: "Hola, soy...",
}

export default async function getHeroWelcome(locale: Locale){
  return{
    first: first[locale] ?? first.en,
  }
}