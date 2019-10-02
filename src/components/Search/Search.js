import React from 'react';
import PropTypes from 'prop-types';
import { TextField, InputAdornment } from '@material-ui/core';
import { SearchOutlined } from '@material-ui/icons';

const Search = ({ onSearch }) => {
  return (
    <TextField
      type="text"
      name="search"
      label="Search"
      placeholder="Search"
      variant="outlined"
      onChange={onSearch}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <SearchOutlined style={{ color: 'rgba(0, 0, 0, 0.54)' }} />
          </InputAdornment>
        ),
      }}
      InputLabelProps={{
        shrink: true,
      }}
    />
  );
};

Search.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default Search;
