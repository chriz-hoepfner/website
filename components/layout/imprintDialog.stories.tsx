import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ImprintContextProvider } from './imprintContext';
import { ImprintDialog as ImprintDialogComponent } from './imprintDialog';

export default {
  title: 'Components/Layout/ImprintDialog',
  component: ImprintDialogComponent,
} as ComponentMeta<typeof ImprintDialogComponent>;

export const ImprintDialog: ComponentStory<
  typeof ImprintDialogComponent
> = args => (
  <ImprintContextProvider isInitiallyVisible={true}>
    <ImprintDialogComponent {...(args as object)} />
  </ImprintContextProvider>
);
