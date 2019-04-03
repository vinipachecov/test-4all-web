import React from 'react';
import PropTypes from 'prop-types';
import classes from './select.module.css';

const Select = ({ items, onClick }) => (
  <select
    className={classes.select}
    defaultValue="Selecione um Produto"
    onClick={event => onClick(event.target.value)}
  >
    {items.map(item => (
      <option
        key={item.id}
        value={item.id}
      >
        {item.name}
      </option>
    ))}
  </select>
);

Select.defaultProps = {
  items: [],
};

Select.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  })),
};

export default Select;
