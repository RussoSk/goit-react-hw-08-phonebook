import React from 'react';
import { TextField } from '@mui/material';

import { useSelector, useDispatch } from 'react-redux';
import { selectFilter } from 'redux/selectors';
import { filter } from 'redux/store';



const Filter = () => {
  const dispatch = useDispatch();
  const filterRedux = useSelector(selectFilter);

  const onFilterChange = e => {
    const value = e.target.value.toLowerCase();
    dispatch(filter(value));
  };
  return (
    <div>
      <TextField
        variant="outlined"
        id="outlined-basic"
        label="Find the contact"
        type="text"
        value={filterRedux}
        onChange={onFilterChange}
        sx={{
          color: 'inherit',
          textDecoration: 'none',
          boxShadow: 'rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px',
        }}
      />
    </div>
  );
};

export default Filter;