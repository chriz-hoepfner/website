import { Meta, StoryFn } from '@storybook/react';

import { Label as LabelComponent } from './label';

export default {
  title: 'Components/CV/Label',
  component: LabelComponent,
} as Meta<typeof LabelComponent>;

const Template: StoryFn<typeof LabelComponent> = args => (
  <LabelComponent {...args}>
    Incididunt pariatur sit nulla eiusmod
  </LabelComponent>
);

export const Label = Template.bind({});
