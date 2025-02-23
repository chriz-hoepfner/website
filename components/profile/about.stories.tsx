import { Meta, StoryFn } from '@storybook/react';

import { About as AboutComponent } from './about';

export default {
  title: 'Components/Profile/About',
  component: AboutComponent,
} as Meta<typeof AboutComponent>;

const Template: StoryFn<typeof AboutComponent> = args => (
  <AboutComponent {...(args as object)} />
);

export const About = Template.bind({});
