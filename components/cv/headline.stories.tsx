import { Meta, StoryFn } from '@storybook/react';

import { Headline as HeadlineComponent } from './headline';

export default {
  title: 'Components/CV/Headline',
  component: HeadlineComponent,
  argTypes: {
    level: {
      options: [2, 3],
      control: { type: 'select' },
    },
  },
} as Meta<typeof HeadlineComponent>;

const Template: StoryFn<typeof HeadlineComponent> = args => (
  <HeadlineComponent {...args}>
    Incididunt pariatur sit nulla eiusmod
  </HeadlineComponent>
);

export const Headline = Template.bind({
  args: {
    level: 2,
  },
});
