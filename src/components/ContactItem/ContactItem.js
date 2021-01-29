import React from 'react';
import PropTypes from 'prop-types';
import s from '../ContactItem/ContactItem.module.css';

const ContactItem = ({ id, name, number, onDeleteContact }) => {
  return (
    <li className={s.list_item} key={id}>
      <p className={s.text}>{name}:</p>
      <p className={s.text}>{number}</p>
      <button className={s.button} onClick={() => onDeleteContact(id)}>
        Del
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactItem;
