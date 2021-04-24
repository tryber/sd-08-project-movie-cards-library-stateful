import React from 'react';
import PropTypes from 'prop-types';

class CheckboxInput extends React.Component {
  render() {
    const { checked, onChange } = this.props;
    return (
      <label htmlFor="checkbox" data-testid="checkbox-input-label">
        Mostrar somente favoritos
        <input
          data-testid="checkbox-input"
          type="checkbox"
          checked={ checked }
          onChange={ onChange }
          id="checkbox"
        />
      </label>
    );
  }
}

CheckboxInput.propTypes = {
  checked: PropTypes.bool,
  onChange: PropTypes.func,
}.isRequired;

export default CheckboxInput;
