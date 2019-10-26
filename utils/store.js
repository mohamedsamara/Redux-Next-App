import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const initialState = {};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'DEFAULT_ACTION':
      return {
        ...state,
      };

    default:
      return state;
  }
};

export const initializeStore = (preloadedState = initialState) => {
  return createStore(
    reducer,
    preloadedState,
    composeWithDevTools(applyMiddleware()),
  );
};
