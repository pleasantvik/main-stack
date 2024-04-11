import { FieldValues, useController } from "react-hook-form";
import ControlledInput from "shared/Input/ControlledInput";

import { twMerge } from "tailwind-merge";
import { IFilterStartEndDate } from "./interface";

const FilterStartEndDate = <TFieldValue extends FieldValues>(
  props: IFilterStartEndDate<TFieldValue>
) => {
  const { label, className, name, placeholder } = props;

  const { field: startField } = useController({
    name: name.start,
    control: props.control,
  });
  const { field: endField } = useController({
    name: name.end,
    control: props.control,
  });

  const cellsClassName = twMerge(
    "w-full border !px-[10px] !py-[15px] leading-[18px] rounded-[8px]",
    props.cellsClassName
  );
  return (
    <div className={className}>
      {label && (
        <div className="flex justify-between w-full ">
          <p className="text-[16px] text-black leading-6 font-[600]">{label}</p>
        </div>
      )}

      <div className="flex items-center gap-[10px] mt-[12px]">
        <div className="w-[171px] h-max flex">
          <ControlledInput
            control={props.control}
            name={name.start}
            type="date"
            className={cellsClassName}
            inputProps={{
              max: endField.value,
            }}
            placeholder={placeholder}
          />
        </div>
        <div className="w-[171px] h-max">
          <ControlledInput
            control={props.control}
            name={name.end}
            type="date"
            className={cellsClassName}
            inputProps={{
              min: startField.value,
            }}
            placeholder={placeholder}
          />
        </div>
      </div>
    </div>
  );
};

FilterStartEndDate.defaultProps = {
  type: "block",
  startLabel: "Start",
  endLabel: "End",
};

export default FilterStartEndDate;
