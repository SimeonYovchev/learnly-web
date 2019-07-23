import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import clsx from 'clsx';
import { Drawer, Typography } from '@material-ui/core';
import NavigationMenu from '../NavigationMenu';
import { useStyles } from '../../hooks/useStyle';

const Sidebar = ({ open, user }) => {
  const classes = useStyles();

  return (
    <Drawer
      variant="permanent"
      className={clsx(classes.drawer, {
        [classes.drawerOpen]: open,
        [classes.drawerClose]: !open,
      })}
      classes={{
        paper: clsx({
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        }),
      }}
      open={open}
    >
      <div className={classes.toolbar} style={{ color: '#fff', backgroundColor: '#3C4252' }}>
        <Typography variant="h4">
          Learnly
        </Typography>
      </div>
      <div>{user && user.name}</div>
      <div>{user && user.email}</div>
      <NavigationMenu />
    </Drawer>
  );
};

const mapStateToProps = (state) => {
  return {
    open: state.sidebarReducer.isOpen,
  };
};

Sidebar.propTypes = {
  open: PropTypes.bool.isRequired,
  user: PropTypes.shape().isRequired,
};

export default connect(mapStateToProps)(Sidebar);
