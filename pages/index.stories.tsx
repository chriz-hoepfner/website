import { Meta, StoryFn } from '@storybook/react';

import { Home as HomeComponent } from './index.page';

export default {
  title: 'Pages/Home',
  component: HomeComponent,
  parameters: { options: { showPanel: false } },
} as Meta<typeof HomeComponent>;

const Template: StoryFn<typeof HomeComponent> = args => (
  <HomeComponent {...(args as object)} />
);

export const Home = Template.bind({});
