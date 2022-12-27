import classNames from 'classnames';

import { ITimeLineItem, Optional } from 'types/cv';

interface IProps
  extends Optional<
    Pick<
      ITimeLineItem,
      'title' | 'subtitle' | 'description' | 'important' | 'tech'
    >,
    'title' | 'tech'
  > {}

export const TimelineItem = ({
  title,
  subtitle,
  description,
  important,
  tech,
}: IProps) => {
  return (
    <div>
      {title && (
        <h3
          className={classNames('font-bold text-black dark:text-white/90', {
            'text-base leading-[1.2] print:leading-[1.2]': !important,
            'text-2xl leading-[1.1] print:text-xl print:leading-[1.1]':
              important,
          })}
        >
          {title}
        </h3>
      )}

      {subtitle && (
        <p
          className={classNames('mt-1', {
            'text-base leading-[1.2] print:leading-[1.1]': !important,
            'text-lg leading-[1.1] print:text-base print:leading-[1.1]':
              important,
            'mb-[6px]': !!title,
          })}
        >
          {subtitle}
        </p>
      )}

      {description && (
        <p className="mt-1 max-w-lg text-sm leading-[1.2] text-buntingBlue/50 dark:text-waferWhite/50 print:leading-[1.1]">
          {description}{' '}
          {tech && (
            <span className="mt-1 block text-xs text-buntingBlue/40 transition-colors hover:text-buntingBlue/70 dark:text-waferWhite/30 dark:hover:text-waferWhite/70 print:leading-[1.25]">
              {tech}
            </span>
          )}
        </p>
      )}
    </div>
  );
};
