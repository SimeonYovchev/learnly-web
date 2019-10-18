import React from 'react';
import PropTypes from 'prop-types';
import SelectField from '../common/SelectField/SelectField';

const Sort = ({ path, sortFields, onSort }) => {

  return (
    <SelectField
      value={path}
      label="Sort by"
      name="sortBy"
      options={sortFields}
      onChange={onSort}
    />
  );
};

Sort.propTypes = {
  path: PropTypes.string.isRequired,
  sortFields: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  onSort: PropTypes.func.isRequired,
};

export default Sort;
