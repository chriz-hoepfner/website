import { Meta, StoryFn } from '@storybook/react';

import { CV as CVComponent } from './cv.page';

export default {
  title: 'Pages/CV',
  component: CVComponent,
  parameters: { options: { showPanel: false } },
} as Meta<typeof CVComponent>;

const Template: StoryFn<typeof CVComponent> = args => (
  <CVComponent {...(args as object)} />
);

export const CV = Template.bind({});
