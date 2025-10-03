import type IPerson from "@/core/types/IPerson.ts";
import type {Locale} from "@/core/types/Locales.ts";
import GithubIcon from "@/core/assets/icons/social/GithubIcon.astro"
import TelegramIcon from "@/core/assets/icons/social/TelegramIcon.astro"
import InstagramIcon from "@/core/assets/icons/social/InstagramIcon.astro"

const position: Record<Locale, string> = {
  en: "Mid-level Fullstack Developer",
  es: "Desarrollador Fullstack Semisenior"
}
const phrase: Record<Locale, string> = {
  en: "I prefer to be the first in a village than to be the second in Rome.",
  es: "Prefiero ser el primero en una aldea a ser el segundo en Roma."
}
export default async function getPersonData(locale: Locale): Promise<IPerson> {
  return{
    firstName: "juan camilo",
    lastName: "zuniga",
    email: "jczp_020401@hotmail.com",
    phoneNumber: "+57 305 472 5724",
    position: position[locale] ?? position.en,
    location: "Santa Marta, Colombia",
    nickname: "janz",
    phrase: phrase[locale] ?? phrase.en,
    social: [
      { icon: GithubIcon, path: "https://github.com/cd-janz" },
      { icon: TelegramIcon, path: "https://telegram.me/janz7924" },
      { icon: InstagramIcon, path: "https://instagram.me/janz7924" },
    ]
  } as IPerson;
}