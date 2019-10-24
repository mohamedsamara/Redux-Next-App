import React from 'react';

import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';

import Header from './Header';

const useStyles = makeStyles(() => ({
  root: {
    marginTop: 20,
  },
}));

const Layout = props => {
  const classes = useStyles();
  return (
    // <></> is also a new short syntax for declaring React Fragment
    <>
      <CssBaseline />
      <Header />
      <Container maxWidth="sm" className={classes.root}>
        {props.children}
      </Container>
    </>
  );
};

export default Layout;
