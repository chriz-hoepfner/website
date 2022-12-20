import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Companies as CompaniesComponent } from './companies';

export default {
  title: 'Components/Profile/Companies',
  component: CompaniesComponent,
} as ComponentMeta<typeof CompaniesComponent>;

export const Companies: ComponentStory<typeof CompaniesComponent> = args => (
  <CompaniesComponent {...(args as object)} />
);
