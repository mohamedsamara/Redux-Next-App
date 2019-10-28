/*
 *
 * reducers.js
 * reducers configuration
 */

import { combineReducers } from 'redux';

// import reducers
import todoReducer from './todo.reducer';

const createReducer = () =>
  combineReducers({
    todo: todoReducer,
  });

export default createReducer;
