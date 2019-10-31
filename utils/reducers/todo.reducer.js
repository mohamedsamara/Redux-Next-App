import {
  FETCH_TODOS,
  ADD_TODO,
  DELETE_TODO,
  COMPLETE_TODO,
} from '../actionTypes/todo.types';

const initialState = {
  todos: [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TODOS:
      return {
        ...state,
        todos: action.payload,
      };
    case ADD_TODO:
      return {
        ...state,
        todos: [action.payload, ...state.todos],
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: [
          ...state.todos.slice(0, action.payload),
          ...state.todos.slice(action.payload + 1),
        ],
      };
    case COMPLETE_TODO:
      return {
        ...state,
        todos: [
          ...state.todos.map(todo =>
            todo._id === action.payload
              ? { ...todo, isCompleted: !todo.isCompleted }
              : todo,
          ),
        ],
      };
    default:
      return state;
  }
};

export default todoReducer;
