import classNames from 'classnames';

import { ITimeLineItem, TTimelineItem } from 'types/cv';

import { Label } from './label';

interface IProps extends Pick<ITimeLineItem, 'from' | 'to' | 'important'> {}

export const TimelineLabel = ({ from, to, important }: IProps) => {
  const [fromMonth, fromYear] = from.split(' ');
  const [toMonth, toYear] = to.split(' ');

  return (
    <Label>
      <div
        className={classNames('leading-none', {
          'mt-[4px]': important,
        })}
      >
        <span className="font-normal">{toMonth}</span>{' '}
        <span className="text-sm font-bold">{toYear}</span>
      </div>

      <div className="leading-none">
        <span className="font-normal">{fromMonth}</span>{' '}
        <span className="text-sm font-bold">{fromYear}</span>
      </div>
    </Label>
  );
};
