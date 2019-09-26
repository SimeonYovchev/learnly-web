import React from 'react';
import PropTypes from 'prop-types';
import { Typography, IconButton } from '@material-ui/core';
import { VolumeUpOutlined } from '@material-ui/icons';
import speechService from '../../services/speechService';

const WordHeader = ({ text }) => {
  return (
    <div style={{ marginBottom: '10px' }}>
      <Typography variant="h2" align="center">
        {text}
        <IconButton
          aria-label="Pronunciation"
          onClick={() => { speechService.speak(text); }}
        >
          <VolumeUpOutlined />
        </IconButton>
      </Typography>
    </div>
  );
};

WordHeader.propTypes = {
  text: PropTypes.string.isRequired,
};

export default WordHeader;
