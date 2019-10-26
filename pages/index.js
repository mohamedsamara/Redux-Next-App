import Home from './home';

import { withRedux } from '../lib/redux';

const Index = () => <Home />;

export default withRedux(Index);
