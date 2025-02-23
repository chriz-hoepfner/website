import { Meta, StoryFn } from '@storybook/react';

import { Avatar as AvatarComponent } from './avatar';

export default {
  title: 'Components/Shared/Avatar',
  component: AvatarComponent,
  argTypes: {
    bg: {
      control: {
        type: 'select',
        options: ['contessaRed', 'waferWhite'],
      },
    },
  },
} as Meta<typeof AvatarComponent>;

const Template: StoryFn<typeof AvatarComponent> = args => (
  <AvatarComponent {...args} />
);

export const Avatar = Template.bind({});
Avatar.args = {
  bg: 'contessaRed',
};
