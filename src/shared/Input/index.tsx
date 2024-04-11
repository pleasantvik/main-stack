import { InputAdornment, OutlinedInput, Paper } from "@mui/material";
import { IInputProps } from "./interface";
import { twMerge } from "tailwind-merge";

const Input = (props: IInputProps) => {
  const {
    label,

    startAdornmentProps,
    endAdornmentProps,

    className,
    startAdornment,
    endAdornment,
    maxlength,

    ...rest
  } = props;

  return (
    <div className="w-full max-w-full overflow-hidden flex flex-col py-2">
      {label && <label className="pb-[3px] text-[#333333]">{label}</label>}

      <OutlinedInput
        {...rest}
        classes={{
          input: twMerge(
            "  w-full text-[12px] rounded-[12px] border-[1px] border-[#EFF1F6 bg-[#EFF1F6] px-[16px] py-[14px]",
            className
          ),
        }}
        startAdornment={
          startAdornment ? (
            <Paper variant="outlined" style={{ backgroundColor: "#EFF1F6" }}>
              <InputAdornment {...startAdornmentProps} position="start">
                {startAdornment}
              </InputAdornment>
            </Paper>
          ) : null
        }
        endAdornment={
          endAdornment ? (
            <Paper variant="outlined" style={{ backgroundColor: "#EFF1F6" }}>
              <InputAdornment {...endAdornmentProps} position="end">
                {endAdornment}
              </InputAdornment>
            </Paper>
          ) : null
        }
        inputProps={{ maxlength: maxlength }}
        color="primary"
      />

      {/* <FieldHelperText error={props.error} helperText={helperText} /> */}
    </div>
  );
};

export default Input;
