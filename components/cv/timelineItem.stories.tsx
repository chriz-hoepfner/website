import { Meta, StoryFn } from '@storybook/react';

import { TimelineItem as TimelineItemComponent } from './timelineItem';

export default {
  title: 'Components/CV/TimelineItem',
  component: TimelineItemComponent,
} as Meta<typeof TimelineItemComponent>;

const Template: StoryFn<typeof TimelineItemComponent> = args => (
  <TimelineItemComponent {...args} />
);

export const TimelineItem = Template.bind({});
TimelineItem.args = {
  title: 'Exercitation officia minim',
  subtitle: 'Consectetur quis fugiat proident',
  description:
    'Excepteur quis consequat fugiat enim occaecat ad. Deserunt in laborum laboris irure ea commodo eu dolore irure proident.',
  important: true,
};
