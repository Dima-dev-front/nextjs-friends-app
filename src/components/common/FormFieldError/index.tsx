import type { FC } from 'react';
import type { FieldError } from 'react-hook-form';

type Props = {
  error?: FieldError;
};

export const FormFieldError: FC<Props> = ({ error }) =>
  error ? (
    <span className='text-sm text-red-700'>This field is required.</span>
  ) : null;
