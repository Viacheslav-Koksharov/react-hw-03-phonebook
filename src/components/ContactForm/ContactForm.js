import React, { Component } from 'react';
import shortid from 'shortid';
import PropTypes from 'prop-types';
import s from '../ContactForm/ContactForm.module.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };
  nameInputId = shortid.generate();
  numberInputId = shortid.generate();

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  submitForm = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.resetForm();
  };

  resetForm = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form className={s.list} onSubmit={this.submitForm}>
        <label className={s.label} htmlFor={this.nameInputId}>
          Name
          <input
            className={s.input}
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
            id={this.nameInputId}
          />
        </label>
        <label className={s.label} htmlFor={this.numberInputId}>
          Number
          <input
            className={s.input}
            type="tel"
            name="number"
            value={number}
            onChange={this.handleChange}
            id={this.numberInputId}
          />
        </label>
        <button className={s.button} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
export default ContactForm;
