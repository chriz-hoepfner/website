import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ProjectALogo as ProjectALogoComponent } from './projectA';

export default {
  title: 'Components/Logos/ProjectALogo',
  component: ProjectALogoComponent,
} as ComponentMeta<typeof ProjectALogoComponent>;

export const ProjectALogo: ComponentStory<
  typeof ProjectALogoComponent
> = args => <ProjectALogoComponent {...(args as object)} />;
