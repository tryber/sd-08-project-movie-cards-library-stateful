import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TextInput extends Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label data-testid="text-input-label" htmlFor="textInput">
        Inclui o texto:
        <input
          id="textInput"
          value={ value }
          onChange={ onChange }
          data-testid="text-input"
        />
      </label>
    );
  }
}

TextInput.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.string,
}.isRequired;
