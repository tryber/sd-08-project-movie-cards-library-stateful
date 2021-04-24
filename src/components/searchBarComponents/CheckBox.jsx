import React from 'react';
import Proptypes from 'prop-types';

class CheckBox extends React.Component {
  render() {
    const d = 'checkbox-input';
    const { check, change } = this.props;
    return (
      <label htmlFor="i" data-testid="checkbox-input-label">
        Mostrar somente favoritos
        <input type="checkbox" checked={ check } onChange={ change } data-testid={ d } />
      </label>
    );
  }
}

export default CheckBox;

CheckBox.propTypes = {
  check: Proptypes.bool.isRequired,
  change: Proptypes.func.isRequired,
};
