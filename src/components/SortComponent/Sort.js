import React from 'react';
import PropTypes from 'prop-types';
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  OutlinedInput,
} from '@material-ui/core';
import useSortStyles from './sortStyle';

const Sort = ({ path, sortFields, onSort }) => {
  const classes = useSortStyles();

  return (
    <form>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel> Sort by </InputLabel>
        <Select
          value={path}
          onChange={onSort}
          labelWidth={50}
          input={
            <OutlinedInput name="sortBy" className={classes.input} />
          }
        >
          {sortFields.map(field => (
            <MenuItem
              key={field.key}
              value={field.path}
            >
              {field.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </form>
  );
};

Sort.propTypes = {
  path: PropTypes.string.isRequired,
  sortFields: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  onSort: PropTypes.func.isRequired,
};

export default Sort;
