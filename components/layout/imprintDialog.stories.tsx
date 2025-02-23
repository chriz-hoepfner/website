import { Meta, StoryFn } from '@storybook/react';

import { ImprintContextProvider } from './imprintContext';
import { ImprintDialog as ImprintDialogComponent } from './imprintDialog';

export default {
  title: 'Components/Layout/ImprintDialog',
  component: ImprintDialogComponent,
} as Meta<typeof ImprintDialogComponent>;

const Template: StoryFn<typeof ImprintDialogComponent> = args => (
  <ImprintContextProvider isInitiallyVisible={true}>
    <ImprintDialogComponent {...(args as object)} />
  </ImprintContextProvider>
);

export const ImprintDialog = Template.bind({});
