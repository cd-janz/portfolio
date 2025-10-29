import type { IDetailedSkill } from "../../../../core/types/ISkill.ts";

interface Props {
  label: string;
  items: IDetailedSkill[];
}
export default function TechPrevList({ label, items }: Props) {
  return (
    <div className="flex flex-col gap-1">
      <h5 className="text-xs capitalize font-light">{label}</h5>
      <ul className="text-xs flex flex-wrap gap-1">
        {items.map((item: IDetailedSkill, i) => (
          <li
            key={i}
            className="px-2 py-0.5 bg-primary-active rounded-md text-text-alternative"
          >
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
}

