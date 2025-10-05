import type {TFilter} from "../../types/TFilter.ts";
import "../../styles/select.css"
import {useState} from "react";
import clsx from "clsx";
import CheckIcon from "../../../../core/assets/icons/system/CheckIcon.tsx";

interface Props{
  data: TFilter[]
  placeholder: string
  handler: (value: TFilter[]) => void
}
export default function FilterSelect({data, placeholder, handler}: Props){
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<TFilter[]>([]);
  const handleChange = (item: TFilter) => {
    const already = selected.some(i => i.label === item.label);
    if(!already){
      handler([...selected, item]);
      setSelected([...selected, item]);
      return;
    }
    const newData = selected.filter(i => i.label !== item.label);
    handler(newData);
    setSelected(newData);
  }
  return(
    <div className="relative gap-1 flex flex-col">
      <div className="select_box" onClick={() => setOpen(!open)}>
        <ul className="select_value select-none">
          {selected.length === 0 ? placeholder : (
            <>
              {selected.slice(0,3).map((i: TFilter) => (
                <li key={i.value} className="select_value-item">
                  {i.label}
                </li>
              ))}
              {selected.length > 3 && (
                <li className="select_value-item">+{selected.length-3}</li>
              )}
            </>
          )}
        </ul>
      </div>
      <ul className={clsx(open ? "open" : "close", "select_options")}>
        {data.map((item, index) => (
          <li key={index} className={clsx("select_options-item")}
          onClick={() => handleChange(item)}>
            {item.label}
            {selected.some(it => it.label === item.label) && (
              <figure className="w-6 h-6">
                <CheckIcon />
              </figure>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}