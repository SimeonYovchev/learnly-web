import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import clsx from 'clsx';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from '@material-ui/core';
import { Menu, ChevronLeft } from '@material-ui/icons';
import { toggleSidebar } from '../../actions/sidebarActions';
import { useStyles } from '../../hooks/useStyle';

const AppHeader = ({ toggleSidebar, open, user, onLogout }) => {
  const classes = useStyles();
  useEffect(() => {
    toggleSidebar(true);
  }, [toggleSidebar]);

  const handleToggleSidebar = () => {
    toggleSidebar();
  };

  const toggleSidebarButtons = open ? <ChevronLeft /> : <Menu />;

  return (
    <AppBar
      position="fixed"
      className={clsx(classes.appBar, {
        [classes.appBarShift]: open,
      })}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="Open drawer"
          onClick={handleToggleSidebar}
          edge="start"
          style={{ marginRight: '36px' }}
        >
          {toggleSidebarButtons}
        </IconButton>

        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Home
        </Typography>
        {user && user.name && <Button color="inherit" onClick={onLogout}>Logout</Button>}
      </Toolbar>
    </AppBar>
  );
};

const mapStateToProps = (state) => {
  return {
    open: state.sidebarReducer.isOpen,
  };
};

const mapDispatchToProps = dispatch => ({
  toggleSidebar: bindActionCreators(toggleSidebar, dispatch),
});

AppHeader.propTypes = {
  toggleSidebar: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  user: PropTypes.shape().isRequired,
  onLogout: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(AppHeader);
