import { ComponentMeta, ComponentStory } from '@storybook/react';

import { CenterButton as CenterButtonComponent } from './centerButton';

export default {
  title: 'Components/Profile/CenterButton',
  component: CenterButtonComponent,
} as ComponentMeta<typeof CenterButtonComponent>;

export const CenterButton: ComponentStory<
  typeof CenterButtonComponent
> = args => (
  <div className="inline-block">
    <CenterButtonComponent {...(args as object)} />
  </div>
);
