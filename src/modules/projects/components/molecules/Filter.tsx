import type { TFilter } from "../../types/TFilter.ts";
import FilterSelect from "../atoms/FilterSelect.tsx";

interface Props {
  title: string;
  placeholder: string;
  data: TFilter[];
  handler: (data: TFilter[]) => void;
}
export default function Filter({ title, data, placeholder, handler }: Props) {
  return (
    <li className="flex flex-col gap-1">
      <span className="capitalize text-xs lg:text-sm">{title}</span>
      <FilterSelect
        data={data}
        placeholder={`${placeholder} ${title}`}
        handler={handler}
      />
    </li>
  );
}

