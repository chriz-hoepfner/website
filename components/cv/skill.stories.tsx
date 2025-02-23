import { Meta, StoryFn } from '@storybook/react';
import { flatten, unflatten } from 'flat';

import { Skill as SkillComponent } from './skill';

export default {
  title: 'Components/CV/Skill',
  component: SkillComponent,
  argTypes: {
    ['skill.label']: {
      name: 'label',
    },
    ['skill.rating']: {
      name: 'rating',
    },
    skill: {
      if: { arg: 'never' },
    },
  },
} as Meta<typeof SkillComponent>;

const Template: StoryFn<typeof SkillComponent> = args => (
  <SkillComponent {...unflatten(args)}>
    Incididunt pariatur sit nulla eiusmod
  </SkillComponent>
);

export const Skill = Template.bind({});
Skill.args = flatten({
  skill: {
    label: 'Aliquip irure',
    rating: 4,
  },
});
