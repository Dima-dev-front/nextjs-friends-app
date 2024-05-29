import type { FC, PropsWithChildren } from 'react';

export const InputGroup: FC<PropsWithChildren> = ({ children }) => (
  <div className='flex flex-col gap-2'>{children}</div>
);
