import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { TextField, Chip } from '@material-ui/core';
import useChipInputStyles from './chipInputStyle';

const ChipInput = ({ value, name, onChange }) => {
  const classes = useChipInputStyles();
  const [chips, setChip] = useState([]);
  const [data, setData] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    onChange(chips.map(chip => chip.data), name);
  }, [chips]);

  const handleAddChip = () => {
    const chip = { _id: new Date().valueOf(), data };

    setChip([...chips, chip]);
  };

  const handleDataChange = e => setData(e.target.value);

  const handleChipDelete = chipToDelete => setChip(ch => ch.filter(c => c !== chipToDelete));

  const resetInputValue = () => {
    inputRef.current.value = '';
    setData('');
  };

  const handleKeyPress = (e) => {
    e.persist();

    if (e.key === 'Enter' && e.target.value) {
      handleAddChip();
      resetInputValue();
    }
  };

  return (
    <>
      <TextField
        value={value}
        name={name}
        label={name}
        margin="normal"
        inputRef={inputRef}
        variant="outlined"
        onChange={handleDataChange}
        onKeyPress={handleKeyPress}
      />
      <div className={classes.chipContainer}>
        {chips.map(chip => (
          <Chip
            key={chip._id}
            label={chip.data}
            name={name}
            onDelete={() => handleChipDelete(chip)}
          />
        ))}
      </div>
    </>
  );
};

ChipInput.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default ChipInput;
