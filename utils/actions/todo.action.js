import fetch from 'isomorphic-unfetch';

import { FETCH_TODOS } from '../actionTypes/todo.types';

export const fetchTodos = todos => {
  return {
    type: FETCH_TODOS,
    payload: todos,
  };
};

// fetch todos api
export const fetchTodosApi = () => {
  return async dispatch => {
    try {
      const settings = {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      };

      const response = await fetch('/api/todos', settings);
      const todos = await response.json();

      dispatch({
        type: FETCH_TODOS,
        payload: todos,
      });
    } catch (err) {
      console.error(err);
    }
  };
};
