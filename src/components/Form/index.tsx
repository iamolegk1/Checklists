import { FC, useEffect } from 'react';
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

import FormInput from '../Input';
import { TInput } from '../../types';
import { defaultValues } from './constants';
import { useAppDispatch } from '../../state/hooks';
import { addTodo } from '../../state/slices/todoSlice';

const Form: FC = () => {
  const dispatch = useAppDispatch();

  const methods = useForm<TInput>({
    defaultValues,
  });

  const {
    register,
    reset,
    handleSubmit,
    formState: { isSubmitSuccessful, errors },
  } = methods;

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  const onSubmitHandler: SubmitHandler<TInput> = values => {
    dispatch(addTodo(values.task));
  };

  const handleErrors = () => {
    if (errors.task && errors.task.type === 'required')
      return 'Field is required';
    if (errors.task && errors.task.type === 'minLength')
      return 'At least 2 characters';
  };

  return (
    <FormProvider {...methods}>
      <Box
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        component='form'
        noValidate
        autoComplete='off'
        onSubmit={handleSubmit(onSubmitHandler)}
      >
        <FormInput
          {...register('task', { required: true, minLength: 2 })}
          label='Your task'
          placeholder='Write your checklist text here'
          sx={{ width: 300 }}
          InputLabelProps={{ shrink: true }}
          helperText={handleErrors()}
        />
        <Button
          type='submit'
          variant='contained'
          size='large'
          sx={{
            marginLeft: 2,
            '&:hover': {
              backgroundColor: '#00A300',
              boxShadow: 'none',
            },
          }}
        >
          Add
        </Button>
      </Box>
    </FormProvider>
  );
};

export default Form;
