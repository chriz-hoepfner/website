import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Home as HomeComponent } from './index.page';

export default {
  title: 'Pages/Home',
  component: HomeComponent,
  parameters: { options: { showPanel: false } },
} as ComponentMeta<typeof HomeComponent>;

export const Home: ComponentStory<typeof HomeComponent> = args => (
  <HomeComponent {...(args as object)} />
);
