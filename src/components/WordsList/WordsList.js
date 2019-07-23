import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Grid } from '@material-ui/core';
import { getWords, clearWords } from '../../actions/wordsActions';
import WordCard from '../WordCard';
import { getJwt } from '../../services/authService';

const WordsList = ({ words, fetchWords, clearWords }) => {
  useEffect(() => {
    fetchWords();
    console.log(getJwt());
    return () => {
      clearWords();
    };
  }, [fetchWords, clearWords]);

  console.log(words);
  return (
    <Grid container spacing={3}>
      {words.map(word => <WordCard key={word._id} word={word} />)}
    </Grid>
  );
};

const mapStateToProps = (state) => {
  return {
    words: state.wordsReducer.words,
  };
};

const mapDispatchToProps = dispatch => ({
  fetchWords: bindActionCreators(getWords, dispatch),
  clearWords: bindActionCreators(clearWords, dispatch),
});

WordsList.propTypes = {
  words: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  fetchWords: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(WordsList);
