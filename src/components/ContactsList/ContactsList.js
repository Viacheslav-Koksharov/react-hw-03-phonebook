import React from 'react';
import ContactItem from '../ContactItem/ContactItem';
import PropTypes from 'prop-types';
import s from '../ContactsList/ContactsList.module.css';

const ContactsList = ({ contacts, onDeleteContact }) => (
  <ul className={s.list}>
    {contacts.map(({ id, name, number }) => (
      <ContactItem
        key={id}
        id={id}
        name={name}
        number={number}
        onDeleteContact={onDeleteContact}
      />
    ))}
  </ul>
);

ContactItem.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.bool.isRequired,
    }),
  ),
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactsList;
