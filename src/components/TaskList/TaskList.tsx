import * as React from 'react';
import Task from '../Task/Task';

import { connect } from 'react-redux';
import { archiveTask, pinTask, setLoading } from '../../lib/redux';

export const TaskList = ({ loading, tasks, onPinTask, onArchiveTask, setLoading }: TaskListProps): JSX.Element => {
  
  React.useEffect(() => {
    //a delay for 3 seconds to show loading component then show tasks
    setTimeout(() => {
      setLoading();
    }, 3000);
    //  eslint-disable-next-line
  }, [])
  
  
  const events = {
    onPinTask,
    onArchiveTask,
  };
  
  const LoadingRow = (
    <div className="loading-item">
      <span className="glow-checkbox"/>
      <span className="glow-text">
        <span>Loading</span> <span>cool</span> <span>state</span>
      </span>
    </div>
  );
  if ( loading ) {
    return (
      <div className="list-items">
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
      </div>
    );
  }
  
  if ( tasks.every((task) => task.state === "TASK_ARCHIVED") ) {
    return (
      <div className="list-items">
        <div className="wrapper-message">
          <span className="icon-check"/>
          <div className="title-message">You have no tasks</div>
          <div className="subtitle-message">Sit back and relax</div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="list-items">
      {tasks.map(task => (
        <Task key={task.id} task={task} {...events} />
      ))}
    </div>
  );
};

export default connect(
  ({ tasks, loading }: TaskListProps) => {
    
    const archivedTasks = tasks.filter(task => task.state === "TASK_ARCHIVED");
    const pinnedTasks = tasks.filter(task => task.state === "TASK_PINNED");
    const inboxTasks = tasks.filter(task => task.state === "TASK_INBOX");
    
    return ( {
      tasks: [...archivedTasks, ...pinnedTasks, ...inboxTasks],
      loading
    } )
  },
  dispatch => ( {
    onArchiveTask: (id: string) => dispatch(archiveTask(id)),
    onPinTask: (id: string) => dispatch(pinTask(id)),
    setLoading: () => dispatch(setLoading())
  } )
)(TaskList);
