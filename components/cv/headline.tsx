import { PropsWithChildren } from 'react';

interface IProps {
  level: 2 | 3;
}

export const Headline = ({ children, level }: PropsWithChildren<IProps>) => {
  if (level === 2) {
    return (
      <h2 className="text-xl font-bold uppercase text-buntingBlue/30 dark:text-waferWhite/40">
        {children}
      </h2>
    );
  }

  return (
    <h3 className="text-base font-bold uppercase text-buntingBlue/40 dark:text-waferWhite/40">
      {children}
    </h3>
  );
};
