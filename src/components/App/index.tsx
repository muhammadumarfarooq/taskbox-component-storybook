import React from 'react';
import './app.scss';
import TaskList from "../TaskList/TaskList";
import store from '../../lib/redux';

import { Provider } from 'react-redux';


function Index() {
  
  return (
    <Provider store={store}>
      <div className="app">
        <h1 className="app--title">Task Manager</h1>
        <TaskList/>
      </div>
    </Provider>
  
  );
}

export default Index;
