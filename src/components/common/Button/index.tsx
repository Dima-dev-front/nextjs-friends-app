import type { ComponentPropsWithoutRef, FC, PropsWithChildren } from 'react';
import cn from 'classnames';

type Props = ComponentPropsWithoutRef<'button'> & PropsWithChildren;

export const Button: FC<Props> = ({ className, children, ...props }) => (
  <button
    className={cn(
      `bg-pink600 rounded-lg px-[12.5px] py-[14px] font-medium text-white transition-opacity
        hover:opacity-80 disabled:cursor-not-allowed disabled:opacity-60`,
      className,
    )}
    {...props}
  >
    {children}
  </button>
);
