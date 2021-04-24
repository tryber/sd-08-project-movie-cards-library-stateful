import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputSearchBar extends Component {
  render() {
    const {
      text,
      onTextChange,
    } = this.props;

    return (
      <label data-testid="text-input-label" htmlFor="text-input-label">
        Inclui o texto:
        <input
          data-testid="text-input"
          type="text"
          value={ text }
          onChange={ onTextChange }
        />
      </label>
    );
  }
}

InputSearchBar.propTypes = {
  text: PropTypes.string.isRequired,
  onTextChange: PropTypes.func.isRequired,
};

export default InputSearchBar;
