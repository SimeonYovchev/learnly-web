import { makeStyles } from '@material-ui/styles';

export default makeStyles(theme => ({
  header: {
    display: 'flex',
    color: `${theme.palette.text.secondary}`,
  },
  questionAnswerIcon: {
    marginRight: '20px',
  },
  correctAnswerIcon: {
    color: `${theme.palette.success.main}`,
  },
  incorrectAnswerIcon: {
    color: `${theme.palette.danger.main}`,
  },
}));
