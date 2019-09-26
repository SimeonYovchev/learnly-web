import React from 'react';
import PropTypes from 'prop-types';
import { Typography, Chip } from '@material-ui/core';
import { TranslateOutlined } from '@material-ui/icons';
import useWordTranslationsStyle from './wordTranslationsStyle';

const WordTranslations = ({ translations }) => {
  const classes = useWordTranslationsStyle();

  return (
    <div className={classes.root}>
      <Typography variant="h4" className={classes.header}>
        <TranslateOutlined className={classes.translationIcon} />
        Translations
      </Typography>
      <div className={classes.translationContainer}>
        {translations.map((translation, i) => (
          <Chip
            label={translation.text}
            className={classes.chip}
            key={i}
          />
        ))}
      </div>
    </div>
  );
};

WordTranslations.propTypes = {
  translations: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default WordTranslations;
