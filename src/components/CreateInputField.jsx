// implement AddMovie component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CreateInputField extends Component {
  render() {
    const { name,
      dataTestid,
      text,
      inPutDataTestid,
      type, inputValue, callBack } = this.props;
    return (
      <label htmlFor={ name } data-testid={ dataTestid }>
        { text }
        <input
          id={ name }
          name={ name }
          data-testid={ inPutDataTestid }
          type={ type }
          value={ inputValue }
          onChange={ callBack }
        />
      </label>
    );
  }
}

CreateInputField.propTypes = {
  name: PropTypes.string.isRequired,
  dataTestid: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  inPutDataTestid: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  inputValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  callBack: PropTypes.func.isRequired,
};

export default CreateInputField;
