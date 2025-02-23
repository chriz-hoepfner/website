import { Meta, StoryFn } from '@storybook/react';

import { SirupLogo as SirupLogoComponent } from './sirup';

export default {
  title: 'Components/Logos/SirupLogo',
  component: SirupLogoComponent,
} as Meta<typeof SirupLogoComponent>;

const Template: StoryFn<typeof SirupLogoComponent> = args => (
  <SirupLogoComponent {...(args as object)} />
);

export const SirupLogo = Template.bind({});
