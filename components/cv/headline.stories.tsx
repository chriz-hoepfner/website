import { ComponentMeta, ComponentStory } from '@storybook/react';

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
} as ComponentMeta<typeof HeadlineComponent>;

const Template: ComponentStory<typeof HeadlineComponent> = args => (
  <HeadlineComponent {...args}>
    Incididunt pariatur sit nulla eiusmod
  </HeadlineComponent>
);

export const Headline = Template.bind({
  args: {
    level: 2,
  },
});
