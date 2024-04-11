import { FieldValues, Path } from "react-hook-form";
import { IBaseControlledField } from "shared/Input/interface";

export type IFilterStartEndDate<TFieldValues extends FieldValues> = Omit<
  IBaseControlledField<TFieldValues>,
  "name"
> & {
  label?: string;
  type?: "block" | "inline";
  className?: string;
  cellsClassName?: string;
  startLabel?: string;
  endLabel?: string;
  name: {
    start: Path<TFieldValues>;
    end: Path<TFieldValues>;
  };
  placeholder?: string
};
