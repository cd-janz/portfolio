import type {TFilter} from "../types/TFilter.ts";
import {getNYearsBefore} from "../../../core/utils/dateUtils.ts";

export default function getDateFilter(nYears: number){
  const years = getNYearsBefore(new Date().getFullYear(), nYears);
  return years.map(y => {return {label: y.toString(), value: y.toString()} as TFilter})
}