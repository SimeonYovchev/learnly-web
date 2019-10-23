import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { TextField, Button, Paper, Typography } from '@material-ui/core';
import ChipInput from '../common/ChipInput';
import SelectField from '../common/SelectField';
import { partOfSpeechOptions } from '../../constants/partOfSpeechOptions';
import { createWord } from '../../actions/wordActions';
import useWordCreateStyle from './wordCreateStyle';

const WordCreate = ({ createNewWord, history }) => {
  const classes = useWordCreateStyle();

  const [wordData, setWordData] = useState({
    text: '',
    partOfSpeech: '',
    translations: [],
    examples: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setWordData({ ...wordData, [name]: value });
  };

  const handleChipInputChange = (value, name) => {
    const obj = value.map(v => ({ text: v }));
    setWordData({ ...wordData, [name]: obj });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createNewWord(wordData, history);
  };

  return (
    <Paper className={classes.root}>
      <Typography variant="h2" className={classes.header}>
        create word
      </Typography>
      <form className={classes.form} autoComplete="off">
        <TextField
          name="text"
          label="Word"
          margin="normal"
          variant="outlined"
          onChange={handleChange}
        />

        <SelectField
          value={wordData.partOfSpeech}
          label="Parf of speech"
          name="partOfSpeech"
          margin="normal"
          options={partOfSpeechOptions}
          onChange={handleChange}
        />

        <ChipInput name="translations" onChange={handleChipInputChange} />
        <ChipInput name="examples" onChange={handleChipInputChange} />

        <Button
          className="login-button"
          variant="contained"
          size="large"
          onClick={handleSubmit}
          disabled={!wordData.text || !wordData.translations.length || !wordData.examples.length}
        >
          Create word
        </Button>
      </form>
    </Paper>
  );
};

const mapDispatchToProps = dispatch => ({
  createNewWord: bindActionCreators(createWord, dispatch),
});

WordCreate.propTypes = {
  createNewWord: PropTypes.func.isRequired,
  history: PropTypes.shape().isRequired,
};

export default connect(null, mapDispatchToProps)(WordCreate);
