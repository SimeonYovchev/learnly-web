import { createMuiTheme } from '@material-ui/core';

import palette from './palette';
import typography from './typography';
// import overrides from './overrides';

const theme = createMuiTheme({
  palette,
  typography,
  overrides: {
    MuiOutlinedInput: {
      root: {
        position: 'relative',
        '& $notchedOutline': {
          borderColor: 'rgba(0, 0, 0, 0.23)',
        },
        '&:hover:not($disabled):not($focused):not($error) $notchedOutline': {
          borderColor: '#3C4252',
          // Reset on touch devices, it doesn't add specificity
          '@media (hover: none)': {
            borderColor: 'rgba(0, 0, 0, 0.23)',
          },
        },
        '&$focused $notchedOutline': {
          borderColor: '#3C4252',
          borderWidth: 2,
        },
      },
    },
    MuiFormLabel: {
      root: {
        '&$focused': {
          color: '#3C4252',
        },
      },
    },
    MuiDrawer: {
      root: {
        flexShrink: 0,
      },
      paper: {
        backgroundColor: 'rgb(48, 48, 48)',
        boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)',
      },
    },
    MuiAppBar: {
      root: {
        backgroundColor: '#fff',
      },
      colorPrimary: {
        color: '#12161B',
      },
    },
    MuiListItemText: {
      root: {
        color: '#E4E7EB',
      },
    },
  },
});

export default theme;
