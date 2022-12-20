import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Skills as SkillsComponent } from './skills';

export default {
  title: 'Components/Profile/Skills',
  component: SkillsComponent,
} as ComponentMeta<typeof SkillsComponent>;

export const Skills: ComponentStory<typeof SkillsComponent> = args => (
  <SkillsComponent {...(args as object)} />
);
