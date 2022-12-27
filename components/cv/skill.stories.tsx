import { ComponentMeta, ComponentStory } from '@storybook/react';
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
} as ComponentMeta<typeof SkillComponent>;

const Template: ComponentStory<typeof SkillComponent> = args => (
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
