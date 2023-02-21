import { ComponentMeta, ComponentStory } from '@storybook/react';

import { SirupLogo as SirupLogoComponent } from './sirup';

export default {
  title: 'Components/Logos/SirupLogo',
  component: SirupLogoComponent,
} as ComponentMeta<typeof SirupLogoComponent>;

export const SirupLogo: ComponentStory<typeof SirupLogoComponent> = args => (
  <SirupLogoComponent {...(args as object)} />
);
