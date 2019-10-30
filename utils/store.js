import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

import createReducer from './reducers';

export const initializeStore = (initialState = {}) => {
  return createStore(
    createReducer(),
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware)),
  );
};
