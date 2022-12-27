import { PropsWithChildren } from 'react';

export const Label = ({ children }: PropsWithChildren) => {
  return (
    <div className="text-right text-xs font-bold uppercase text-black/40 dark:text-waferWhite/50">
      {children}
    </div>
  );
};
