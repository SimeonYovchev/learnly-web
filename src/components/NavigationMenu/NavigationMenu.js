import React from 'react';
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  List,
} from '@material-ui/core';
import ViewListIcon from '@material-ui/icons/ViewList';
import DashboardIcon from '@material-ui/icons/Dashboard';
import SettingsIcon from '@material-ui/icons/Settings';
import { Link } from 'react-router-dom';

const NavigationMenu = () => (
  <List>
    <ListItem button component={Link} to="/dashboard">
      <ListItemIcon>
        <DashboardIcon style={{ color: '#fff' }} />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
    <ListItem button component={Link} to="/words">
      <ListItemIcon>
        <ViewListIcon style={{ color: '#fff' }} />
      </ListItemIcon>
      <ListItemText primary="Words" />
    </ListItem>
    <ListItem button component={Link} to="/login">
      <ListItemIcon>
        <SettingsIcon style={{ color: '#fff' }} />
      </ListItemIcon>
      <ListItemText primary="Login" />
    </ListItem>
    <ListItem button component={Link} to="/settings">
      <ListItemIcon>
        <SettingsIcon style={{ color: '#fff' }} />
      </ListItemIcon>
      <ListItemText primary="Settings" />
    </ListItem>
  </List>
);

export default NavigationMenu;
