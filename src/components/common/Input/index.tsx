import { ComponentProps, ForwardRefRenderFunction, forwardRef } from 'react';

export const InputWithForwardedRef: ForwardRefRenderFunction<
  HTMLInputElement,
  ComponentProps<'input'>
> = ({ ...props }, ref) => (
  <input
    type='text'
    className='border-gray300 bg-gray50 placeholder:text-gray500
      hover:border-gray500 focus-within:border-gray500 rounded-lg border-[1px] px-4 py-2 outline-none transition-colors'
    {...props}
    ref={ref}
  />
);

export const Input = forwardRef(InputWithForwardedRef);
