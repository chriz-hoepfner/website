import { ComponentMeta, ComponentStory } from '@storybook/react';

import { TimelineLabel as TimelineLabelComponent } from './timelineLabel';

export default {
  title: 'Components/CV/TimelineLabel',
  component: TimelineLabelComponent,
} as ComponentMeta<typeof TimelineLabelComponent>;

const Template: ComponentStory<typeof TimelineLabelComponent> = args => (
  <TimelineLabelComponent {...args} />
);

export const TimelineLabel = Template.bind({});
TimelineLabel.args = {
  from: 'Dec 1972',
  to: 'Apr 2022',
  important: true,
};
