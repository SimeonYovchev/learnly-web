import { makeStyles } from '@material-ui/core';

export default makeStyles(theme => ({
  chipContainer: {
    marginBottom: '10px',
    '& > *': {
      margin: theme.spacing(0.3),
    },
  },
}));
