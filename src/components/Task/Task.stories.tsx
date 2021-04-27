import * as React from 'react';

import Task from './Task';

export default {
  component: Task,
  title: 'Task',
};

const Template = (args: TaskComponentProps) => <Task {...args} />

export const Default = Template.bind({});

//@ts-ignore
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
//@ts-ignore
Pinned.args = {
  task: {
    //@ts-ignore
    ...Default.args.task,
    state: 'TASK_PINNED',
  },
};

export const Archived = Template.bind({});
//@ts-ignore
Archived.args = {
  task: {
    //@ts-ignore
    ...Default.args.task,
    state: 'TASK_ARCHIVED',
  },
};