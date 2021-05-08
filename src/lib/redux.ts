// A simple redux store/actions/reducer implementation.
// A true app would be more complex and separated into different files.
import { createStore } from 'redux';

// The actions are the "names" of the changes that can happen to the store
export const actions = {
  SET_LOADING: "SET_LOADING",
  ARCHIVE_TASK: 'ARCHIVE_TASK',
  PIN_TASK: 'PIN_TASK',
};

interface TaskActionInterface {
  type: string
  id: string
}

interface setLoadingInterface {
  type: string
  id: string
}

type ActionInterface = TaskActionInterface | setLoadingInterface;

interface InitialStateInterface {
  tasks: any[]
  loading: boolean
}

const initialState: InitialStateInterface = {
  tasks: [],
  loading: true
}


// The action creators bundle actions with the data required to execute them
export const archiveTask = (id: string) => ( { type: actions.ARCHIVE_TASK, id } );
export const pinTask = (id: string) => ( { type: actions.PIN_TASK, id } );
export const setLoading = () => ( { type: actions.SET_LOADING } );

// All our reducers simply change the state of a single task.
function taskStateReducer(taskState: string) {
  return (state: ReduxStateInterface, action: ActionInterface) => {
    return {
      ...state,
      tasks: state.tasks.map(task =>
        task.id === action.id ? { ...task, state: taskState } : task
      ),
    };
  };
}

// The reducer describes how the contents of the store change for each action
export const reducer = (state = initialState, action: TaskActionInterface) => {
  switch (action.type) {
    case actions.SET_LOADING:
      return { ...state, loading: false }
    case actions.ARCHIVE_TASK:
      return taskStateReducer('TASK_ARCHIVED')(state, action);
    case actions.PIN_TASK:
      return taskStateReducer('TASK_PINNED')(state, action);
    default:
      return state;
  }
};

// The initial state of our store when the app loads.
// Usually you would fetch this from a server
const defaultTasks: TaskInterface[] = [
  { id: '1', title: 'Book Reading', state: 'TASK_INBOX', updatedAt: new Date() },
  { id: '2', title: 'Excercise', state: 'TASK_INBOX', updatedAt: new Date() },
  { id: '3', title: 'Coding', state: 'TASK_INBOX', updatedAt: new Date() },
  { id: '4', title: 'Study', state: 'TASK_INBOX', updatedAt: new Date() },
];

// We export the constructed redux store
export default createStore(reducer, { tasks: defaultTasks, loading: true });
