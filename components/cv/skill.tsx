import classNames from 'classnames';

import { ISkill } from 'types/cv';

interface IProps {
  skill: ISkill;
}

const PROFICIENCIES = {
  1: 'Fundamental Awareness (basic knowledge)',
  2: 'Novice (limited experience)',
  3: 'Intermediate (practical application)',
  4: 'Advanced (applied theory)',
  5: 'Expert (recognized authority)',
} as const;

const Star = ({ variant }: { variant: 'full' | 'half' }) => {
  return (
    <span
      className={classNames('relative h-[18px] overflow-hidden', {
        'w-[8px]': variant === 'half',
        'w-[17px]': variant === 'full',
      })}
    >
      <span className="absolute top-1/2 right-0 inline-block -translate-y-1/2 text-right">
        ★
      </span>
    </span>
  );
};

export const Skill = ({ skill }: IProps) => {
  return (
    <div className="flex w-full justify-between">
      <div className="text-sm leading-loose print:text-xs print:leading-loose">
        {skill.label}
      </div>

      {(() => {
        if (!skill.rating) {
          return null;
        }

        const rest = skill.rating % 1;
        const rating = Math.floor(skill.rating) as keyof typeof PROFICIENCIES;

        return (
          <div
            title={PROFICIENCIES[rating]}
            className="flex items-center text-buntingBlue dark:text-contessaRed"
          >
            {rest !== 0 && <Star variant="half" />}

            {Array(rating)
              .fill('')
              .map((_, index) => (
                <Star key={index} variant="full" />
              ))}
          </div>
        );
      })()}
    </div>
  );
};
