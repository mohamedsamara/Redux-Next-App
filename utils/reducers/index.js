/*
 *
 * reducers.js
 * reducers configuration
 */

import { combineReducers } from 'redux';
import { reducer as notifications } from 'react-notification-system-redux';

// import reducers
import todoReducer from './todo.reducer';

const createReducer = () =>
  combineReducers({
    notifications,
    todo: todoReducer,
  });

export default createReducer;
