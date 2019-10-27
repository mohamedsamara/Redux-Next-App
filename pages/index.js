import { withRedux } from '../lib/redux';

import Home from './home';

const Index = () => {
  return <Home />;
};
Index.getInitialProps = ({ reduxStore }) => {
  const { dispatch } = reduxStore;
  dispatch({
    type: 'DEFAULT_ACTION',
    payload: 'header',
  });

  return {};
};

export default withRedux(Index);
