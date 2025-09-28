import type {IMusicGenre} from "@/core/types/INerdThings.ts";
import type INerdThings from "@/core/types/INerdThings.ts";
import type {Locale} from "@/core/types/Locales.ts";

const hobbies: Record<Locale, string[]> = {
  en: ["video games", "music", "basketball", "exercise"],
  es: ["video juegos", "musica", "basketball", "ejercitarse"],
}

const genre: Record<Locale, string[]> = {
  en: ["Lo-Fi", "R&B", "Alternative Rock", "Nu Metal"],
  es: ["Lo-Fi", "R&B", "Rock Alternativo", "Nu Metal"],
}
const preference: number[] = [4, 3, 5, 4]

export default async function getNerdThings(locale: Locale) {
  return {
    hobbies: hobbies[locale],
    music: genre[locale].map((item, i) => {
      return {
        name: item,
        preference: preference[i]
      } as IMusicGenre
    })
  } as INerdThings;
}