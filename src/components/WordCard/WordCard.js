import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Paper, Typography } from '@material-ui/core';
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
      <Paper>
        <Typography
          className={classes.title}
          variant="h4"
        >
          {word.text}
        </Typography>
        <Typography className={classes.description} variant="body1">
          {word.translations.map((t, i) => <span key={i} style={{ margin: '5px' }}>{t.text}</span>)}
        </Typography>
      </Paper>
    </Grid>
  );
};

WordCard.propTypes = {
  word: PropTypes.shape().isRequired,
};

export default WordCard;
