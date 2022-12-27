import { ComponentMeta, ComponentStory } from '@storybook/react';

import { CV as CVComponent } from './cv.page';

export default {
  title: 'Pages/CV',
  component: CVComponent,
  parameters: { options: { showPanel: false } },
} as ComponentMeta<typeof CVComponent>;

export const CV: ComponentStory<typeof CVComponent> = args => (
  <CVComponent {...(args as object)} />
);
