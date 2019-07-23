import React from 'react';
import PropTypes from 'prop-types';
import {
  Grid,
  Paper,
  Typography,
  Divider,
  Tooltip,
} from '@material-ui/core';
import { AccessTime, CheckCircleOutline } from '@material-ui/icons';
import useWordCardStyle from './style';

const WordCard = ({ word }) => {
  const classes = useWordCardStyle();

  return (
    <Grid
      item
      lg={3}
      md={4}
      sm={6}
      xs={12}
    >
      <Paper className={classes.root}>
        <Typography
          className={classes.title}
          variant="h3"
        >
          {word.text}
        </Typography>
        <Typography className={classes.description} variant="body1">
          {word.translations[0].text}
        </Typography>
        <Divider />
        <div className={classes.stats}>
          <AccessTime className={classes.lastPracticedIcon} />
          <Tooltip disableFocusListener disableTouchListener title="Last practiced">
            <Typography
              className={classes.lastPracticedText}
              variant="body2"
            >
              2hr ago
            </Typography>
          </Tooltip>
          <CheckCircleOutline className={classes.totalPracticedIcon} />
          <Tooltip disableFocusListener disableTouchListener title="Total practiced">
            <Typography
              className={classes.totalPracticedText}
              variant="body2"
            >
              {word.answers && word.answers.length}
              &nbsp;Times
            </Typography>
          </Tooltip>
        </div>
      </Paper>
    </Grid>
  );
};

WordCard.propTypes = {
  word: PropTypes.shape().isRequired,
};

export default WordCard;
