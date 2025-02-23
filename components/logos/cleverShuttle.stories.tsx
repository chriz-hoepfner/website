import { Meta, StoryFn } from '@storybook/react';

import { CleverShuttleLogo as CleverShuttleLogoComponent } from './cleverShuttle';

export default {
  title: 'Components/Logos/CleverShuttleLogo',
  component: CleverShuttleLogoComponent,
} as Meta<typeof CleverShuttleLogoComponent>;

const Template: StoryFn<typeof CleverShuttleLogoComponent> = args => (
  <CleverShuttleLogoComponent {...(args as object)} />
);

export const CleverShuttleLogo = Template.bind({});
