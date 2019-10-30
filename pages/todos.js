import { useSelector } from 'react-redux';

import Layout from '../components/Layout';
import Head from '../components/Head';

import { withRedux } from '../lib/redux';

import { fetchTodos } from '../utils/actions/todo.action';

const Todos = () => {
  const todos = useSelector(state => state.todo.todos);

  console.log('todos', todos);

  return (
    <Layout>
      <Head
        title="Todos"
        description="Todo page, todo list, add todo, delete todo, complete todo"
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
