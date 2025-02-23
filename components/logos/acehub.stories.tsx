import { Meta, StoryFn } from '@storybook/react';

import { AcehubLogo as AcehubLogoComponent } from './acehub';

export default {
  title: 'Components/Logos/AcehubLogo',
  component: AcehubLogoComponent,
} as Meta<typeof AcehubLogoComponent>;

const Template: StoryFn<typeof AcehubLogoComponent> = args => (
  <AcehubLogoComponent {...(args as object)} />
);

export const AcehubLogo = Template.bind({});
