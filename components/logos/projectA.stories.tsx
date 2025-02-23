import { Meta, StoryFn } from '@storybook/react';

import { ProjectALogo as ProjectALogoComponent } from './projectA';

export default {
  title: 'Components/Logos/ProjectALogo',
  component: ProjectALogoComponent,
} as Meta<typeof ProjectALogoComponent>;

const Template: StoryFn<typeof ProjectALogoComponent> = args => (
  <ProjectALogoComponent {...(args as object)} />
);

export const ProjectALogo = Template.bind({});
