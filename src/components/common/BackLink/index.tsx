'use client';

import type { ComponentProps, FC, PropsWithChildren } from 'react';
import { useRouter } from 'next/navigation';
import cn from 'classnames';

type Props = ComponentProps<'span'> & PropsWithChildren;

export const BackLink: FC<Props> = ({ children, className = '' }) => {
  const router = useRouter();

  const handleClick = () => {
    router.back();
  };

  return (
    <span
      className={cn(
        'text-pink600 inline-block w-fit cursor-pointer text-sm',
        className,
      )}
      onClick={handleClick}
    >
      {children ? children : '<-- Back'}
    </span>
  );
};
