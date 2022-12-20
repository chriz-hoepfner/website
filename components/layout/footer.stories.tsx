import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Footer as FooterComponent } from './footer';

export default {
  title: 'Components/Layout/Footer',
  component: FooterComponent,
} as ComponentMeta<typeof FooterComponent>;

export const Footer: ComponentStory<typeof FooterComponent> = args => (
  <FooterComponent {...(args as object)} />
);
