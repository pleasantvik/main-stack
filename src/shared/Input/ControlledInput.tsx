import { Controller, FieldValues } from "react-hook-form";
import { IControlledInputProps } from "./interface";
import Input from ".";

const ControlledInput = <TFieldValue extends FieldValues>(
  props: IControlledInputProps<TFieldValue>
) => {
  const { name, control, onKeyDown,className, ...rest } = props;
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <Input
          {...rest}
          {...field}
          error={(fieldState.error?.message || "").length > 0}
          onKeyDown={onKeyDown}
          className={className}
        />
      )}
    />
  );
};

export default ControlledInput;
