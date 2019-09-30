import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Grid } from '@material-ui/core';
import { getWords, clearWords } from '../../actions/wordsActions';
import WordCard from '../WordCard';
import Pagination from '../Pagination/Pagination';
import Sort from '../SortComponent';
import { wordsSortFields } from '../../constants/sortFields';

const WordsList = ({
  words, totalCount, page, size, fetchWords, clearWords, sortBy, direction,
}) => {
  useEffect(() => {
    fetchWords(page, size, sortBy, direction);
    return () => {
      clearWords();
    };
  }, [fetchWords]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }, [page]);

  const handleChangePage = (e, newPage) => {
    fetchWords(newPage, size, sortBy, direction);
  };

  const handleSort = (e) => {
    const sortField = e.target.value;
    const sortObject = { sortBy, direction };
    if (sortField === sortBy) {
      sortObject.direction = (direction === 'desc') ? 'asc' : 'desc';
    } else {
      sortObject.sortBy = sortField;
      sortObject.direction = 'desc';
    }

    fetchWords(page, size, sortObject.sortBy, sortObject.direction);
  };

  return (
    <React.Fragment>
      <div>
        <Sort
          path={sortBy}
          sortFields={wordsSortFields}
          onSort={handleSort}
        />
      </div>

      <Grid container spacing={3}>
        {words.map(word => <WordCard key={word._id} word={word} />)}
      </Grid>
      <Pagination
        itemsPerPage={size}
        totalCount={totalCount}
        currentPage={page}
        onPageChange={handleChangePage}
      />
    </React.Fragment>
  );
};

const mapStateToProps = state => ({
  words: state.wordsReducer.wordsData.wordsList,
  totalCount: state.wordsReducer.wordsData.totalCount,
  page: state.wordsReducer.wordsData.currentPage,
  size: state.wordsReducer.wordsData.itemsPerPage,
  isLoaded: state.wordsReducer.isLoaded,
  itemsPerPage: state.wordsReducer.wordsData.itemsPerPage,
  sortBy: state.wordsReducer.wordsData.sortBy,
  direction: state.wordsReducer.wordsData.direction,
});

const mapDispatchToProps = dispatch => ({
  fetchWords: bindActionCreators(getWords, dispatch),
  clearWords: bindActionCreators(clearWords, dispatch),
});

WordsList.propTypes = {
  words: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  totalCount: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
  size: PropTypes.number.isRequired,
  sortBy: PropTypes.string.isRequired,
  direction: PropTypes.string.isRequired,
  fetchWords: PropTypes.func.isRequired,
  clearWords: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(WordsList);
