import { ComponentMeta, ComponentStory } from '@storybook/react';

import { HireButton as HireButtonComponent } from './hireButton';

export default {
  title: 'Components/Profile/HireButton',
  component: HireButtonComponent,
} as ComponentMeta<typeof HireButtonComponent>;

export const HireButton: ComponentStory<typeof HireButtonComponent> = args => (
  <div className="inline-block">
    <HireButtonComponent {...(args as object)} />
  </div>
);
