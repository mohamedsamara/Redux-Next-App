import fetch from 'isomorphic-unfetch';

import { success, info, error } from 'react-notification-system-redux';

import {
  FETCH_TODOS,
  ADD_TODO,
  DELETE_TODO,
  COMPLETE_TODO,
} from '../actionTypes/todo.types';

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
      const notificationOpts = {
        message: `${err}`,
        position: 'tr',
        autoDismiss: 1,
      };

      dispatch(error(notificationOpts));
    }
  };
};

// add todo api
export const addTodoApi = itemValue => {
  const newItem = {
    name: itemValue,
    isCompleted: false,
  };

  return async dispatch => {
    try {
      const settings = {
        method: 'POST',
        body: JSON.stringify(newItem),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      };

      const response = await fetch('/api/todo/add', settings);
      const todo = await response.json();
      dispatch({
        type: ADD_TODO,
        payload: todo,
      });

      const notificationOpts = {
        message: 'Todo has been added successfully!',
        position: 'tr',
        autoDismiss: 1,
      };

      dispatch(success(notificationOpts));
    } catch (err) {
      const notificationOpts = {
        message: `${err}`,
        position: 'tr',
        autoDismiss: 1,
      };
      dispatch(error(notificationOpts));
    }
  };
};

// delete todo api
export const deleteTodoApi = (todoIndex, todoId) => {
  return async dispatch => {
    try {
      const settings = {
        method: 'DELETE',
      };

      const response = await fetch(`/api/todo/delete/${todoId}`, settings);
      const todo = await response.json();

      dispatch({
        type: DELETE_TODO,
        payload: todoIndex,
      });

      const notificationOpts = {
        message: 'Todo has been deleted successfully!',
        position: 'tr',
        autoDismiss: 1,
      };

      if (todo.ok === 1) {
        dispatch(info(notificationOpts));
      }
    } catch (err) {
      const notificationOpts = {
        message: `${err}`,
        position: 'tr',
        autoDismiss: 1,
      };

      dispatch(error(notificationOpts));
    }
  };
};

// complete todo api
export const completeTodoApi = (todoId, itemValue) => {
  const newItem = {
    isCompleted: itemValue,
  };

  return async dispatch => {
    try {
      const settings = {
        method: 'PUT',
        body: JSON.stringify(newItem),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      };

      const response = await fetch(`/api/todo/complete/${todoId}`, settings);
      const todo = await response.json();

      dispatch({
        type: COMPLETE_TODO,
        payload: todoId,
      });

      const notificationOpts = {
        message: itemValue
          ? 'Todo has been completed successfully!'
          : 'Todo has been uncompleted successfully!',
        position: 'tr',
        autoDismiss: 1,
      };

      if (todo.ok === 1) {
        dispatch(info(notificationOpts));
      }
    } catch (err) {
      const notificationOpts = {
        message: `${err}`,
        position: 'tr',
        autoDismiss: 1,
      };

      dispatch(error(notificationOpts));
    }
  };
};
