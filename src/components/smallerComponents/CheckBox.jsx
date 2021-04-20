import React from 'react';
import PropTypes from 'prop-types';

class CheckBox extends React.Component {
  render() {
    const { bookmarkedOnly, onBookmarkedChange } = this.props;
    return (
      <label data-testid="checkbox-input-label" htmlFor="input-form">
        <input
          id="input-form"
          data-testid="checkbox-input"
          type="checkbox"
          checked={ bookmarkedOnly }
          onChange={ onBookmarkedChange }
        />
        Mostrar somente favoritos
      </label>
    );
  }
}

CheckBox.propTypes = {
  bookmarkedOnly: PropTypes.func,
  onBookmarkedChange: PropTypes.func,
};

CheckBox.defaultProps = {
  bookmarkedOnly: PropTypes.func,
  onBookmarkedChange: PropTypes.func,
};

export default CheckBox;
