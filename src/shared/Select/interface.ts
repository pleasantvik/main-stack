import { SelectProps } from "@mui/material";

import { IBaseControlledField } from "../Input/interface";
import { FieldValues } from "react-hook-form";

export type ISelectOption = {
  label: string;
  value: string;
  onClick?: () => void;
  disabled?: boolean;
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
};

export type ISelectProps = Omit<
  SelectProps,
  "onChange" | "placeholder" | "renderValue"
> & {
  label?: string;
  labelClassName?: string;
  labelContainerClassName?: string;

  labelHelperText?: React.ReactNode;
  options: ISelectOption[];
  onChange?: (value: string | string[]) => void;
  showSelectAll?: boolean;
  showChipPreview?: boolean;
  placeholder?: React.ReactNode | string;
  searchable?: boolean;
  asteric?: boolean;
  title?: string;
  renderedValueClassName?: string;
  singleSelection?: boolean;

  renderValue?: (
    selected: unknown,
    options: ISelectOption | Record<string, ISelectOption>
  ) => React.ReactNode | string | number;
};

export type IControlledSelect<TFieldValues extends FieldValues> =
  IBaseControlledField<TFieldValues> &
    Omit<ISelectProps, "value" | "name" | "onChange">;
