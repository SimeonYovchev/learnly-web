import React from 'react';
import PropTypes from 'prop-types';
import {
  MenuItem,
  TextField,
} from '@material-ui/core';

const SelectField = ({ value, label, name, margin, options, onChange }) => {
  return (
    <TextField
      select
      label={label}
      name={name}
      value={value}
      onChange={onChange}
      margin={margin}
      variant="outlined"
    >
      {
        options.map(option => (
          <MenuItem
            key={option.key}
            value={option.value}
          >
            {option.label}
          </MenuItem>
        ))
      }
    </TextField>
  );
};

SelectField.propTypes = {
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  margin: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  onChange: PropTypes.func.isRequired,
};

SelectField.defaultProps = {
  margin: 'none',
};

export default SelectField;
