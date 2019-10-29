import { FETCH_TODOS } from '../actionTypes/todo.types';

export const fetchTodos = todos => {
  return {
    type: FETCH_TODOS,
    payload: todos,
  };
};
