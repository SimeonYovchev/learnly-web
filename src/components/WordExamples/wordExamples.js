import React from 'react';
import PropTypes from 'prop-types';
import { Typography, Chip } from '@material-ui/core';
import { VolumeUpOutlined, SpeakerNotesOutlined } from '@material-ui/icons';
import speechService from '../../services/speechService';
import useWordAnswersStyle from './wordExamplesStyle';

const WordExamples = ({ examples }) => {
  const classes = useWordAnswersStyle();

  return (
    <div className={classes.root}>
      <Typography variant="h4" className={classes.header}>
        <SpeakerNotesOutlined className={classes.headerIcon} />
        Examples
      </Typography>
      <div className={classes.exampleContainer}>
        {examples.map((example, i) => (
          <Chip
            className={classes.chip}
            key={i}
            icon={<VolumeUpOutlined />}
            label={example.text}
            onClick={() => { speechService.speak(example.text); }}
          />
        ))}
      </div>
    </div>
  );
};

WordExamples.propTypes = {
  examples: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default WordExamples;
