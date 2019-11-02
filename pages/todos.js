import { useSelector, useDispatch } from 'react-redux';

import ListSubheader from '@material-ui/core/ListSubheader';
import { makeStyles } from '@material-ui/core/styles';

import Layout from '../components/Layout';
import Head from '../components/Head';
import TodoList from '../components/TodoList';
import TodoForm from '../components/TodoForm';

import { withRedux } from '../lib/redux';

import {
  fetchTodos,
  addTodoApi,
  deleteTodoApi,
  completeTodoApi,
} from '../utils/actions/todo.action';

const useStyles = makeStyles({
  stickyHeader: {
    backgroundColor: '#fff',
  },
});

const Todos = () => {
  const todos = useSelector(state => state.todo.todos);
  const dispatch = useDispatch();

  const classes = useStyles();

  const handleAddTodo = itemValue => {
    dispatch(addTodoApi(itemValue));
  };

  const handleDeleteTodo = (todoIndex, todoId) => {
    dispatch(deleteTodoApi(todoIndex, todoId));
  };

  const handleCompleteTodo = (todoId, value) => {
    dispatch(completeTodoApi(todoId, value));
  };

  return (
    <Layout>
      <Head
        title="Todos"
        description="Todo page, todo list, add todo, delete todo, complete todo"
      />

      <ListSubheader className={classes.stickyHeader}>
        <TodoForm
          saveTodo={todoText => {
            const trimmedText = todoText.trim();

            if (trimmedText.length > 0) {
              handleAddTodo(trimmedText);
            }
          }}
        />
      </ListSubheader>

      <TodoList
        todos={todos}
        completeTodo={handleCompleteTodo}
        deleteTodo={handleDeleteTodo}
      />
    </Layout>
  );
};

Todos.getInitialProps = async ({ req, reduxStore }) => {
  const baseUrl = req ? `${req.protocol}://${req.get('Host')}` : '';
  const response = await fetch(`${baseUrl}/api/todos`);
  const todos = await response.json();

  const { dispatch } = reduxStore;

  dispatch(fetchTodos(todos));
};

export default withRedux(Todos);
