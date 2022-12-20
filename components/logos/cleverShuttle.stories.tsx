import { ComponentMeta, ComponentStory } from '@storybook/react';

import { CleverShuttleLogo as CleverShuttleLogoComponent } from './cleverShuttle';

export default {
  title: 'Components/Logos/CleverShuttleLogo',
  component: CleverShuttleLogoComponent,
} as ComponentMeta<typeof CleverShuttleLogoComponent>;

export const CleverShuttleLogo: ComponentStory<
  typeof CleverShuttleLogoComponent
> = args => <CleverShuttleLogoComponent {...(args as object)} />;
