import * as React from 'react';
import { Story, Meta } from '@storybook/react';

import Task from './Task';

export default {
  component: Task,
  title: 'Task',
} as Meta;

const Template: Story<TaskComponentProps> = (args) => <Task {...args} />

export const Default = Template.bind({});

Default.args = {
  task: {
    id: '1',
    title: 'Test Task',
    state: 'TASK_INBOX',
    updatedAt: new Date(2018, 0, 1, 9, 0),
  },
  onArchiveTask: () => {
  },
  onPinTask: () => {
  }
};


export const Pinned = Template.bind({});

Pinned.args = {
  task: {
    id: '2',
    title: 'Test Task',
    state: 'TASK_PINNED',
    updatedAt: new Date()
  },
  onArchiveTask: () => {
  },
  onPinTask: () => {
  }
};

export const Archived = Template.bind({});
Archived.args = {
  task: {
    id: '3',
    title: 'Test Task',
    updatedAt: new Date(),
    state: 'TASK_ARCHIVED',
  },
};
