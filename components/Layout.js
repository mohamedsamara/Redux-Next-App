import React from 'react';

import { useSelector } from 'react-redux';

import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';

import Notifications from 'react-notification-system-redux';

import Header from './Header';

import { withRedux } from '../lib/redux';

const useStyles = makeStyles(() => ({
  root: {
    marginTop: 20,
  },
}));

const Layout = props => {
  const classes = useStyles();
  const notifications = useSelector(state => state.notifications);

  return (
    // <></> is also a new short syntax for declaring React Fragment
    <>
      <CssBaseline />
      <Header />
      <Notifications notifications={notifications} />
      <Container maxWidth="sm" className={classes.root}>
        {props.children}
      </Container>
    </>
  );
};

export default withRedux(Layout);
