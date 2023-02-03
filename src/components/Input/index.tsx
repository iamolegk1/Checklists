import { FC, forwardRef } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import { TextFieldProps } from '@mui/material';

type InputProps = {
  name: string;
} & TextFieldProps;

const Input: FC<InputProps> = forwardRef(({ name, ...props }, ref) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <TextField {...props} {...field} error={!!errors[name]} />
      )}
    />
  );
});

export default Input;
