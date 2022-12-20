import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Foldable as FoldableComponent } from './foldable';

export default {
  title: 'Components/Layout/Foldable',
  component: FoldableComponent,
} as ComponentMeta<typeof FoldableComponent>;

export const Foldable: ComponentStory<typeof FoldableComponent> = args => (
  <FoldableComponent {...(args as object)}>
    Incididunt pariatur sit nulla eiusmod cillum. Reprehenderit nostrud eiusmod
    cillum mollit. Occaecat minim commodo tempor qui incididunt deserunt
    excepteur aliqua voluptate labore commodo ex. Aliqua consectetur proident
    magna nisi fugiat exercitation enim.
  </FoldableComponent>
);
