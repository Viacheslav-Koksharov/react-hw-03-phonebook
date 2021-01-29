import React from 'react';
import PropTypes from 'prop-types';
import s from '../Filter/Filter.module.css';

const Filter = ({ value, onFilterContact }) => {
  return (
    <>
      <label className={s.label} htmlFor="input">
        Find contact by name
      </label>
      <input
        className={s.input}
        type="text"
        id="input"
        value={value}
        onChange={onFilterContact}
      ></input>
    </>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onFilterContact: PropTypes.func.isRequired,
};

export default Filter;
