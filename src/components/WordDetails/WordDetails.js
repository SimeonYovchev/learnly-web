import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Paper } from '@material-ui/core';
import { getWord, clearWord } from '../../actions/wordActions';
import useWordDetailsStyle from './wordDetailsStyle';
import WordExamples from '../WordExamples/wordExamples';
import WordAnswers from '../WordAnswers/wordAnswers';
import WordTranslations from '../WordTranslations/WordTranslations';
import WordHeader from '../WordHeader/WordHeader';

const WordDetails = ({ word, match, location, fetchWord, clearWord }) => {
  const classes = useWordDetailsStyle();
  const wordId = match.params.id;

  useEffect(() => {
    fetchWord(wordId);
    return () => {
      clearWord();
    };
  }, [wordId, fetchWord, clearWord]);

  return (
    <Paper className={classes.root}>
      <WordHeader text={word.text} />
      <WordTranslations translations={word.translations} />
      <WordExamples examples={word.examples} />
      <WordAnswers answers={word.answers} />
    </Paper>
  );
};

const mapStateToProps = (state) => {
  return {
    word: state.wordReducer.word,
  };
};

const mapDispatchToProps = dispatch => ({
  fetchWord: bindActionCreators(getWord, dispatch),
  clearWord: bindActionCreators(clearWord, dispatch),
});

WordDetails.propTypes = {
  match: PropTypes.shape().isRequired,
  word: PropTypes.shape().isRequired,
  fetchWord: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(WordDetails);
