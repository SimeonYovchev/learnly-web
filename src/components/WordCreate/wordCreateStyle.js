import { makeStyles } from '@material-ui/core';

export default makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(2),
    paddingRight: theme.spacing(3),
    paddingLeft: theme.spacing(3),
  },
  header: {
    color: 'rgba(0, 0, 0, 0.87)',
    textTransform: 'uppercase',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: '50%',
    '& button': {
      color: '#fff',
      backgroundColor: `${theme.palette.secondary.main}`,
      marginTop: '20px',
      '&:hover': {
        backgroundColor: `${theme.palette.secondary.dark}`,
      },
    },
  },
}));
