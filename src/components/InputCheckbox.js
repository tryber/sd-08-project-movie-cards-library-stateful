import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputCheckbox extends Component {
  render() {
    const {
      markedOnly,
      onChange,
    } = this.props;

    return (
      <label data-testid="checkbox-input-label" htmlFor="text-input-label">
        Mostrar somente favoritos
        <input
          data-testid="checkbox-input"
          checked={ markedOnly }
          type="checkbox"
          onChange={ onChange }
        />
      </label>
    );
  }
}

InputCheckbox.propTypes = {
  markedOnly: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputCheckbox;
