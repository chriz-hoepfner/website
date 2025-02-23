import { Meta, StoryFn } from '@storybook/react';

import { Companies as CompaniesComponent } from './companies';

export default {
  title: 'Components/Profile/Companies',
  component: CompaniesComponent,
} as Meta<typeof CompaniesComponent>;

const Template: StoryFn<typeof CompaniesComponent> = args => (
  <CompaniesComponent {...(args as object)} />
);

export const Companies = Template.bind({});
