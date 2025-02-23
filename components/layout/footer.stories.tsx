import { Meta, StoryFn } from '@storybook/react';

import { Footer as FooterComponent } from './footer';

export default {
  title: 'Components/Layout/Footer',
  component: FooterComponent,
} as Meta<typeof FooterComponent>;

export const Footer: StoryFn<typeof FooterComponent> = args => (
  <FooterComponent {...(args as object)} />
);
