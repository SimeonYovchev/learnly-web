import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getWord, clearWord } from '../../actions/wordActions';

const WordDetails = ({ word, match, fetchWord, clearWord }) => {
  const wordId = match.params.id;
  useEffect(() => {
    fetchWord(wordId);
    return () => {
      clearWord();
    };
  }, [wordId, fetchWord, clearWord]);

  return (<div>{word.text}</div>);
}

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
