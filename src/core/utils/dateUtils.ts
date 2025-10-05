import type {Locale} from "@/core/types/Locales.ts";

const months: Record<Locale, string[]> = {
  es: ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"],
  en:  ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
}
const options: Record<Locale, string> = {
  en: "from",
  es: "desde"
}
export default function getStringDate(locale: Locale, date: Date){
  const items = months[locale];
  const month = items[date.getMonth()];
  const year = date.getFullYear().toString();
  return [options[locale], `${month}, ${year}`];
}
export function getNYearsBefore(year: number, n: number){
  return Array.from({length: n+1}).map((_, i) =>{return year-i})
}