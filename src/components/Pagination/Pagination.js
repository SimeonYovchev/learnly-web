import React from 'react';
import PropTypes from 'prop-types';
import TablePagination from '@material-ui/core/TablePagination';

const Pagination = ({ itemsPerPage, totalCount, currentPage, onPageChange }) => {
  return (
    <TablePagination
      component="div"
      rowsPerPage={itemsPerPage}
      count={totalCount}
      page={currentPage}
      onChangePage={onPageChange}
    />
  );
};

Pagination.propTypes = {
  itemsPerPage: PropTypes.number.isRequired,
  totalCount: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Pagination;
