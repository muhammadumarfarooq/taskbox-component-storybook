import React from 'react';

import { Story, Meta } from '@storybook/react';

import TaskList from './TaskList';
import * as TaskStories from '../Task/Task.stories';
import { archivedTasksData, defaultTasksData, pinnedTasksData } from "../../constants/tasksHardcodedData";

export default {
  component: TaskList,
  title: 'TaskList',
  decorators: [story => <div style={{ padding: '3rem' }}>{story()}</div>],
} as Meta;

const Template: Story<TaskListProps> = args => {
  return <TaskList {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  loading: false,
  onPinTask: () => {
  },
  onArchiveTask: () => {
  },
  tasks: defaultTasksData,
};

export const WithPinnedTasks = Template.bind({});
WithPinnedTasks.args = {
  tasks: pinnedTasksData,
};

export const withArchivedTasks = Template.bind({});
withArchivedTasks.args = {
  tasks: archivedTasksData,
};

export const Loading = Template.bind({});
Loading.args = {
  tasks: [],
  loading: true,
};

export const Empty = Template.bind({});
Empty.args = {
  ...Loading.args,
  loading: false,
};
