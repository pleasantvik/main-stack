import { InputAdornmentProps, OutlinedInputProps } from "@mui/material";

import { Control, FieldErrorsImpl, FieldValues, Path } from "react-hook-form";

// import { FieldValues } from 'react-hook-form';

type IInputAdornmentProps = Omit<InputAdornmentProps, "position">;

export interface IBaseControlledField<TFieldValues extends FieldValues> {
  name: Path<TFieldValues>;
  control?: Control<TFieldValues>;
  errors?: Partial<FieldErrorsImpl<TFieldValues>>;
}

export type IInputProps = Omit<OutlinedInputProps, "type"> & {
  label?: string;
  asteric?: boolean;
  startAdornmentProps?: IInputAdornmentProps;
  endAdornmentProps?: IInputAdornmentProps;
  maxlength?: number | null;
  inputRef?: React.ForwardedRef<HTMLInputElement>;
  type?:
    | "text"
    | "number"
    | "number-text"
    | "money"
    | "password"
    | "email"
    | "search"
    | "date"
    | "datetime-local"
    | "file";
};

export type IControlledInputProps<TFieldValues extends FieldValues> = Omit<
  IInputProps,
  "value" | "name"
> &
  IBaseControlledField<TFieldValues> & {
    name: string;
    className: string;
    type?:
      | "text"
      | "number"
      | "password"
      | "email"
      | "date"
      | "file"
      | "datetime-local";
    onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  };

export type IDate<TFieldValues extends FieldValues> =
  IBaseControlledField<TFieldValues> & {
    label?: string;
    className?: string;
    asteric?: boolean;
  };
