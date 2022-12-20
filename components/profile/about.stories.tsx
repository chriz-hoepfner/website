import { ComponentMeta, ComponentStory } from '@storybook/react';

import { About as AboutComponent } from './about';

export default {
  title: 'Components/Profile/About',
  component: AboutComponent,
} as ComponentMeta<typeof AboutComponent>;

export const About: ComponentStory<typeof AboutComponent> = args => (
  <AboutComponent {...(args as object)} />
);
