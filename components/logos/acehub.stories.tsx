import { ComponentMeta, ComponentStory } from '@storybook/react';

import { AcehubLogo as AcehubLogoComponent } from './acehub';

export default {
  title: 'Components/Logos/AcehubLogo',
  component: AcehubLogoComponent,
} as ComponentMeta<typeof AcehubLogoComponent>;

export const AcehubLogo: ComponentStory<typeof AcehubLogoComponent> = args => (
  <AcehubLogoComponent {...(args as object)} />
);
