import { Meta, StoryFn } from '@storybook/react';

import { Skills as SkillsComponent } from './skills';

export default {
  title: 'Components/Profile/Skills',
  component: SkillsComponent,
} as Meta<typeof SkillsComponent>;

const Template: StoryFn<typeof SkillsComponent> = args => (
  <SkillsComponent {...(args as object)} />
);

export const Skills = Template.bind({});
