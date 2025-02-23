import { Meta, StoryFn } from '@storybook/react';

import { CenterButton as CenterButtonComponent } from './centerButton';

export default {
  title: 'Components/Profile/CenterButton',
  component: CenterButtonComponent,
} as Meta<typeof CenterButtonComponent>;

const Template: StoryFn<typeof CenterButtonComponent> = args => (
  <div className="inline-block">
    <CenterButtonComponent {...(args as object)} />
  </div>
);

export const CenterButton = Template.bind({});
