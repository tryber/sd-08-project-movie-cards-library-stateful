import React from 'react';
import PropTypes from 'prop-types';

class SearchCheckbox extends React.Component {
  render() {
    const { bookmarkedOnly, onBookmarkedChange } = this.props;
    return (
      <label htmlFor="input-checkbox" data-testid="checkbox-input-label">
        Mostrar somente favoritos
        <input
          id="input-checkbox"
          type="checkbox"
          checked={ bookmarkedOnly }
          onChange={ onBookmarkedChange }
          data-testid="checkbox-input"
        />
      </label>
    );
  }
}

SearchCheckbox.propTypes = {
  bookmarkedOnly: PropTypes.bool,
  onBookmarkedChange: PropTypes.func.isRequired,
};

SearchCheckbox.defaultProps = {
  bookmarkedOnly: false,
};

export default SearchCheckbox;
