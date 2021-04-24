import React from 'react';
import Proptypes from 'prop-types';

class InputCheckBox extends React.Component {
  render() {
    const { bookmarkedOnly, onBookmarkedChange } = this.props;
    return (
      <label
        htmlFor="input-check"
        data-testid="checkbox-input-label"
      >
        Mostrar somente favoritos
        <input
          id="input-check"
          type="checkbox"
          checked={ bookmarkedOnly }
          onChange={ onBookmarkedChange }
          data-testid="checkbox-input"
        />
      </label>
    );
  }
}

export default InputCheckBox;

InputCheckBox.propTypes = {
  bookmarkedOnly: Proptypes.bool.isRequired,
  onBookmarkedChange: Proptypes.func.isRequired,
};
