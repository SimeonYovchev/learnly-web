import { makeStyles } from '@material-ui/styles';

export default makeStyles(theme => ({
  root: {
    marginBottom: '20px',
  },
  header: {
    display: 'flex',
    color: `${theme.palette.text.secondary}`,
  },
  headerIcon: {
    marginRight: '20px',
  },
  exampleContainer: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    margin: theme.spacing(1),
  },
}));
